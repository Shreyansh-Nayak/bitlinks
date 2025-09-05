import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local or Vercel Env");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In dev mode, reuse the client across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      serverApi: { version: "1", strict: true, deprecationErrors: true },
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production (Vercel), always create a new client
  client = new MongoClient(uri, {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
  });
  clientPromise = client.connect();
}

export default clientPromise;
