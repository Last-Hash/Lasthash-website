import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'


const Home = () => {
    return (
        <>
            <Head>
                <title>gallery</title>
                <meta name="description" content="" />
            </Head>
            <Header HeaderType="" />

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

            <section className="we-do-section ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="section-header text-center">
                                <span className="section-heading">What we do</span>
                                <h2 className="section-title">We have experienced teams whom do all works very caregully</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="we-do-block text-center">
                                <div className="we-do-image">
                                    <img src="/img/data-science.svg" alt="data-science" className="img-fluid" />
                                </div>
                                <div className="we-do-content">
                                    <h3 className="we-do-title">Data Science</h3>
                                    <div className="we-do-description">
                                        <p>like readable English. Many desktop publishing packages and web page</p>
                                    </div>
                                    <a href="#" className="read-more-we-do">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-xs-45">
                            <div className="we-do-block text-center">
                                <div className="we-do-image">
                                    <img src="/img/data-mining.svg" alt="data-science" className="img-fluid" />
                                </div>
                                <div className="we-do-content">
                                    <h3 className="we-do-title">Data Mining</h3>
                                    <div className="we-do-description">
                                        <p>like readable English. Many desktop publishing packages and web page</p>
                                    </div>
                                    <a href="#" className="read-more-we-do">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-xs-45">
                            <div className="we-do-block text-center">
                                <div className="we-do-image">
                                    <img src="/img/deep-learning.svg" alt="data-science" className="img-fluid" />
                                </div>
                                <div className="we-do-content">
                                    <h3 className="we-do-title">Deep Learning</h3>
                                    <div className="we-do-description">
                                        <p>like readable English. Many desktop publishing packages and web page</p>
                                    </div>
                                    <a href="#" className="read-more-we-do">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/img/researchers-team-work.jpg" alt="researchers-team-work" className="img-fluid" />
                                <div className="about-img-overlay">
                                    <a href="https://vimeo.com/352483111" className="video-popup mfp-fade">
                                        <i className="fal fa-play"></i>
                                        Watch Promo
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-xs-45">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="section-header text-left">
                                        <span className="section-heading">About Us</span>
                                        <h2 className="section-title">Sophisticated big data agency in USA, India & Europe</h2>
                                    </div>
                                </div>
                            </div>
                            <p>Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled</p>
                            <div className="about-list d-flex align-items-center">
                                <div className="about-number">
                                    <span>01</span>
                                </div>
                                <div className="about-list-content">
                                    <h3>Big data mining</h3>
                                    <p>Packages and web page editors now use Lorem Ipsum as their default model</p>
                                </div>
                            </div>
                            <div className="about-list d-flex align-items-center grey-content">
                                <div className="about-number">
                                    <span>02</span>
                                </div>
                                <div className="about-list-content">
                                    <h3>Monitoring data system</h3>
                                    <p>Packages and web page editors now use Lorem Ipsum as their default model</p>
                                </div>
                            </div>
                            <div className="about-list d-flex align-items-center">
                                <div className="about-number">
                                    <span>03</span>
                                </div>
                                <div className="about-list-content">
                                    <h3>Report analysis</h3>
                                    <p>Packages and web page editors now use Lorem Ipsum as their default model</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-process ptb-100 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="section-header text-center">
                                <span className="section-heading">Our Process</span>
                                <h2 className="section-title">We process every single data very carefully. All our staffs are skilled</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="content-animation d-none d-md-block">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img src="/img/data-collection.svg" alt="data" className="img-fluid" />
                                        </div>
                                        <div className="process-content">
                                            <h3 className="process-title">Data Collection</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typese</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-xs-45">
                                    <div className="process-illustration d-none d-md-block">
                                        <img src="/img/process-illustration.svg" alt="process-illustration" className="img-fluid" />
                                    </div>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img src="/img/data-analysis.svg" alt="collection" className="img-fluid" />
                                        </div>
                                        <div className="process-content">
                                            <h3 className="process-title">Data Analysis</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typese</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-xs-45">
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img src="/img/statistics.svg" alt="collection" className="img-fluid" />
                                        </div>
                                        <div className="process-content">
                                            <h3 className="process-title">Report Publish</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typese</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-services ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="section-header text-center">
                                <span className="section-heading">Our Services</span>
                                <h2 className="section-title">We do all types of data & science related work efficiently</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="tabs-block">
                                <ul className="tabs-list nav justify-content-center">
                                    <li className="active"><a href="#tab-1">Design & Strategy</a></li>
                                    <li className=""><a href="#tab-2">AI Development</a></li>
                                    <li className=""><a href="#tab-3">Cloud development</a></li>
                                    <li className=""><a href="#tab-4">Security Ensure</a></li>
                                </ul>
                                <div id="tab-1" className="tab-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src="/img/ai-dev.svg" alt="ai-dev" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6">
                                            <h4>Design & Strategy</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                industry's standard dummy text ever since</p>
                                            <ul className="list-style-one">
                                                <li>Safe and Trusty</li>
                                                <li>Innovative ideas</li>
                                                <li>Research and data store</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-2" className="tab-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src="/img/ai-dev.svg" alt="ai-dev" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6">
                                            <h4>AI & Data Platform Solutions</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                industry's standard dummy text ever since</p>
                                            <ul className="list-style-one">
                                                <li>Safe and Trusty</li>
                                                <li>Innovative ideas</li>
                                                <li>Research and data store</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-3" className="tab-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src="/img/cloud-dev.svg" alt="ai-dev" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6">
                                            <h4>Cloud and internet solutions</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                industry's standard dummy text ever since</p>
                                            <ul className="list-style-one">
                                                <li>Safe and Trusty</li>
                                                <li>Innovative ideas</li>
                                                <li>Research and data store</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-4" className="tab-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src="/img/security-img.svg" alt="ai-dev" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6">
                                            <h4>Security Solutions</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                industry's standard dummy text ever since</p>
                                            <ul className="list-style-one">
                                                <li>Safe and Trusty</li>
                                                <li>Innovative ideas</li>
                                                <li>Research and data store</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="counter-section" data-background="/img/counter-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="counter-block">
                                <span className="count-number">1200</span>
                                <span className="count-title">Satisfied Clients</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter-block">
                                <span className="count-number">950</span>
                                <span className="count-title">Cup of Coffee</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter-block">
                                <span className="count-number">42</span>
                                <span className="count-title">Award Won</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter-block">
                                <span className="count-number">60</span>
                                <span className="count-title">Team members</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-studies ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-header text-left">
                                <span className="section-heading">Case Studies</span>
                                <h2 className="section-title">Our Dedicated team members do every single case professionally</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div id="filters" className="button-group">
                                <button className="button is-checked" data-filter="*">show all</button>
                                <button className="button" data-filter=".data">Data</button>
                                <button className="button" data-filter=".cloud">cloud</button>
                                <button className="button" data-filter=".startup">startup</button>
                                <button className="button" data-filter=".big">Big data</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-xs-45">
                        <div className="col-sm-12">
                            <div className="row grid">
                                <div className="col-md-4 element-item transition data" data-category="transition">
                                    <div className="case-block">
                                        <div className="case-image">
                                            <div className="case-category">
                                                <a href="#">Development</a>
                                            </div>
                                            <img src="/img/case-data-analysis.svg" alt="data" className="img-fluid" />
                                        </div>
                                        <div className="case-content">
                                            <h4 className="case-block-title"><a href="#">AI Development</a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 element-item transition cloud" data-category="transition">
                                    <div className="case-block">
                                        <div className="case-image">
                                            <div className="case-category">
                                                <a href="#">Modeling</a>
                                            </div>
                                            <img src="/img/case-data-modeling.svg" alt="data" className="img-fluid" />
                                        </div>
                                        <div className="case-content">
                                            <h4 className="case-block-title"><a href="#">Data Modeling</a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 element-item transition startup" data-category="transition">
                                    <div className="case-block">
                                        <div className="case-image">
                                            <div className="case-category">
                                                <a href="#">Development</a>
                                            </div>
                                            <img src="/img/case-data-analysis.svg" alt="data" className="img-fluid" />
                                        </div>
                                        <div className="case-content">
                                            <h4 className="case-block-title"><a href="#">AI Development</a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 element-item transition mining" data-category="transition">
                                    <div className="case-block">
                                        <div className="case-image">
                                            <div className="case-category">
                                                <a href="#">Mining</a>
                                            </div>
                                            <img src="/img/case-data-minig.svg" alt="data" className="img-fluid" />
                                        </div>
                                        <div className="case-content">
                                            <h4 className="case-block-title"><a href="#">Data Mining</a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 element-item transition mining" data-category="transition">
                                    <div className="case-block">
                                        <div className="case-image">
                                            <div className="case-category">
                                                <a href="#">Mining</a>
                                            </div>
                                            <img src="/img/case-mining-2.svg" alt="data" className="img-fluid" />
                                        </div>
                                        <div className="case-content">
                                            <h4 className="case-block-title"><a href="#">Data Mining</a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 element-item transition big" data-category="transition">
                                    <div className="case-block">
                                        <div className="case-image">
                                            <div className="case-category">
                                                <a href="#">Data</a>
                                            </div>
                                            <img src="/img/case-big-data.svg" alt="data" className="img-fluid" />
                                        </div>
                                        <div className="case-content">
                                            <h4 className="case-block-title"><a href="#">Big Data</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonials-section ptb-100" data-background="/img/testimonial-bg.png">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-header text-left">
                                <span className="section-heading color-white">Testimonials</span>
                                <h2 className="section-title color-white">Our clients are very satisfied and pleasure for our provided services
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonials-block">
                                <div className="testimonial-content">
                                    <div className="testimonial-slider owl-carousel owl-theme">
                                        <div className="testimonial-inner-content">
                                            <p>One of the cloud computing service I have ever used. Always I assigned my stuffs to them. They are
                                                very innovative and accurate. Thanks all. Highly recommended</p>
                                            <div className="reviewer-meta d-flex align-items-center">
                                                <div className="reviewer-img">
                                                    <img src="/img/reviewer-1.png" alt="" className="img-fluid img-rounded" />
                                                </div>
                                                <div className="reviewer-details">
                                                    <span className="reviewer-name">Robert Cooper</span>
                                                    <span className="reviewer-address">Customer, Los angles, USA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial-inner-content">
                                            <p>One of the cloud computing service I have ever used. They are very innovative and accurate. Thanks
                                                all. Highly recommended</p>
                                            <div className="reviewer-meta d-flex align-items-center">
                                                <div className="reviewer-img">
                                                    <img src="/img/reviewer-1.png" alt="" className="img-fluid img-rounded" />
                                                </div>
                                                <div className="reviewer-details">
                                                    <span className="reviewer-name">Pual Kim</span>
                                                    <span className="reviewer-address">Customer, California, USA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial-inner-content">
                                            <p>One of the cloud computing service I have ever used. They are very innovative and accurate. Thanks
                                                all. Highly recommended</p>
                                            <div className="reviewer-meta d-flex align-items-center">
                                                <div className="reviewer-img">
                                                    <img src="/img/reviewer-1.png" alt="" className="img-fluid img-rounded" />
                                                </div>
                                                <div className="reviewer-details">
                                                    <span className="reviewer-name">Nixon Madrid</span>
                                                    <span className="reviewer-address">Customer, Lesbon, Portugal</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonials_slider_nav d-flex justify-content-between">
                                        <div className="testimonials-nav testimonials_slide-prev"></div>
                                        <div className="testimonials-nav testimonials_slide-next"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-section ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-header text-center">
            <span className="section-heading">Latest News</span>
            <h2 className="section-title">World renowned and authentic data and cloud analysis</h2>
          </div>
        </div>
      </div>
      <div className="blog-block">
        <div className="row">
          <div className="col-sm-12">
            <div className="post-carousel owl-carousel owl-theme">
              <div className="post-block-item">
                <div className="post-thumbnail">
                  <img src="/img/post-1.jpg" alt="" className="img-fluid"/>
                  <div className="post-block-category">
                    <a href="#">Technology</a>
                  </div>
                </div>
                <div className="post-content">
                  <h2 className="post-block-title"><a href="single.html">Circuit board connected with direct AI &
                      internet</a></h2>
                </div>
                <div className="post-block-footer d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="post-block-author-photo">
                      <img src="/img/post-author.png" alt="author" className="img-fluid"/>
                    </div>
                    <span className="post-block-author-name">Nicky Masou</span>
                  </div>
                  <div className="post-block-comment">
                    <i className="fal fa-comment-alt-dots"></i> 7
                  </div>
                </div>
              </div> 
              <div className="post-block-item">
                <div className="post-thumbnail">
                  <img src="/img/post-2.jpg" alt="" className="img-fluid"/>
                  <div className="post-block-category">
                    <a href="#">Science</a>
                  </div>
                </div>
                <div className="post-content">
                  <h2 className="post-block-title"><a href="single.html">Mecal science is developing human gens</a></h2>
                </div>
                <div className="post-block-footer d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="post-block-author-photo">
                      <img src="/img/post-author.png" alt="author" className="img-fluid"/>
                    </div>
                    <span className="post-block-author-name">Nicky Masou</span>
                  </div>
                  <div className="post-block-comment">
                    <i className="fal fa-comment-alt-dots"></i> 2
                  </div>
                </div>
              </div>
              <div className="post-block-item">
                <div className="post-thumbnail">
                  <img src="/img/post-3.jpg" alt="" className="img-fluid"/>
                  <div className="post-block-category">
                    <a href="#">Life</a>
                  </div>
                </div>
                <div className="post-content">
                  <h2 className="post-block-title"><a href="single.html">Discussiong with colleagues might change life</a>
                  </h2>
                </div>
                <div className="post-block-footer d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="post-block-author-photo">
                      <img src="/img/post-author.png" alt="author" className="img-fluid"/>
                    </div>
                    <span className="post-block-author-name">Nicky Masou</span>
                  </div>
                  <div className="post-block-comment">
                    <i className="fal fa-comment-alt-dots"></i> 7
                  </div>
                </div>
              </div> 
              <div className="post-block-item">
                <div className="post-thumbnail">
                  <img src="/img/post-2.jpg" alt="" className="img-fluid"/>
                  <div className="post-block-category">
                    <a href="#">Technology</a>
                  </div>
                </div>
                <div className="post-content">
                  <h2 className="post-block-title"><a href="single.html">Circuit board connected with direct AI &
                      internet</a></h2>
                </div>
                <div className="post-block-footer d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="post-block-author-photo">
                      <img src="/img/post-author.png" alt="author" className="img-fluid"/>
                    </div>
                    <span className="post-block-author-name">Nicky Masou</span>
                  </div>
                  <div className="post-block-comment">
                    <i className="fal fa-comment-alt-dots"></i> 7
                  </div>
                </div>
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