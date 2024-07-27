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

           
  <section class="page-hero" data-background="assets/img/about-header.jpg">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="page-title">Contact</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <section class="contact-section-header ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="contact-block">
            <div class="contact-icon">
              <i class="fal fa-phone-volume"></i>
            </div>
            <div class="contact-details">
              <h5 class="contact-title">Call Now</h5>
              <a href="tel:+123456789" class="contact-link">+1 234 56789</a>
              <a href="tel:+123456789" class="contact-link">+1 987 12345</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="contact-block">
            <div class="contact-icon">
              <i class="fal fa-envelope-open-text"></i>
            </div>
            <div class="contact-details">
              <h5 class="contact-title">Send Email</h5>
              <a href="mailto:contact@domain.com" class="contact-link">contact@domain.com</a>
              <a href="mailto:contact@domain.com" class="contact-link">contact@example.com</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="contact-block">
            <div class="contact-icon">
              <i class="fal fa-map-marked"></i>
            </div>
            <div class="contact-details">
              <h5 class="contact-title">Our Address</h5>
              <span class="contact-link">Bellavista 81, Fuentelapeña, Zamora, Spain </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="contact-form-section ptb-100 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-header text-center">
            <span class="section-heading">Get in touch</span>
            <h2 class="section-title">We are 24/7 available for your support</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-lg-8">
          <form method="post" action="contact.php" name="contactform" id="contactform">
            <div class="row">
              <div class="col-sm-6">
                <input name="name" type="text" id="name" size="30" value="" placeholder="Full Name" />
              </div>
              <div class="col-sm-6">
                <input name="email" type="text" id="email" size="30" value="" placeholder="Email" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <input name="phone" type="text" id="phone" size="30" value="" placeholder="Phone" />
              </div>
              <div class="col-sm-6">
                <select name="subject" id="subject">
                  <option value="Support">Support</option>
                  <option value="a Sale">Sales</option>
                  <option value="a Bug fix">Report a bug</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <textarea name="comments" cols="40" rows="5" id="comments" placeholder="Message"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <input name="verify" type="text" id="verify" size="4" value="" placeholder="Total of 3+1 = ?" />
              </div>
              <div class="col-sm-6">
                <input type="submit" class="submit form-submit" id="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-4">
          <h3>Open Hours</h3>
          <div class="d-flex opening-hours-line justify-content-between">
            <div class="schedule-day">
              Monday – Saturday
            </div>
            <div class="schedule-tile">
              9am - 5pm
            </div>
          </div>
          <div class="d-flex opening-hours-line justify-content-between mb-3">
            <div class="schedule-day">
              Sunday
            </div>
            <div class="schedule-tile">
              Closed
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.217301127818!2d2.170956124944866!3d41.41280135400235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f747c95a4f%3A0x3f741ce26f6ec7e8!2sFundaci%C3%B3n%20Puigvert!5e0!3m2!1sen!2sbd!4v1588151882187!5m2!1sen!2sbd"
            class="w-100" height="215" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
    </div>
  </section>


 

            <Footer />
        </>
    )
}


export default Home