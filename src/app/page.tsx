"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

function Home() {
  const router = useRouter();
  return (
    <div className=" bg-black flex flex-row justify-center items-center min-h-screen ">
      <div className="flex gap-8">
        <Button
          size={"lg"}
          variant={"default"}
          className=" bg-white text-black "
          onClick={() => router.push("sign-up")}
        >
          Sign up
        </Button>

        <Button
          size={"lg"}
          variant={"default"}
          className=" bg-white text-black  "
          onClick={() => router.push("login")}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Home;
