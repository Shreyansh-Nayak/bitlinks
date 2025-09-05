import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { url, shorturl } = await req.json();

    if (!url || !shorturl) {
      return NextResponse.json(
        { success: false, message: "URL and Short URL are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("urlshortener");
    const collection = db.collection("urls");

    // Check if shorturl already exists
    const existing = await collection.findOne({ shorturl });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "Short URL already taken" },
        { status: 409 }
      );
    }

    // Insert new URL
    const result = await collection.insertOne({
      url,
      shorturl,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "URL saved successfully!",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Server error" },
      { status: 500 }
    );
  }
}
