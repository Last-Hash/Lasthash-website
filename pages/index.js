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

            <section className="hero-banner background-contain min-vh-100 d-flex align-items-center justify-content-center w-100"
                data-background="/img/hero-shape-1.svg">
                <div className="hero-inner">
                    <div className="hero-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-lg-8 ml-auto mr-auto text-center">
                                    <span className="hero-welcome">Welcome</span>
                                    <h2 className="hero-title">Datasci is the best modern data analysis agency in Spain</h2>
                                    <a href="#" className="btn btn-bg btn-radius">Contact us <i className="fal fa-long-arrow-alt-right"></i></a>
                                    <div className="hero-illustration"><img src="/img/hero-illustration.svg" alt="hero-illustration"
                                        className="img-fluid" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}


export default Home