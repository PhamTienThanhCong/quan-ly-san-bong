import { NextResponse } from "next/server";

// API GET để lấy danh sách users
export async function GET() {
  try {
    NextResponse.json({ message: "Hello, world!" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
