import Link from 'next/link'
import { useEffect } from "react";
import Script from 'next/script'

export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (

        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="email-subscription-block">
                                <div className="text-center">
                                    <h2 className="section-title mb-5">Interested to get notifications?</h2>
                                </div>
                                <div className="subscription-form">
                                    <form action="#">
                                        <div className="subscribe-form-block">
                                            <div className="form-inline">
                                                <input type="email" className="email-input" placeholder="Your email" />
                                                <input type="submit" value="subscribe" className="wpcf7-submit" />
                                            </div>
                                        </div>
                                    </form>
                                    <div className="text-center mt-2 font-italic">
                                        <span>We won't share your mail with 3rd parties</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-4">
                                <h3 className="footer-title">About Us</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
                                <div className="footer-social-links">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-2 mt-xs-45">
                                <h3 className="footer-title">Useful links</h3>
                                <div className="footer-widget">
                                    <ul className="menu">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Cases</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-2 mt-xs-45">
                                <h3 className="footer-title">Services</h3>
                                <div className="footer-widget">
                                    <ul className="menu">
                                        <li><a href="#">Data analysis</a></li>
                                        <li><a href="#">Model design</a></li>
                                        <li><a href="#">Report publishing</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-4 mt-xs-45">
                                <h3 className="footer-title">Get in touch</h3>
                                <div className="footer-widget">
                                    <address className="address-widget">
                                        <div className="address-item d-flex">
                                            <div className="address-icon">
                                                <i className="fal fa-map-marker-check"></i>
                                            </div>
                                            <div className="address-content">
                                                <span>620 Eighth Avenue, New York, <br />
                                                    NY 10018, USA</span>
                                            </div>
                                        </div>
                                        <div className="address-item d-flex">
                                            <div className="address-icon">
                                                <i className="fal fa-phone-volume"></i>
                                            </div>
                                            <div className="address-content">
                                                <span>+01 2345 6789</span>
                                            </div>
                                        </div>
                                        <div className="address-item d-flex">
                                            <div className="address-icon">
                                                <i className="fal fa-paper-plane"></i>
                                            </div>
                                            <div className="address-content">
                                                <span>contact@yoursite.com</span>
                                            </div>
                                        </div>
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <span>Lasthash 2017-{getCurrentYear()} copyright. All rights reserved.</span>
                            </div>
                            <div className="col-md-6">
                                <nav className="footer-menu">
                                    <ul className="nav justify-content-sm-end">
                                        <li><a href="#">Privacy policy</a></li>
                                        <li><a href="#">Terms & conditions</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="scroll-top">
                <i className="fal fa-arrow-to-top"></i>
            </div>
            <Script src="/js/vendor/modernizr-3.8.0.min.js" />
            <Script src="/js/vendor/jquery-3.4.1.min.js" />
            <Script src="/js/vendor/popper.min.js" />
            
            
            <Script src="/js/bootstrap.min.js" />
            <Script src="/js/plugins.js" />
            <Script src="/js/vendor/jquery.tabslet.min.js" />
            <Script src="/js/vendor/jquery.appear.js" />
            <Script src="/js/vendor/count-to.js" />
            <Script src="/js/vendor/isotope.pkgd.min.js" />
            <Script src="/js/vendor/owl.carousel.min.js" />
            <Script src="/js/main.js" />
        </>
    )
}