import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Cover from "@/components/Cover";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mufaddal Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <Navbar />
          <Cover />
        </section>
        <section>
          <Timeline />
        </section>
        <section>
          <Gallery />
        </section>
      </main>
    </>
  );
}
