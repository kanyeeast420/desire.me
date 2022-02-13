import Head from "next/head";
import { Header } from "../components/Header";
import { Feed } from "../components/Feed";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white font-display text-xs text-black">
      <Head>
        <title>Desire.me</title>
      </Head>

      <Header />

      <Feed />
    </div>
  );
}
