import React from "react";
import { Layout } from "../../components/Layout";

interface Search {}

export default function Search({}) {
  return (
    <Layout>
      <div className="flex h-screen w-full items-center justify-center">
        <input
          placeholder="Search..."
          className="mr-1 rounded-md border bg-gray-100 bg-opacity-50 outline-none backdrop-blur-md hover:bg-slate-200"
        ></input>
      </div>
    </Layout>
  );
}
