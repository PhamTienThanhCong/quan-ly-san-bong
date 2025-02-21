import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import { Readable } from "stream";
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from "@quanlysanbong/constants/MainContent";

// Cấu hình Cloudinary
cloudinary.config({
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  cloud_name: CLOUDINARY_CLOUD_NAME,
});

// Hàm đọc file từ FormData
async function readFile(file) {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function GET() {
  return NextResponse.json({ message: "Success" });
}

export async function POST(req) { 
  try {
    console.log("Receiving upload request...");
    const formData = await req.formData();
    console.log("FormData received:", formData);
    
    const file = formData.get("file");
    if (!file) {
      console.error("No file provided!");
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    console.log("Processing file:", file);
    const buffer = await readFile(file);

    console.log("Uploading to Cloudinary...");
    const uploadPromise = new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "uploads" },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Upload Error:", error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      Readable.from(buffer).pipe(uploadStream);
    });

    const result = await uploadPromise;
    console.log("Upload successful:", result);

    return NextResponse.json({ url: result.secure_url }, { status: 200 });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ error: "Upload failed", details: error.message }, { status: 500 });
  }
}


export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
