import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
    return (
        <Html className="no-js" lang="en">
            <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital@0;1&family=Rubik:wght@400;500;700;900&display=swap"
    rel="stylesheet" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}