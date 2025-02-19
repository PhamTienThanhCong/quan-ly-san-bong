import clientPromise from "@quanlysanbong/lib/mongodb";
import getObjectId from "@quanlysanbong/lib/getObjectId";
import { NextResponse } from "next/server";
import { validateToken } from "@quanlysanbong/lib/auth";

const DB_NAME = "stadiums";
const COLLECTION_NAME = "stadium";

// API GET - Lấy danh sách sân
export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const stadiumsCollection = db.collection(COLLECTION_NAME);

    const dbUser = client.db("accounts");
    const accountsCollection = dbUser.collection("users");

    const { id } = params;

    let stadium = await stadiumsCollection.findOne({ _id: getObjectId(id) });

    if (!stadium) {
      return NextResponse.json({ success: false, error: "Không tìm thấy sân" }, { status: 404 });
    }

    const user = await accountsCollection.findOne({ _id: stadium.ownerId });
    console.log("user", stadium.ownerId);
    if (user) {
      stadium = { ...stadium, owner: user };
    }

    return NextResponse.json({ success: true, data: stadium });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
