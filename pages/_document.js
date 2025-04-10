import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Global structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lasthash",
              "url": "https://lasthash.com",
              "logo": "https://lasthash.com/logo.png",
              "sameAs": [
                "https://facebook.com/lasthash",
                "https://twitter.com/lasthash",
                "https://linkedin.com/company/lasthash",
                "https://instagram.com/lasthash"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+917982377273",
                "contactType": "customer service",
                "email": "contact@lasthash.com",
                "areaServed": "Worldwide"
              }
            })
          }}
        />
        
        {/* Theme color */}
        <meta name="theme-color" content="#00ADB5" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}