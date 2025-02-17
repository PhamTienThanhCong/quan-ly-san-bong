import clientPromise from "@quanlysanbong/lib/mongodb";
import { NextResponse } from "next/server";

const DB_NAME = "accounts";
const COLLECTION_NAME = "bankings";

// API GET - Lấy danh sách sân bóng
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const ordersCollection = db.collection(COLLECTION_NAME);

    const orders = await ordersCollection.find({}).sort({ created_at: -1 }).toArray();

    return NextResponse.json({ success: true, data: orders });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// API POST
export async function POST(req) {
  try {
    const client = await clientPromise;

    const db = client.db(DB_NAME);
    const ordersCollection = db.collection(COLLECTION_NAME);

    let data = await req.json();

    const dataOrder = await ordersCollection.insertOne(data);

    return NextResponse.json({ success: true, message: "Nhận qr thành công", data: dataOrder });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}