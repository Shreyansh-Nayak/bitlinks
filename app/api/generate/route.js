import { MongoClient } from "mongodb";

let client;
let clientPromise;

// Reuse MongoDB connection across hot reloads in dev
if (!global._mongoClientPromise) {
  client = new MongoClient(process.env.MONGODB_URI);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export async function POST(req) {
  try {
    const { url, shorturl } = await req.json();

    if (!url || !shorturl) {
      return Response.json(
        { success: false, message: "URL and Short URL are required" },
        { status: 400 }
      );
    }

    // Connect to DB
    const client = await clientPromise;
    const db = client.db("urlshortener");
    const collection = db.collection("urls");

    // Check if shorturl already exists
    const existing = await collection.findOne({ shorturl });
    if (existing) {
      return Response.json(
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

    return Response.json({
      success: true,
      message: "URL saved successfully!",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
