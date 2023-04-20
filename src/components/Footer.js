import React from "react";

function Footer() {
    return (
        <div>
            <footer class="footer" id="footer">
                {/* Top Footer */}
                <div class="topfooter">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="footer-content services-content">
                                    <h2 class="footer-header footer-header text-light text-uppercase">services</h2>
                                    <ul class="service-list">
                                        <li class="service-item">
                                            <a href="#link" class="serivce-link text-decloration-none text-light">Lorem ipsum
                                                dolor sit amet.</a>
                                        </li>
                                        <li class="service-item">
                                            <a href="#link" class="serivce-link text-decloration-none text-light">Lorem ipsum
                                                dolor sit amet.</a>
                                        </li>
                                        <li class="service-item">
                                            <a href="#link" class="serivce-link text-decloration-none text-light">Lorem ipsum
                                                dolor sit amet.</a>
                                        </li>
                                        <li class="service-item">
                                            <a href="#link" class="serivce-link text-decloration-none text-light">Lorem ipsum
                                                dolor sit amet.</a>
                                        </li>
                                        <li class="service-item">
                                            <a href="#link" class="serivce-link text-decloration-none text-light">Lorem ipsum
                                                dolor sit amet.</a>
                                        </li>
                                        <li class="service-item">
                                            <a href="#link" class="serivce-link text-decloration-none text-light">Lorem ipsum
                                                dolor sit amet.</a>
                                        </li>
                                        <li class="service-item">
                                            <a href="#link" class="serivce-link text-decloration-none text-light">Lorem ipsum
                                                dolor sit amet.</a>
                                        </li>
                                        <li class="service-item">
                                            <a href="#link" class="serivce-link text-decloration-none text-light">Lorem ipsum
                                                dolor sit amet.</a>
                                        </li>
                                    </ul>
                                    <button class="btn more-btn text-uppercase text-light">more</button>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="footer content opp-content">
                                    <h2 class="footer-header text-light text-uppercase">opportunities</h2>
                                    <ul class="opp-list">
                                        <li class="opp-item">
                                            <a href="#link" class="opp-link text-decloration-none">
                                                <h3 class="opp-header text-light">Lorem ipsum dolor sit.</h3>
                                                <p class="opp-text">Lorem ipsum dolor sit amet consectetur
                                                    adipisicing elit. Repellat rem vero ipsum atque animi repellendus suscipit
                                                    molestiae? Tenetur, nesciunt? Animi?</p>
                                            </a>
                                        </li>
                                        <li class="opp-item">
                                            <a href="#link" class="opp-link text-decloration-none">
                                                <h3 class="opp-header text-light">Lorem ipsum dolor sit.</h3>
                                                <p class="opp-text">Lorem ipsum dolor sit amet consectetur
                                                    adipisicing elit. Repellat rem vero ipsum atque animi repellendus suscipit
                                                    molestiae? Tenetur, nesciunt? Animi?</p>
                                            </a>
                                        </li>
                                    </ul>
                                    <button class="btn more-btn text-uppercase text-light">more</button>
                                </div>
                            </div>

                            {/* ----------------------------------------------------------- */}
                            {/* News Items */}

                            <div class="col-sm-4">
                                <div class="footer-content news-content">
                                    <h2 class="footer-headervfooter-header text-light text-uppercase">news</h2>
                                    <div class="container-sm">
                                        <ul class="news-list">
                                            <li class="news-item d-flex justify-content-between">
                                                <div class="date-div date-div1 text-light text-center text-uppercase">
                                                    <p class="date h4">21</p>
                                                    <p class="month small">nov</p>
                                                </div>
                                                <div class="text-div">
                                                    <h3 class="news-header text-light">Lorem ipsum dolor sit amet.</h3>
                                                    <p class="news-text opp-text">Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Animi, quas.</p>
                                                </div>
                                            </li>

                                            <li class="news-item d-flex justify-content-between">
                                                <div class="date-div date-div2 text-light text-center text-uppercase">
                                                    <p class="date h4">21</p>
                                                    <p class="month small">nov</p>
                                                </div>
                                                <div class="text-div">
                                                    <h3 class="news-header text-light">Lorem ipsum dolor sit amet.</h3>
                                                    <p class="news-text opp-text">Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Animi, quas.</p>
                                                </div>
                                            </li>

                                            <li class="news-item d-flex justify-content-between">
                                                <div class="date-div date-div3 text-light text-center text-uppercase">
                                                    <p class="date h4">21</p>
                                                    <p class="month small">nov</p>
                                                </div>
                                                <div class="text-div">
                                                    <h3 class="news-header text-light">Lorem ipsum dolor sit amet.</h3>
                                                    <p class="news-text opp-text">Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Animi, quas.</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div id="news-more">
                                            <button class="btn more-btn text-uppercase text-light">more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom Footer */}

                <section class="bottom-footer">
                    <div class="container">
                        <p class="colophon">site by Veries Seals &copy;2022</p>
                    </div>
                </section>

            </footer>
        </div>
    )
};

export default Footer;
