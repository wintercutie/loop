"use client"; // not-found.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
      <div className="text-center text-gray-800 max-w-lg mx-auto">
        <h1 className="text-6xl font-serif font-semibold mb-6">404</h1>
        <h2 className="text-2xl font-medium mb-6">Sorry, this page isn’t available</h2>
        <p className="text-lg mb-8">
          The page you are looking for might have been moved or doesn’t exist anymore. 
          Let’s get you back to where you belong.
        </p>

        <div className="mb-8">
          <Image
            src="/homepage/moodeng pic.jfif" // Use a clean, elegant 404 illustration
            alt="Page Not Found"
            width={350}
            height={350}
            className="rounded-lg"
          />
        </div>

        <Link href="/" passHref>
          <button className="px-8 py-3 bg-gray-800 text-white text-xl font-medium rounded-lg hover:bg-gray-700 transition ease-in-out">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
