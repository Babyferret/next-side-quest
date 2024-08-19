import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Divider } from "antd";

export default function Home() {
  return (
    <>
      <div className="bg-gray-900 p-6 fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-white text-4xl font-semibold tracking-tight">
            Next-Side-Quest
          </h1>
          <div className="flex space-x-6">
            <Link href="/login" className="text-gray-400 hover:text-white">
              Login
            </Link>
            <Link href="/register" className="text-gray-400 hover:text-white">
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-semibold text-gray-800 mb-4">
            Next.js Demo with Pocketbase
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dolore est tempor ipsum minim sit ipsum et laboris elit non esse
            sit velit officia. Veniam irure ipsum sit nisi do duis. Dolore ea
            veniam et sit eu est ullamco consectetur. Pariatur sint sit cillum esse.
          </p>
        </div>
      </div>
      <footer className="bg-gray-900 w-full bottom-0 left-0 py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-gray-400 text-lg font-medium mb-4">
            Mollit veniam voluptate velit exercitation commodo pariatur nulla officia qui sint.
          </h1>
          <Divider
            orientation="center"
            style={{ borderColor: 'gray', opacity: '0.5' }}
          >
          </Divider>

          <div className="flex justify-center pt-1">
            <a
              href="https://github.com/tanaphat-time/next-side-quest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white flex items-center"
            >
              <FaGithub className="text-2xl" />
              <p className="ml-2 text-lg">GitHub</p>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
