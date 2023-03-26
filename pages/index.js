import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Carosal from "@/comp/Carosal";
import HomeContent from "@/comp/HomeContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* <!-- This site is optimized with the Yoast SEO plugin v19.7.1 - https://yoast.com/wordpress/plugins/seo/ --> */}
        <title>
          Parkermile Mobile Marine Plant - Marine Plant Experts in Ireland &amp;
          the UK
        </title>
        <meta
          name="description"
          content="O&#039;Malley Marine Plant provide specialised support for Aquaculture, Marine Civil Engineering, Windfarms and Dredging in Ireland and the UK."
        />
        <link rel="canonical" href="https://parkermile.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Parkermile Mobile - Marine Plant Experts in Ireland &amp; the UK"
        />
        <meta
          property="og:description"
          content="Parkermile Mobile provide specialised support for Aquaculture, Marine Civil Engineering, Windfarms and Dredging in Ireland and the UK."
        />
        <meta property="og:url" content="https://parkermile.com/" />
        <meta property="og:site_name" content="Parkermile Moblie" />
        <meta
          property="article:modified_time"
          content="2023-01-24T12:26:44+00:00"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <Carosal />
        <HomeContent />
      </main>
    </>
  );
}
