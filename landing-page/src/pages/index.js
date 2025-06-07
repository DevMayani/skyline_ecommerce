import '@fontsource/inter'; // Defaults to weight 400
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import CategoryComp from "@/components/categoryComp";
import FlashSalesComp from "@/components/flashSalesComp";
import Hero from "@/components/hero";
import Head from "next/head";
import BestSellerComp from '@/components/bestSellerComp';
import ExploreProductsComp from '@/components/exploreProductComp';
import DeliveryComp from '@/components/deliveryComp';
import ExperienceCat from '@/components/experienceCat';
import NewArrivalComp from '@/components/newArrivalComp';

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
<BestSellerComp />
<ExperienceCat />
<ExploreProductsComp />
<NewArrivalComp />
<DeliveryComp />
      </main>
    </>
  );
}
