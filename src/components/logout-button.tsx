"use client";
import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  return (
    <Button
      size={"default"}
      variant={"destructive"}
      onClick={() => signOut({ callbackUrl: "/login" })}
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      logout
    </Button>
  );
}
