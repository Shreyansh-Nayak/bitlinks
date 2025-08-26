"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async () => {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (data.success) {
        alert("✅ URL generated successfully!");
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);

        // ✅ clear inputs
        setUrl("");
        setShorturl("");
      } else {
        alert("❌ Failed: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Check console.");
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-200 my-16 p-8 rounded-lg flex flex-col">
      <h1 className="font-bold text-2xl mb-4">Generate your own URL</h1>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={url}
          className="px-4 py-2 bg-purple-50 focus:outline-purple-600"
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
        />

        <input
          type="text"
          value={shorturl}
          className="px-4 py-2 bg-purple-50 focus:outline-purple-600"
          placeholder="Preferred Short URL"
          onChange={(e) => setShorturl(e.target.value)}
        />

        <button
          onClick={generate}
          className="bg-purple-600 rounded-lg shadow-lg py-2 text-white hover:bg-purple-700"
        >
          Generate
        </button>
      </div>

      {generated && (
        <div className="mt-4">
          <span className="font-bold text-lg">Your Link: </span>
          <code className="bg-white px-2 py-1 rounded-md">
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        </div>
      )}
    </div>
  );
};

export default Shorten;
