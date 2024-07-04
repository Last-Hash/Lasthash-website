import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'


const Home = () => {
    return (
        <>
            <Head>
                <title>Lasthash</title>
                <meta name="description" content="" />
            </Head>
            <Header />


            
            <Footer />
        </>
    )
}


export default Home