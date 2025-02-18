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
    const dbStadium = client.db("stadiums");

    const feedbacksCollection = db.collection("feedbacks");
    const accountsCollection = db.collection("users");
    const ordersCollection = dbStadium.collection("orders");
    const stadiumsCollection = dbStadium.collection("stadium");

    const feedbacks = await feedbacksCollection.find({}).sort({ created_at: -1 }).toArray();

    const userIds = feedbacks.map((feedback) => feedback.userId);
    const orderIds = feedbacks.map((feedback) => feedback.orderId);
    const stadiumIds = feedbacks.map((feedback) => feedback.stadiumId);

    // { projection: { stadiumName: 1, location: 1, locationDetail: 1, openingTime: 1, closingTime: 1 } }

    const users = await accountsCollection.find({ _id: { $in: userIds } }).toArray();
    const orders = await ordersCollection.find({ _id: { $in: orderIds } }).toArray();
    const stadiums = await stadiumsCollection.find({ _id: { $in: stadiumIds } }).toArray();

    const newFeedbacks = feedbacks.map((feedback) => {
      const user = users.find((user) => user._id.toString() === feedback.userId.toString());
      const order = orders.find((order) => order._id.toString() === feedback.orderId.toString());
      const stadium = stadiums.find((stadium) => stadium._id.toString() === feedback.stadiumId.toString());

      return {
        ...feedback,
        user: user ? { name: user.name, email: user.email, phone: user.phone } : {},
        order: order
          ? {
              date: order.date,
              time: order.time,
              field: order.field,
              deposit: order.deposit,
              remaining: order.remaining,
              status: order.status
            }
          : {},
        stadium: stadium
          ? { stadiumName: stadium.stadiumName, location: stadium.location, locationDetail: stadium.locationDetail }
          : {}
      };
    });

    return NextResponse.json({
      success: true,
      data: newFeedbacks
    });
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

// API PUT để cập nhật thông tin của một user
export async function PUT(req) {
  try {
    const client = await clientPromise;
    const db = client.db("accounts");
    const accountsCollection = db.collection("feedbacks");

    const { id, checked } = await req.json();

    await accountsCollection.updateOne({ _id: getObjectId(id) }, { $set: { checked } });

    return NextResponse.json({ success: true, message: "Feedback updated", data: "ok" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
