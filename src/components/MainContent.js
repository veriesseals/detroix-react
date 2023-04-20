import React from "react";
import Hero from '../components/img/hero.jpg';
import Smart from '../components/img/smart.jpg';
import Strong from '../components/img/strong.jpg';
import Stable from '../components/img/stable.jpg';

function MainContent() {
    return (
        <div className="wrapper">
            <main class="main" id="main">
                <section class="section section1">
                    <div class="container">
                        <img src={Hero} alt="detroix Hero Image" class="hero-img"/>
                        <div class="sliders">
                            <div class="slider slider1"></div>
                            <div class="slider slider2"></div>
                            <div class="slider slider3"></div>
                        </div>
                    </div>
                </section>

                {/* ----------------------------------------------------------- */}
                {/* Smart, Strong, Stable */}

                <section class="section section2">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4 content-box sect-02-item">
                                <div class="content">
                                    <h2 class="content-header">smart</h2>
                                    <img src={Smart} alt="smart image" class="content-img-fluid"/>
                                    <p class="text smart-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
                                        amet pariatur! Quidem, repudiandae aspernatur quisquam obcaecati fugit, molestiae
                                        corrupti quasi fuga doloribus beatae unde veritatis officiis magnam.</p>
                                </div>
                                <button class="btn more-btn text-uppercase text-light">more</button>
                            </div>

                            <div class="col-sm-4 content-box sect-02-item">
                                <div class="content strong-content">
                                    <h2 class="content-header">strong</h2>
                                    <img src={Strong} alt="smart image" class="content-img-fluid"/>
                                    <p class="text strong-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Aliquid, amet pariatur! Quidem, repudiandae aspernatur quisquam obcaecati fugit,
                                        molestiae corrupti quasi fuga doloribus beatae unde veritatis officiis magnam.</p>
                                </div>
                                <button class="btn more-btn text-uppercase text-light">more</button>
                            </div>

                            <div class="col-sm-4 content-box sect-02-item">
                                <div class="content stable-content">
                                    <h2 class="content-header">stable</h2>
                                    <img src={Stable} alt="smart image" class="content-img-fluid"/>
                                    <p class="text smart-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
                                        amet pariatur! Quidem, repudiandae aspernatur quisquam obcaecati fugit, molestiae
                                        corrupti quasi fuga doloribus beatae unde veritatis officiis magnam.</p>
                                </div>
                                <button class="btn more-btn text-uppercase text-light">more</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
};



export default MainContent;