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
          <h1 class="page-title">Blog</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Blog</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <section class="blog-section ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-header text-center">
            <span class="section-heading">Latest News</span>
            <h2 class="section-title">World renowned and authentic data and cloud analysis</h2>
          </div>
        </div>
      </div>
      <div class="blog-block blog-post-page">
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="post-block-item">
              <div class="post-thumbnail">
                <img src="/img/post-1.jpg" alt="" class="img-fluid"/>
                <div class="post-block-category">
                  <a href="#">Technology</a>
                </div>
              </div>
              <div class="post-content">
                <h2 class="post-block-title"><a href="single.html">Circuit board connected with direct AI &
                    internet</a></h2>
              </div>
              <div class="post-block-footer d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <div class="post-block-author-photo">
                    <img src="/img/post-author.png" alt="author" class="img-fluid"/>
                  </div>
                  <span class="post-block-author-name">Nicky Masou</span>
                </div>
                <div class="post-block-comment">
                  <i class="fal fa-comment-alt-dots"></i> 7
                </div>
              </div>
            </div> 
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="post-block-item">
              <div class="post-thumbnail">
                <img src="/img/post-2.jpg" alt="" class="img-fluid"/>
                <div class="post-block-category">
                  <a href="#">Science</a>
                </div>
              </div>
              <div class="post-content">
                <h2 class="post-block-title"><a href="single.html">Mecal science is developing human gens</a></h2>
              </div>
              <div class="post-block-footer d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <div class="post-block-author-photo">
                    <img src="/img/post-author.png" alt="author" class="img-fluid"/>
                  </div>
                  <span class="post-block-author-name">Nicky Masou</span>
                </div>
                <div class="post-block-comment">
                  <i class="fal fa-comment-alt-dots"></i> 2
                </div>
              </div>
            </div> 
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="post-block-item">
              <div class="post-thumbnail">
                <img src="/img/post-3.jpg" alt="" class="img-fluid"/>
                <div class="post-block-category">
                  <a href="#">Life</a>
                </div>
              </div>
              <div class="post-content">
                <h2 class="post-block-title"><a href="single.html">Discussiong with colleagues might change life</a>
                </h2>
              </div>
              <div class="post-block-footer d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <div class="post-block-author-photo">
                    <img src="/img/post-author.png" alt="author" class="img-fluid"/>
                  </div>
                  <span class="post-block-author-name">Nicky Masou</span>
                </div>
                <div class="post-block-comment">
                  <i class="fal fa-comment-alt-dots"></i> 7
                </div>
              </div>
            </div> 
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="post-block-item">
              <div class="post-thumbnail">
                <img src="/img/post-4.jpg" alt="" class="img-fluid"/>
                <div class="post-block-category">
                  <a href="#">Technology</a>
                </div>
              </div>
              <div class="post-content">
                <h2 class="post-block-title"><a href="single.html">Big data storage can be the biggest business</a></h2>
              </div>
              <div class="post-block-footer d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <div class="post-block-author-photo">
                    <img src="/img/post-author.png" alt="author" class="img-fluid"/>
                  </div>
                  <span class="post-block-author-name">Nicky Masou</span>
                </div>
                <div class="post-block-comment">
                  <i class="fal fa-comment-alt-dots"></i> 7
                </div>
              </div>
            </div> 
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="post-block-item">
              <div class="post-thumbnail">
                <img src="/img/post-5.jpg" alt="" class="img-fluid"/>
                <div class="post-block-category">
                  <a href="#">Computer</a>
                </div>
              </div>
              <div class="post-content">
                <h2 class="post-block-title"><a href="single.html">Laptop is the mobility device in this century</a>
                </h2>
              </div>
              <div class="post-block-footer d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <div class="post-block-author-photo">
                    <img src="/img/post-author.png" alt="author" class="img-fluid"/>
                  </div>
                  <span class="post-block-author-name">Nicky Masou</span>
                </div>
                <div class="post-block-comment">
                  <i class="fal fa-comment-alt-dots"></i> 7
                </div>
              </div>
            </div> 
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="post-block-item">
              <div class="post-thumbnail">
                <img src="/img/post-6.jpg" alt="" class="img-fluid"/>
                <div class="post-block-category">
                  <a href="#">Meeting</a>
                </div>
              </div>
              <div class="post-content">
                <h2 class="post-block-title"><a href="single.html">How meeting can introduce new words and ideas</a>
                </h2>
              </div>
              <div class="post-block-footer d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <div class="post-block-author-photo">
                    <img src="/img/post-author.png" alt="author" class="img-fluid"/>
                  </div>
                  <span class="post-block-author-name">Nicky Masou</span>
                </div>
                <div class="post-block-comment">
                  <i class="fal fa-comment-alt-dots"></i> 7
                </div>
              </div>
            </div> 
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-sm-12">
            <nav aria-label="...">
              <ul class="pagination pagination-lg justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
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