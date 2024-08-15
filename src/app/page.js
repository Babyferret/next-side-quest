import React from "react";
import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-3xl font-bold">Next-Side-Quest</h1>
        <div className="flex space-x-4">
          <Link href="/home" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Link href="" className="text-gray-300 hover:text-white">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
