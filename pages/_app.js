import { ThemeProvider } from "next-themes";

import Head from "next/head";

import { useEffect } from "react";

import "public/css/normalize.css";
import "public/css/bootstrap.min.css";
import "public/css/fontawesome.css";
import "public/css/magnific-popup.css";
import "public/css/owl.carousel.min.css";
import "public/css/owl.theme.default.min.css";
import "public/css/main.css";
import "public/css/dark.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    $(document).ready(function () {
      console.log("jQuery loaded!");
    });
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta charSet="utf-8" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
