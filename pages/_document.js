import { Html, Head, Main, NextScript } from "next/document";
import $ from "jquery";
import Script from "next/script";

export default function Document() {
  return (
    <Html className="no-js" lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital@0;1&family=Rubik:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="/js/vendor/jquery-3.4.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/js/vendor/modernizr-3.8.0.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/vendor/popper.min.js" strategy="beforeInteractive" />
        <Script
          src="/js/vendor/jquery.magnific-popup.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins.js" strategy="beforeInteractive" />
        <Script
          src="/js/vendor/jquery.tabslet.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/js/vendor/jquery.appear.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/vendor/count-to.js" strategy="beforeInteractive" />
        <Script
          src="/js/vendor/isotope.pkgd.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/js/vendor/owl.carousel.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/main.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
