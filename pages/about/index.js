import Head from "next/head";

import Meta from "@components/Meta";
import Header from "@components/Header";
import Footer from "@components/Footer";

import React, { useRef, useState } from "react";

const Home = () => {

  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="header-absolute" />
      </Head>
      <Header HeaderType="" />

      <section className="page-hero" data-background="/img/about-header.jpg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="page-title">About Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="about-page-content ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-header text-left">
                <span className="section-heading">About us</span>
                <h2 className="section-title">
                  Since 1990 we are doing data analysis and security
                </h2>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
              <p>
                Using 'Content here, content here', making it look like readable
                English. Many desktop publishing
              </p>
              <a href="#" className="btn btn-bg">
                Contact Us
              </a>
            </div>
            <div className="col-md-6">
              <img src="/img/about-image.svg" alt="about" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="we-do-section ptb-100 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-header text-center">
                <span className="section-heading">What we do</span>
                <h2 className="section-title">
                  We have experienced teams whom do all works very caregully
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="we-do-block text-center">
                <div className="we-do-image">
                  <img
                    src="/img/data-science.svg"
                    alt="data-science"
                    className="img-fluid"
                  />
                </div>
                <div className="we-do-content">
                  <h3 className="we-do-title">Data Science</h3>
                  <div className="we-do-description">
                    <p>
                      like readable English. Many desktop publishing packages
                      and web page
                    </p>
                  </div>
                  <a href="#" className="read-more-we-do">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-xs-45">
              <div className="we-do-block text-center">
                <div className="we-do-image">
                  <img
                    src="/img/data-mining.svg"
                    alt="data-science"
                    className="img-fluid"
                  />
                </div>
                <div className="we-do-content">
                  <h3 className="we-do-title">Data Mining</h3>
                  <div className="we-do-description">
                    <p>
                      like readable English. Many desktop publishing packages
                      and web page
                    </p>
                  </div>
                  <a href="#" className="read-more-we-do">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-xs-45">
              <div className="we-do-block text-center">
                <div className="we-do-image">
                  <img
                    src="/img/deep-learning.svg"
                    alt="data-science"
                    className="img-fluid"
                  />
                </div>
                <div className="we-do-content">
                  <h3 className="we-do-title">Deep Learning</h3>
                  <div className="we-do-description">
                    <p>
                      like readable English. Many desktop publishing packages
                      and web page
                    </p>
                  </div>
                  <a href="#" className="read-more-we-do">
                    Read More
                  </a>
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
