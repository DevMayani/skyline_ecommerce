
import CategoryComp from "@/components/categoryComp";
import FlashSalesComp from "@/components/flashSalesComp";
import Hero from "@/components/hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Skyline_Tech</title>
        <meta name="description" content="An ecommerce Website" />
        <meta name="keywords" content="skyline, gadget store, ecommerce" />

        {/* OpenGraph */}
        <meta property="og:title" content="Home | Skyline_Tech" />
        <meta property="og:description" content="An ecommerce Website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Skyline_Tech" />
        <meta name="twitter:description" content="An ecommerce Website" />
        <meta name="twitter:image" content="/favicon.ico" />
      </Head>

      <main>
<Hero />
<FlashSalesComp />
<CategoryComp />
      </main>
    </>
  );
}
