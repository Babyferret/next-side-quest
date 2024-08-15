import Link from "next/link";
import React from "react";

export default function nav() {
  const style = {
    link_text: "text-lg font-bold text-black m-auto p-2 hover:text-gray-700",
  };
  return (
    <header className="bg-gray-200 drop-shadow-lg">
      <nav className="flex justify-between h-12">
        <h1 className="m-auto text-lg font-bold">Nextjs-Side-Quest</h1>
        <ul className="flex jextify-between mr-5">
          <li className={style["link_text"]}>
            <Link href={"/home"}>Home</Link>
          </li>
          <li className={style["link_text"]}>
            <Link href={"/about"}>About</Link>
          </li>
          <li className={style["link_text"]}>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li className="text-lg font-bold m-auto p-2 text-red-400 hover:text-red-300">
            <Link href={"/"}>Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
