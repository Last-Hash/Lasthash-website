import { Html, Head, Main, NextScript } from 'next/document'
import $ from "jquery";
import Script from 'next/script'

export default function Document() {
    return (
        <Html className="no-js" lang="en">
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital@0;1&family=Rubik:wght@400;500;700;900&display=swap"
                    rel="stylesheet" />
            </Head>
            <body>
            <Main />
            <NextScript />
            <Script src="/js/vendor/jquery-3.4.1.min.js" strategy="beforeInteractive"  />
            </body>
        </Html>
    )
}