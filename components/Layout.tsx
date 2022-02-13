import React from "react";
import Link from "next/link";
import { Header } from "./Header";

interface Layout {}

export const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div className="font-display min-h-screen w-full  bg-white text-xs text-black">
      <Header />
      {children}
    </div>
  );
};
