import clientPromise from "@quanlysanbong/lib/mongodb";
import getObjectId from "@quanlysanbong/lib/getObjectId";
import { NextResponse } from "next/server";
import { validateToken } from "@quanlysanbong/lib/auth";

const DB_NAME = "stadiums";
const COLLECTION_NAME = "orders";

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

    const objectId = await validateToken(req);

    let { stadiumId, ownerId, field, time, date, deposit } = await req.json();

    deposit = parseInt(deposit);

    deposit = deposit * 30 / 100;

    // làm tròn số tiền cọc
    deposit = Math.ceil(deposit / 1000) * 1000;

    let newOrder = {
      userId: objectId,
      stadiumId: getObjectId(stadiumId),
      ownerId: getObjectId(ownerId),
      field,
      time,
      deposit,
      status: "pending",
      date,
      created_at: new Date()
    };

    const dataOrder = await ordersCollection.insertOne(newOrder);

    newOrder = { ...newOrder, _id: dataOrder.insertedId };

    return NextResponse.json({ success: true, message: "Tạo sân bóng thành công", data: newOrder });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// API PUT - Cập nhật thông tin sân bóng
export async function PUT(req) {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const ordersCollection = db.collection(COLLECTION_NAME);

    const {
      id,
      status,
    } = await req.json();

    const ObjectId = getObjectId(id);
    await validateToken(req);

    const stadium = await ordersCollection.findOne({ _id: ObjectId });
    if (!stadium) {
      return NextResponse.json({ success: false, message: "Sân vận động không tồn tại" }, { status: 404 });
    }

    await ordersCollection.updateOne(
      { _id: ObjectId },
      {
        $set: {
          status,
          updated_at: new Date()
        }
      }
    );

    return NextResponse.json({ success: true, message: "Cập nhật sân bóng thành công" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}