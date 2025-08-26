import { redirect, notFound } from "next/navigation"
import clientPromise from "../../lib/mongodb"

export default async function Page({ params }) {
  const resolvedParams = await params
  const shortUrl = resolvedParams.shorturl   // keep lowercase

  const client = await clientPromise
  const db = client.db("urlshortener")       // ✅ correct database
  const collection = db.collection("urls")   // ✅ correct collection

  const doc = await collection.findOne({ shorturl: shortUrl })  // ✅ correct field

  if (!doc) {
    return notFound()
  }

  return redirect(doc.url)
}
