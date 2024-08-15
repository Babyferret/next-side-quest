import React from "react";

export default function footer() {
  return (
    <footer className="bg-gray-200 border-t border-gray-300">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tighter text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Hello World!
          </h3>
          <div className="flex flex-col lf:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              target="_blank"
              href="https://github.com/tanaphat-time/next-side-quest.git"
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
