import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'


const Home = () => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="" />
            </Head>
            <Header />

            <section class="page-hero" data-background="/img/about-header.jpg">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="page-title">Portfolio</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Portfolio</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <section class="case-studies ptb-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="section-header text-left">
            <span class="section-heading">Case Studies</span>
            <h2 class="section-title">Our Dedicated team members do every single case professionally</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div id="filters" class="button-group">
            <button class="button is-checked" data-filter="*">show all</button>
            <button class="button" data-filter=".data">Data</button>
            <button class="button" data-filter=".cloud">cloud</button>
            <button class="button" data-filter=".startup">startup</button>
            <button class="button" data-filter=".big">Big data</button>
          </div>
        </div>
      </div>
      <div class="row mt-xs-45">
        <div class="col-sm-12">
          <div class="row grid">
            <div class="col-md-4 element-item transition data" data-category="transition">
              <div class="case-block">
                <div class="case-image">
                  <div class="case-category">
                    <a href="#">Development</a>
                  </div>
                  <img src="/img/case-data-analysis.svg" alt="data" class="img-fluid"/>
                </div>
                <div class="case-content">
                  <h4 class="case-block-title"><a href="#">AI Development</a></h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 element-item transition cloud" data-category="transition">
              <div class="case-block">
                <div class="case-image">
                  <div class="case-category">
                    <a href="#">Modeling</a>
                  </div>
                  <img src="/img/case-data-modeling.svg" alt="data" class="img-fluid"/>
                </div>
                <div class="case-content">
                  <h4 class="case-block-title"><a href="#">Data Modeling</a></h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 element-item transition startup" data-category="transition">
              <div class="case-block">
                <div class="case-image">
                  <div class="case-category">
                    <a href="#">Development</a>
                  </div>
                  <img src="/img/case-data-analysis.svg" alt="data" class="img-fluid"/>
                </div>
                <div class="case-content">
                  <h4 class="case-block-title"><a href="#">AI Development</a></h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 element-item transition mining" data-category="transition">
              <div class="case-block">
                <div class="case-image">
                  <div class="case-category">
                    <a href="#">Mining</a>
                  </div>
                  <img src="/img/case-data-minig.svg" alt="data" class="img-fluid"/>
                </div>
                <div class="case-content">
                  <h4 class="case-block-title"><a href="#">Data Mining</a></h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 element-item transition mining" data-category="transition">
              <div class="case-block">
                <div class="case-image">
                  <div class="case-category">
                    <a href="#">Mining</a>
                  </div>
                  <img src="/img/case-mining-2.svg" alt="data" class="img-fluid"/>
                </div>
                <div class="case-content">
                  <h4 class="case-block-title"><a href="#">Data Mining</a></h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 element-item transition big" data-category="transition">
              <div class="case-block">
                <div class="case-image">
                  <div class="case-category">
                    <a href="#">Data</a>
                  </div>
                  <img src="/img/case-big-data.svg" alt="data" class="img-fluid"/>
                </div>
                <div class="case-content">
                  <h4 class="case-block-title"><a href="#">Big Data</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="testimonials-section ptb-100" data-background="/img/testimonial-bg.png">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-header text-left">
            <span class="section-heading color-white">Testimonials</span>
            <h2 class="section-title color-white">Our clients are very satisfied and pleasure for our provided services
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="testimonials-block">
            <div class="testimonial-content">
              <div class="testimonial-slider owl-carousel owl-theme">
                <div class="testimonial-inner-content">
                  <p>One of the cloud computing service I have ever used. Always I assigned my stuffs to them. They are
                    very innovative and accurate. Thanks all. Highly recommended</p>
                  <div class="reviewer-meta d-flex align-items-center">
                    <div class="reviewer-img">
                      <img src="/img/reviewer-1.png" alt="" class="img-fluid img-rounded"/>
                    </div>
                    <div class="reviewer-details">
                      <span class="reviewer-name">Robert Cooper</span>
                      <span class="reviewer-address">Customer, Los angles, USA</span>
                    </div>
                  </div>
                </div>
                <div class="testimonial-inner-content">
                  <p>One of the cloud computing service I have ever used. They are very innovative and accurate. Thanks
                    all. Highly recommended</p>
                  <div class="reviewer-meta d-flex align-items-center">
                    <div class="reviewer-img">
                      <img src="/img/reviewer-1.png" alt="" class="img-fluid img-rounded"/>
                    </div>
                    <div class="reviewer-details">
                      <span class="reviewer-name">Pual Kim</span>
                      <span class="reviewer-address">Customer, California, USA</span>
                    </div>
                  </div>
                </div>
                <div class="testimonial-inner-content">
                  <p>One of the cloud computing service I have ever used. They are very innovative and accurate. Thanks
                    all. Highly recommended</p>
                  <div class="reviewer-meta d-flex align-items-center">
                    <div class="reviewer-img">
                      <img src="/img/reviewer-1.png" alt="" class="img-fluid img-rounded"/>
                    </div>
                    <div class="reviewer-details">
                      <span class="reviewer-name">Nixon Madrid</span>
                      <span class="reviewer-address">Customer, Lesbon, Portugal</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonials_slider_nav d-flex justify-content-between">
                <div class="testimonials-nav testimonials_slide-prev"></div>
                <div class="testimonials-nav testimonials_slide-next"></div>
              </div>
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