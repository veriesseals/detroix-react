import React from "react";
import Logo from '../components/img/logo.jpg';


function Header() {
    return(
        <div>
            <header class="header">
                <div class="topheader">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="#link" class="top-link d-none d-md-block">www.demolink.org</a>
                            </div>
                            <div class="col-md-6">
                                <ul class="nav top-nav justify-content-center justify-content-md-end">
                                    <li class="nav-item top-nav-item"><a href="#link" class="nav-link">support</a></li>
                                    <li class="nav-item top-nav-item"><a href="#link" class="nav-link">faq</a></li>
                                    <li class="nav-item top-nav-item"><a href="#link" class="nav-link">sitemap</a></li>
                                    <li class="nav-item top-nav-item"><a href="#link" class="nav-link">help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Header */}

                <div class="bottomheader">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <h1 class="logo text-center text-md-start">
                                    <a href="index.html" class="home-link"/>
                                        <span class="visually-hidden">detroix</span>
                                        <img src={Logo} alt="Detroix" class="img-fluid logo-img" />
                                    
                                </h1>
                            </div>
                            <div class="col-md-8">
                                <nav class="nav bottom-nav justify-content-center justify-content-md-end">
                                    <a href="#link" class="nav-link btn bottom-nav-link">home</a>
                                    <a href="#link" class="nav-link btn bottom-nav-link">about</a>
                                    <a href="#link" class="nav-link btn bottom-nav-link">services</a>
                                    <a href="#link" class="nav-link btn bottom-nav-link">faqs</a>
                                    <a href="#link" class="nav-link btn bottom-nav-link">contacts</a>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default Header;