import Head from "next/head";

import Meta from "@components/Meta";
import Header from "@components/Header";
import Footer from "@components/Footer";

import React from "react";

const Home = () => {
  const HeaderType = "header-absolute";
  return (
    <>
      <Head>
        <title>Data & AI</title>
        <meta name="description" content="" />
      </Head>
      <Header HeaderType={HeaderType} />

      <section class="page-hero" data-background="/img/about-header.jpg">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="page-title">Data & AI</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Data & AI</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <section class="about-page-content ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="section-header text-left">
            <span class="section-heading">About us</span>
            <h2 class="section-title">Since 1990 we are doing data analysis and security</h2>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
          <p>Using 'Content here, content here', making it look like readable English. Many desktop publishing</p>
          <a href="#" class="btn btn-bg">Contact Us</a>
        </div>
        <div class="col-md-6">
          <img src="/img/about-image.svg" alt="about" class="img-fluid"/>
        </div>
      </div>
    </div>
  </section>
  <section class="we-do-section ptb-100 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="section-header text-center">
            <span class="section-heading">What we do</span>
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
    </div>
  </section>

      <Footer />
    </>
  );
};

export default Home;
