import clientPromise from "@quanlysanbong/lib/mongodb";
import getObjectId from "@quanlysanbong/lib/getObjectId";
import { NextResponse } from "next/server";
import { validateToken } from "@quanlysanbong/lib/auth";

const DB_NAME = "stadiums";
const STADIUM_COLLECTION_NAME = "stadium";
const COLLECTION_NAME = "orders";

// API GET - Lấy danh sách sân bóng
export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const ordersCollection = db.collection(COLLECTION_NAME);
    const stadiumCollection = db.collection(STADIUM_COLLECTION_NAME);

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);

    const userId = searchParams.get("userId");
    const stadiumId = searchParams.get("stadiumId");
    const ownerId = searchParams.get("ownerId");

    // Build the search query dynamically based on the provided parameters
    const searchQuery = {
      status: "confirmed"
    };
    if (userId) searchQuery.userId = getObjectId(userId);
    if (stadiumId) searchQuery.stadiumId = getObjectId(stadiumId);
    if (ownerId) searchQuery.ownerId = getObjectId(ownerId);

    // Fetch the orders based on the search query, if any filters were provided
    let orders = await ordersCollection
      .find(searchQuery)
      .sort({ created_at: -1 }) // Sort by created_at in ascending order
      .toArray();

    // get all stadiumId from orders
    const stadiumIds = orders.map((order) => order.stadiumId);

    // Fetch all the stadiums
    const stadiums = await stadiumCollection
      .find(
        { _id: { $in: stadiumIds } },
        { projection: { stadiumName: 1, location: 1, locationDetail: 1, openingTime: 1, closingTime: 1 } }
      )
      .toArray();

    // Map the orders to include the stadium details
    orders = orders.map((order) => {
      const stadium = stadiums.find((stadium) => stadium._id.equals(order.stadiumId));
      return { ...order, stadium };
    });

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

    const total = deposit;

    deposit = (deposit * 30) / 100;

    // làm tròn số tiền cọc
    deposit = Math.ceil(deposit / 1000) * 1000;

    let newOrder = {
      userId: objectId,
      stadiumId: getObjectId(stadiumId),
      ownerId: getObjectId(ownerId),
      field,
      time,
      deposit,
      remaining: total - deposit,
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

    const { id, status } = await req.json();

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
