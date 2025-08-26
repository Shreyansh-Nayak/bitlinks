// app/about/page.js
"use client"

import React from "react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 text-center">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About BitLinks</h1>
        <p className="text-gray-600 mb-6">
          BitLinks is a simple and powerful <span className="font-semibold">URL shortener</span> 
          that converts your long, messy links into short and clean ones.  
          It’s perfect for sharing on social media, emails, or anywhere else.
        </p>

        <div className="text-left space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">🚀 How It Works</h2>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Paste your long URL into the input box.</li>
              <li>Generate a unique short link instantly.</li>
              <li>Share the short link anywhere — it redirects to the original site.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700">🔒 Why BitLinks?</h2>
            <p className="text-gray-600 mt-2">
              Built with <span className="font-semibold">Next.js</span> and 
              <span className="font-semibold"> MongoDB</span>, BitLinks ensures 
              <span className="font-semibold"> speed, security, and reliability</span>.  
              Every link is stored safely in our database and always available.
            </p>
          </div>
        </div>

        <p className="text-gray-600 mt-6 italic">
          ✨ Fast, secure, and free — shorten your links with BitLinks today!
        </p>
      </div>
    </div>
  )
}
