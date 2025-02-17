import clientPromise from "@quanlysanbong/lib/mongodb";
import { NextResponse } from "next/server";

const DB_NAME = "accounts";
const COLLECTION_NAME = "bankings";

// API GET - Lấy danh sách sân bóng
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const bankingsCollection = db.collection(COLLECTION_NAME);

    const bankings = await bankingsCollection.find({}).sort({ created_at: -1 }).toArray();

    return NextResponse.json({ success: true, data: bankings });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// API POST
export async function POST(req) {
  try {
    const client = await clientPromise;

    const db = client.db(DB_NAME);
    const bankingsCollection = db.collection(COLLECTION_NAME);

    let data = await req.json();

    const dataOrder = await bankingsCollection.insertOne(data);

    return NextResponse.json({ success: true, message: "Nhận qr thành công", data: dataOrder });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const client = await clientPromise;

    const db = client.db(DB_NAME);
    const bankingsCollection = db.collection(COLLECTION_NAME);

    let { content, transferAmount } = await req.json();

    // Find banking document that matches both content and transferAmount
    const banking = await bankingsCollection.findOne({
      content: { $regex: content, $options: "i" }, // Case-insensitive search for content
      transferAmount: transferAmount
    });

    if (!banking) {
      return NextResponse.json({ success: true, data: "none" }, { status: 200 });
    }

    // If you need to modify or return the banking document, continue with your logic here
    return NextResponse.json({ success: true, data: "done" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
