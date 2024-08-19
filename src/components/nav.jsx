import Link from "next/link";
import React from "react";

export default function Nav() {
  const style = {
    link_text:
      "text-lg font-semibold text-black px-4 py-2 hover:text-gray-800 transition-colors duration-300",
    shine_effect: `
      relative before:content-[''] before:absolute before:bottom-0 before:left-0 
      before:w-0 before:h-[3px] before:bg-gray-800 before:transition-all before:duration-300 
      before:ease-in-out hover:before:w-full hover:before:translate-x-0 hover:before:origin-left
    `,
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/pages/home" className="text-2xl font-bold text-gray-800">
          Next.js Side Quest
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/pages/home"
              className={`${style.link_text} ${style.shine_effect}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/pages/about"
              className={`${style.link_text} ${style.shine_effect}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/pages/contact"
              className={`${style.link_text} ${style.shine_effect}`}
            >
              Contact
            </Link>
          </li>
          <li className="text-lg font-semibold text-red-500 hover:text-red-400 transition-colors duration-300">
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
