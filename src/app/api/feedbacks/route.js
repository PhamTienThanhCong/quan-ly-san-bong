import { ROLE_MANAGER } from "@quanlysanbong/constants/System";
import getObjectId from "@quanlysanbong/lib/getObjectId";
import clientPromise from "@quanlysanbong/lib/mongodb";
import { encrypt } from "@quanlysanbong/utils/Security";
import { NextResponse } from "next/server";

// API GET để lấy danh sách feedbacks
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("accounts");
    const accountsCollection = db.collection("feedbacks");

    // Lấy dữ liệu từ bảng feedbacks
    // const feedbacks = await accountsCollection.find({}).toArray();
    // Lấy dữ liệu tạo mới nhất lên trước
    const feedbacks = await accountsCollection.find({}).sort({ created_at: -1 }).toArray();

    return NextResponse.json({ success: true, data: feedbacks });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// API POST để tạo một user mới
export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("accounts"); // Tên database của bạn
    const accountsCollection = db.collection("feedbacks");

    const { userId, title, reason, orderId, stadiumId } = await req.json();

    await accountsCollection.insertOne({
      userId: getObjectId(userId),
      orderId: getObjectId(orderId),
      stadiumId: getObjectId(stadiumId),
      title,
      reason,
      checked: false,
      created_at: new Date()
    });

    return NextResponse.json({ success: true, message: "Feedback created", data: "ok" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
