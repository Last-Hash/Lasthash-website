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

           
            
  <section class="page-hero" data-background="/img/about-header.jpg">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="page-title">Services</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Services</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <section class="we-do-section ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="section-header text-center">
            <span class="section-heading">Our Services</span>
            <h2 class="section-title">We have experienced teams whom do all works very caregully</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="we-do-block text-center">
            <div class="we-do-image">
              <img src="/img/data-science.svg" alt="data-science" class="img-fluid"/>
            </div>
            <div class="we-do-content">
              <h3 class="we-do-title">Data Science</h3>
              <div class="we-do-description">
                <p>like readable English. Many desktop publishing packages and web page</p>
              </div>
              <a href="#" class="read-more-we-do">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-xs-45">
          <div class="we-do-block text-center">
            <div class="we-do-image">
              <img src="/img/data-mining.svg" alt="data-science" class="img-fluid"/>
            </div>
            <div class="we-do-content">
              <h3 class="we-do-title">Data Mining</h3>
              <div class="we-do-description">
                <p>like readable English. Many desktop publishing packages and web page</p>
              </div>
              <a href="#" class="read-more-we-do">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-xs-45">
          <div class="we-do-block text-center">
            <div class="we-do-image">
              <img src="/img/deep-learning.svg" alt="data-science" class="img-fluid"/>
            </div>
            <div class="we-do-content">
              <h3 class="we-do-title">Deep Learning</h3>
              <div class="we-do-description">
                <p>like readable English. Many desktop publishing packages and web page</p>
              </div>
              <a href="#" class="read-more-we-do">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-4">
          <div class="we-do-block text-center">
            <div class="we-do-image">
              <img src="/img/data-science.svg" alt="data-science" class="img-fluid"/>
            </div>
            <div class="we-do-content">
              <h3 class="we-do-title">Data Cloud</h3>
              <div class="we-do-description">
                <p>like readable English. Many desktop publishing packages and web page</p>
              </div>
              <a href="#" class="read-more-we-do">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-xs-45">
          <div class="we-do-block text-center">
            <div class="we-do-image">
              <img src="/img/data-mining.svg" alt="data-science" class="img-fluid"/>
            </div>
            <div class="we-do-content">
              <h3 class="we-do-title">Cloud Computiting</h3>
              <div class="we-do-description">
                <p>like readable English. Many desktop publishing packages and web page</p>
              </div>
              <a href="#" class="read-more-we-do">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-xs-45">
          <div class="we-do-block text-center">
            <div class="we-do-image">
              <img src="/img/deep-learning.svg" alt="data-science" class="img-fluid"/>
            </div>
            <div class="we-do-content">
              <h3 class="we-do-title">Data management</h3>
              <div class="we-do-description">
                <p>like readable English. Many desktop publishing packages and web page</p>
              </div>
              <a href="#" class="read-more-we-do">Read More</a>
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