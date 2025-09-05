import { redirect, notFound } from "next/navigation";
import clientPromise from "../../lib/mongodb";

// 🚀 Tell Next.js this page is fully dynamic
export const dynamic = "force-dynamic";

export default async function Page({ params }) {
  const shortUrl = params.shorturl.toLowerCase();

  const client = await clientPromise;
  const db = client.db("urlshortener");
  const collection = db.collection("urls");

  const doc = await collection.findOne({ shorturl: shortUrl });

  if (!doc) {
    return notFound();
  }

  return redirect(doc.url);
}

