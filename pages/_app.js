import 'public/css/normalize.css'
import 'public/css/bootstrap.min.css'
import 'public/css/fontawesome.css'
import 'public/css/magnific-popup.css'
import 'public/css/owl.carousel.min.css'
import 'public/css/owl.theme.default.min.css'
import 'public/css/main.css'


import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="viewport-fit=cover" />
                <meta charSet="utf-8" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital@0;1&family=Rubik:wght@400;500;700;900&display=swap"
                    rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp