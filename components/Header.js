import Link from 'next/link'
import { useEffect } from "react";


export default function Header() {

    return (

        <>
            <header className="site-header header-absolute">
                <div className="header-top d-none d-md-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="d-sm-flex">
                                    <div className="email-block">
                                        <i className="fal fa-envelope header-top-icon"></i> contact@domain.com
                                    </div>
                                    <div className="email-block ml-4">
                                        <i className="fal fa-phone-volume header-top-icon"></i> +1 41 3218 654
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-sm-flex justify-content-sm-end align-items-center">
                                    <div className="header-top-social d-none d-lg-block">
                                        <ul className="header-social">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="header-top-btn ml-md-5">
                                        <a href="#" className="btn btn-bg">Get Started <i className="fal fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-block d-none d-lg-block sticky-header-active ">
                    <div className="container">
                        <div className="full-bar-search-wrap">
                            <div className="search-form-wrapper">
                                <form method="get" className="search-form" action="#">
                                    <div className="search-form-group"> <input name="s" type="text" className="form-control" value=""
                                        placeholder="Search here..." /></div>
                                </form> <a href="#" className="close full-bar-search-toggle"></a>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-3 col-lg-2">
                                <a href="index.html"><img src="/img/header-logo.svg" alt="header logo" className="img-fluid" /></a>
                            </div>
                            <div className="col-md-9 col-lg-10 position-static">
                                <div className="d-flex justify-content-end">
                                    <div className="menu-align-right d-sm-block d-none">
                                        <div className="menu-main-menu-container">
                                            <ul className="header-navigation-menu">
                                                <li className="active">
                                                    <a href="index.html">Home</a>
                                                    <ul className="submenu-inner">
                                                        <li><a href="home-2.html">Home 2</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="about.html">About us</a>
                                                    <ul className="submenu-inner">
                                                        <li><a href="about-2.html">About 2</a></li>
                                                    </ul>
                                                </li>
                                                <li className="megamenu-parent"><a href="services.html">Services</a>
                                                    <ul className="submenu-inner megamenu-wrap-inner">
                                                        <li><a href="#">Basic Services</a>
                                                            <ul>
                                                                <li><a href="#">Data Storage</a></li>
                                                                <li><a href="#">Data Analysis</a></li>
                                                                <li><a href="#">Security management</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Pro Services</a>
                                                            <ul>
                                                                <li><a href="#">Cloud Deployment</a></li>
                                                                <li><a href="#">Data Analysis</a></li>
                                                                <li><a href="#">Security management</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Developer Services</a>
                                                            <ul>
                                                                <li><a href="#">API Generate</a></li>
                                                                <li><a href="#">DNS Management</a></li>
                                                                <li><a href="#">Cloud Compute</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="projects.html">Projects</a></li>
                                                <li><a href="blog.html">Blog</a>
                                                    <ul className="submenu-inner">
                                                        <li><a href="blog.html">Blog Grid</a></li>
                                                        <li><a href="blog-listing.html">Blog List</a></li>
                                                        <li><a href="single.html">Single post</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="search-box">
                                        <a href="javascript:void(0)" className="full-bar-search-toggle"><i className="fal fa-search"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-block d-block d-lg-none">
                    <div className="container">

                        <div className="row align-items-center">
                            <div className="full-bar-search-wrap">
                                <div className="search-form-wrapper">
                                    <form method="get" className="search-form" action="#">
                                        <div className="search-form-group"> <input name="s" type="text" className="form-control" value=""
                                            placeholder="Search here..." /></div>
                                    </form> <a href="#" className="close full-bar-search-toggle"></a>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="canvas-menu gva-offcanvas">
                                    <a id="mobile-header-expander" className="dropdown-toggle" data-canvas=".mobile">
                                        <span className="hamburger-menu">
                                            <span className="hamburger-menu-line hamburger-menu-line-1"></span>
                                            <span className="hamburger-menu-line hamburger-menu-line-2"></span>
                                            <span className="hamburger-menu-line hamburger-menu-line-3"></span>
                                            <span className="hamburger-menu-line hamburger-menu-line-4"></span>
                                        </span>
                                    </a>
                                </div>
                                <div className="offcanvas-content mobile">
                                    <div className="close-canvas"><a><i className="fal fa-times"></i></a></div>
                                    <div className="wp-sidebar sidebar">
                                        <div id="mobile-menu" className="navbar-collapse">
                                            <ul id="menu-main-menu" className="header-navigation-menu mobile-menu">
                                                <li className="active">
                                                    <a href="index.html">Home</a>
                                                    <ul className="submenu-inner">
                                                        <li><a href="home-2.html">Home 2</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="about.html">About us</a>
                                                    <ul className="submenu-inner">
                                                        <li><a href="about-2.html">About 2</a></li>
                                                    </ul>
                                                </li>
                                                <li className="megamenu-parent"><a href="services.html">Services</a>
                                                    <ul className="submenu-inner">
                                                        <li><a href="#">Basic Services</a>
                                                            <ul>
                                                                <li><a href="#">Data Storage</a></li>
                                                                <li><a href="#">Data Analysis</a></li>
                                                                <li><a href="#">Security management</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Pro Services</a>
                                                            <ul>
                                                                <li><a href="#">Cloud Deployment</a></li>
                                                                <li><a href="#">Data Analysis</a></li>
                                                                <li><a href="#">Security management</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Developer Services</a>
                                                            <ul>
                                                                <li><a href="#">API Generate</a></li>
                                                                <li><a href="#">DNS Management</a></li>
                                                                <li><a href="#">Cloud Compute</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="projects.html">Projects</a></li>
                                                <li><a href="blog.html">Blog</a>
                                                    <ul className="submenu-inner">
                                                        <li><a href="blog.html">Blog Grid</a></li>
                                                        <li><a href="blog-listing.html">Blog List</a></li>
                                                        <li><a href="single.html">Single post</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 text-center">
                                <a href="index.html"><img src="/img/header-logo.svg" alt="header logo" className="img-fluid" /></a>
                            </div>
                            <div className="col-2">
                                <div className="search-box">
                                    <a href="javascript:void(0)" className="full-bar-search-toggle"><i className="fal fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}