import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                {/* Footer Area Start Here */}
                <footer className="footer-area black-bg pt-60">
                    <div className="container">
                        <div className="footer-top">
                            <div className="footer-logo text-center">
                                <a href="index.html">
                                    <img src="img\logo\logo2.png" alt="footer-logo" />
                                </a>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                                Latin literature.</p>
                            </div>
                            {/* Support Area Start Here */}
                            <div className="support-area d-flex flex-wrap justify-content-between">
                                {/* Single Support Area Start Here */}
                                <div className="single-support mb-all-40">
                                    <div className="support-icon">
                                        <img src="img\support\s1.png" alt="support-icon" />
                                    </div>
                                    <div className="support-desc">
                                        <h6>Free Shipping</h6>
                                        <p>Most product are free
                                    <br /> shipping.</p>
                                    </div>
                                </div>
                                {/* Single Support Area End Here */}
                                {/* Single Support Area Start Here */}
                                <div className="single-support mb-all-40">
                                    <div className="support-icon">
                                        <img src="img\support\s2.png" alt="support-icon" />
                                    </div>
                                    <div className="support-desc">
                                        <h6>Customer Support</h6>
                                        <p>24x7 Customer Support</p>
                                    </div>
                                </div>
                                {/* Single Support Area End Here */}
                                {/* Single Support Area Start Here */}
                                <div className="single-support">
                                    <div className="support-icon">
                                        <img src="img\support\s3.png" alt="support-icon" />
                                    </div>
                                    <div className="support-desc">
                                        <h6>Secure Payment</h6>
                                        <p>Most Secure Payment
                                    <br /> for customer.</p>
                                    </div>
                                </div>
                                {/* Single Support Area End Here */}
                            </div>
                            {/* Support Area End Here */}
                        </div>
                        <div className="footer-middle ptb-60">
                            <div className="row">
                                {/* Single Footer Start */}
                                <div className="col-lg-4 col-md-6 mb-all-40">
                                    <div className="single-footer">
                                        <h4 className="footer-title e-header">Recent Post</h4>
                                        <div className="footer-content all-recent-post">
                                            <ul className="footer-list recent-post">
                                                <li className="single-recent-post">
                                                    <div className="recent-img">
                                                        <a href="#">
                                                            <img src="img\products\p2.jpeg" alt="blog-img" />
                                                        </a>
                                                    </div>
                                                    <div className="recent-desc">
                                                        <h6>
                                                            <a href="#">Majority have suffered alteration</a>
                                                        </h6>
                                                        <span>27 July, 2018</span>
                                                    </div>
                                                </li>
                                                <li className="single-recent-post">
                                                    <div className="recent-img">
                                                        <a href="#">
                                                            <img src="img\products\p5.jpeg" alt="blog-img" />
                                                        </a>
                                                    </div>
                                                    <div className="recent-desc">
                                                        <h6>
                                                            <a href="#">Majority have suffered alteration</a>
                                                        </h6>
                                                        <span>15 Aug, 2018</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Footer End */}
                                {/* Single Footer Start */}
                                <div className="col-lg-2 col-md-6 mb-all-40">
                                    <div className="single-footer">
                                        <h4 className="footer-title e-header">quick link</h4>
                                        <div className="footer-content">
                                            <ul className="footer-list quick-link">
                                                <li>
                                                    <a href="cart.html">cart</a>
                                                </li>
                                                <li>
                                                    <a href="checkout.html">checkout</a>
                                                </li>
                                                <li>
                                                    <a href="login.html">login</a>
                                                </li>
                                                <li>
                                                    <a href="register.html">register</a>
                                                </li>
                                                <li>
                                                    <a href="#">tracking</a>
                                                </li>
                                                <li>
                                                    <a href="#">product</a>
                                                </li>
                                                <li>
                                                    <a href="blog.html">blog</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Footer End */}
                                {/* Single Footer Start */}
                                <div className="col-lg-3 col-md-6 mb-sm-40">
                                    <div className="single-footer">
                                        <h4 className="footer-title e-header">contact info</h4>
                                        <div className="footer-content">
                                            <ul className="footer-list contact-info">
                                                <li className="location">
                                                    <p>lorem address south road</p>
                                                    <p>77 north, USA -9991</p>
                                                </li>
                                                <li className="mail">
                                                    <p>domaininfo@mail.com</p>
                                                    <p>company@mail.com</p>
                                                </li>
                                                <li className="phone">
                                                    <p>+ 755 2236 6698 22</p>
                                                    <p>+ 556 6666 6589 22</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Footer End */}
                                {/* Single Footer Start */}
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-footer">
                                        <h4 className="footer-title e-header">newsletter</h4>
                                        <div className="footer-content">
                                            <ul className="footer-list newsletter-text">
                                                <li>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                                    laudantium.
                                                </p>
                                                </li>
                                                <li className="footer-search mb-30">
                                                    <form action="#">
                                                        <input type="text" placeholder="Email" name="footer-mail" id="footer-mail" />
                                                        <button>
                                                            <i className="zmdi zmdi-mail-send" />
                                                        </button>
                                                    </form>
                                                </li>
                                                <li>
                                                    <h5 className="e-header">Social Icon</h5>
                                                    <ul className="footer-social d-inline-flex mt-30">
                                                        <li>
                                                            <a href="#">
                                                                <i className="zmdi zmdi-twitter" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="zmdi zmdi-vimeo" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="zmdi zmdi-pinterest" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="zmdi zmdi-dribbble" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Footer End */}
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom text-center ptb-15 off-black-bg">
                        <p className="copyright">Copyright © <a href="#">Ponno</a> All right reserved</p>
                    </div>
                </footer>
                {/* Footer Area End Here */}
            </div>
        );
    }
}

export default Footer;