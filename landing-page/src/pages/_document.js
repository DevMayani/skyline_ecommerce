import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning={true}>
      <Head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Optional: preload fonts or other static metadata */}
      </Head>
      <body className="antialiased" suppressHydrationWarning={true}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
