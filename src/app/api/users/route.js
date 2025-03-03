import { ROLE_MANAGER } from "@quanlysanbong/constants/System";
import getObjectId from "@quanlysanbong/lib/getObjectId";
import clientPromise from "@quanlysanbong/lib/mongodb";
import { encrypt } from "@quanlysanbong/utils/Security";
import { NextResponse } from "next/server";

// API GET để lấy danh sách users
export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db("accounts");
    const accountsCollection = db.collection("users");

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);

    const role = searchParams.get("role");

    const users = await accountsCollection
      .find({
        role: role ? role : { $exists: true }
      })
      .sort({ created_at: -1 })
      .toArray();

    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// API POST để tạo một user mới
export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("accounts"); // Tên database của bạn
    const accountsCollection = db.collection("users");

    const { email, password, address, name, role = ROLE_MANAGER.USER, phone = "" } = await req.json();

    // role phải thuộc ROLE_MANAGER
    if (!Object.values(ROLE_MANAGER).includes(role)) {
      return NextResponse.json({ success: false, message: "Invalid role" }, { status: 400 });
    }

    // Kiểm tra xem email đã tồn tại chưa
    const user = await accountsCollection.findOne({
      email
    });

    if (user) {
      return NextResponse.json({ success: false, message: "Email already exists" }, { status: 400 });
    }

    // Mã hóa mật khẩu trước khi lưu vào database
    const hashedPassword = await encrypt(password);

    const newUser = {
      email,
      password: hashedPassword,
      name,
      address,
      role,
      totalPrice: 0,
      withdrawn: 0,
      active: true,
      created_at: new Date()
    };

    // Chèn user mới vào collection
    await accountsCollection.insertOne(newUser);

    return NextResponse.json({ success: true, message: "Tạo tài khoản thành công", data: newUser });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// API PUT để cập nhật thông tin user
export async function PUT(req) {
  try {
    const client = await clientPromise;
    const db = client.db("accounts");
    const accountsCollection = db.collection("users");

    const {
      id,
      avatar,
      name,
      phone,
      address,
      bio,
      bank_info,
      bank_info_number,
      active = true,
      password = ""
    } = await req.json();

    // convert id to ObjectId
    const ObjectId = getObjectId(id);

    // Kiểm tra xem user có tồn tại không
    const user = await accountsCollection.findOne({
      _id: ObjectId
    });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    if (password) {
      // Mã hóa mật khẩu trước khi lưu vào database
      const hashedPassword = await encrypt(password);

      // Cập nhật mật khẩu
      await accountsCollection.updateOne(
        {
          _id: ObjectId
        },
        {
          $set: {
            password: hashedPassword,
            updated_at: new Date()
          }
        }
      );
      return NextResponse.json({
        success: true,
        message: "Cập nhật thông tin thành công",
        data: { message: "Password updated" }
      });
    }

    // Cập nhật thông tin user
    await accountsCollection.updateOne(
      {
        _id: ObjectId
      },
      {
        $set: {
          name,
          avatar,
          phone,
          address,
          bio,
          active,
          bank_info,
          bank_info_number,
          updated_at: new Date()
        }
      }
    );

    return NextResponse.json({
      success: true,
      message: "Cập nhật thông tin thành công",
      data: { id, name, phone, address, bio, active }
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
