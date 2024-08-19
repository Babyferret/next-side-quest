"use client";
import React, { useEffect, useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function Page() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/user");
        const data = await response.json();
        setUsername(`${data.username}`);
      } catch (error) {
        console.log("Error fetching profile: ", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <Nav />
      <div className="flex justify-center my-80">
        <h1 className="text-3xl font-bold">
          Welcome back{" "}
          <span className={"text-4xl font-bold text-red-500"}>{username}</span>!
        </h1>
      </div>
      <Footer />
    </div>
  );
}
