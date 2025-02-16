import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import { Readable } from "stream";
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from "@quanlysanbong/constants/MainContent";

// Cấu hình Cloudinary
cloudinary.config({
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  cloud_name: CLOUDINARY_CLOUD_NAME
});

// Hàm đọc file từ FormData
async function readFile(file) {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// Xử lý API route
export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Chuyển file thành buffer
    const buffer = await readFile(file);

    // Tạo Promise để chờ Cloudinary upload hoàn tất
    // eslint-disable-next-line no-undef
    const uploadPromise = new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream({ folder: "uploads" }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      });

      Readable.from(buffer).pipe(uploadStream);
    });

    // Chờ upload hoàn thành
    const result = await uploadPromise;

    return NextResponse.json({ url: result.secure_url }, { status: 200 });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
