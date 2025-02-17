import clientPromise from "@quanlysanbong/lib/mongodb";
import getObjectId from "@quanlysanbong/lib/getObjectId";
import { NextResponse } from "next/server";
import { validateToken } from "@quanlysanbong/lib/auth";

const DB_NAME = "stadiums";
const COLLECTION_NAME = "stadium";

// API GET - Lấy danh sách sân bóng
export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const stadiumsCollection = db.collection(COLLECTION_NAME);

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);

    const ownerId = searchParams.get("ownerId");

    const stadiums = await stadiumsCollection
      .find({
        ownerId: ownerId ? getObjectId(ownerId) : { $exists: true }
      })
      .sort({ created_at: -1 })
      .toArray();

    return NextResponse.json({ success: true, data: stadiums });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// API POST - Tạo một sân bóng mới
export async function POST(req) {
  try {
    const client = await clientPromise;

    const db = client.db(DB_NAME);
    const stadiumsCollection = db.collection(COLLECTION_NAME);

    const objectId = await validateToken(req);

    const { stadiumName, description, location, locationDetail, openingTime, closingTime, images, fields } =
      await req.json();

    const newStadium = {
      ownerId: objectId,
      stadiumName,
      description,
      location,
      locationDetail,
      openingTime,
      closingTime,
      images,
      fields,
      active: true,
      created_at: new Date(),
      updated_at: new Date()
    };

    await stadiumsCollection.insertOne(newStadium);

    return NextResponse.json({ success: true, message: "Tạo sân bóng thành công", data: newStadium });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// API PUT - Cập nhật thông tin sân bóng
export async function PUT(req) {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const stadiumsCollection = db.collection(COLLECTION_NAME);

    const {
      id,
      stadiumName,
      description,
      location,
      locationDetail,
      openingTime,
      closingTime,
      images,
      fields,
      active = true
    } = await req.json();

    const ObjectId = getObjectId(id);
    const userId = await validateToken(req);

    const stadium = await stadiumsCollection.findOne({ _id: ObjectId });
    if (!stadium) {
      return NextResponse.json({ success: false, message: "Sân vận động không tồn tại" }, { status: 404 });
    }

    await stadiumsCollection.updateOne(
      { _id: ObjectId },
      {
        $set: {
          stadiumName,
          description,
          location,
          locationDetail,
          openingTime,
          closingTime,
          images,
          fields,
          active,
          updated_at: new Date()
        }
      }
    );

    return NextResponse.json({ success: true, message: "Cập nhật sân bóng thành công" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// API DELETE - Xóa sân bóng
export async function DELETE(req) {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const stadiumsCollection = db.collection(COLLECTION_NAME);

    const { id } = await req.json();
    const ObjectId = getObjectId(id);

    const stadium = await stadiumsCollection.findOne({ _id: ObjectId });
    if (!stadium) {
      return NextResponse.json({ success: false, message: "Sân bóng ko tồn tại" }, { status: 404 });
    }

    await stadiumsCollection.deleteOne({ _id: ObjectId });

    return NextResponse.json({ success: true, message: "Xóa sân bóng thành công" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
