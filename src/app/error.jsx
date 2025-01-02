"use client"; // error.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Oops! Something Went Wrong.
        </h1>
        <p className="text-lg text-white mb-8">
          Don&apos;t worry, it&apos;s not your fault! We&apos;ll get this fixed right away.
        </p>

        <div className="mb-8">
          <Image
            src="/images/cute-panda.png" // Add a cute image of your choice in the public folder
            alt="Cute Panda"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>

        <Link href="/" passHref>
          <button className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition duration-200 ease-in-out">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
