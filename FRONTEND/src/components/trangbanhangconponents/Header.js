import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                {/* Header Area Start Here */}
                <header className="header-area">
                    <div className="header-top">
                        <div className="container">
                            <div className="row align-items-center text-center text-md-left">
                                {/* Logo Start */}
                                <div className="col-md-3 col order-1 order-md-1 mb-sm-30">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="img\logo\logo.png" alt="logo-img" />
                                        </a>
                                    </div>
                                </div>
                                {/* Logo End */}
                                {/* Search Box Start Here */}
                                <div className="col-md-6  order-3 order-md-2">
                                    <div className=" categorie-search-box">
                                        <form action="#">
                                            <input type="text" name="search" placeholder="Search your keyword" />
                                            <button>
                                                <span className="ti-search" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                {/* Search Box End Here */}
                                {/* Cart Box Start Here */}
                                <div className="col-md-3 col order-2 order-md-3 mb-sm-30">
                                    <div className="cart-box float-md-right">
                                        <div className="drodown-show">
                                            <a href="#">
                                                <span className="total-pro">2 item
                                            <br />
                                                    <span>$160.00</span>
                                                </span>
                                            </a>
                                            <ul className="dropdown cart-box-width">
                                                <li>
                                                    {/* Cart Box Start */}
                                                    <div className="single-cart-box">
                                                        <div className="cart-img">
                                                            <a href="#">
                                                                <img src="img\products\p1.jpeg" alt="cart-image" />
                                                            </a>
                                                            <span className="pro-quantity">1X</span>
                                                        </div>
                                                        <div className="cart-content">
                                                            <h6>
                                                                <a href="product-details.html">Printed Summer Red </a>
                                                            </h6>
                                                            <span className="cart-price">27.45</span>
                                                            <span>Size: S</span>
                                                            <span>Color: Yellow</span>
                                                        </div>
                                                        <a className="del-icone" href="#">
                                                            <span className="ti-close" />
                                                        </a>
                                                    </div>
                                                    {/* Cart Box End */}
                                                    {/* Cart Box Start */}
                                                    <div className="single-cart-box">
                                                        <div className="cart-img">
                                                            <a href="#">
                                                                <img src="img\products\p2.jpeg" alt="cart-image" />
                                                            </a>
                                                            <span className="pro-quantity">1X</span>
                                                        </div>
                                                        <div className="cart-content">
                                                            <h6>
                                                                <a href="product-details.html">Printed Round Neck</a>
                                                            </h6>
                                                            <span className="cart-price">45.00</span>
                                                            <span>Size: XL</span>
                                                            <span>Color: Green</span>
                                                        </div>
                                                        <a className="del-icone" href="#">
                                                            <span className="ti-close" />
                                                        </a>
                                                    </div>
                                                    {/* Cart Box End */}
                                                    {/* Cart Footer Inner Start */}
                                                    <div className="cart-footer">
                                                        <ul className="price-content">
                                                            <li>Subtotal
                <span>$57.95</span>
                                                            </li>
                                                            <li>Shipping
                <span>$7.00</span>
                                                            </li>
                                                            <li>Taxes
                <span>$0.00</span>
                                                            </li>
                                                            <li>Total
                <span>$64.95</span>
                                                            </li>
                                                        </ul>
                                                        <div className="cart-actions text-center">
                                                            <a className="cart-checkout" href="checkout.html">Checkout</a>
                                                        </div>
                                                    </div>
                                                    {/* Cart Footer Inner End */}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Cart Box End Here */}
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom blue-bg header-sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                {/* Menu Area Start Here */}
                                <div className="col-lg-10 d-none d-lg-block">
                                    <nav>
                                        <ul className="header-menu-list">
                                            <li className="active">
                                                <a className="drop-icon" href="index.html">home</a>
                                                {/* Home Version Dropdown Start */}
                                                <ul className="ht-dropdown">
                                                    <li>
                                                        <a href="index.html">Home Style 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="home-2.html">Home Style 2</a>
                                                    </li>
                                                </ul>
                                                {/* Home Version Dropdown End */}
                                            </li>
                                            <li>
                                                <a className="drop-icon" href="shop.html">Mobile</a>
                                                {/*  Mega-Menu Start */}
                                                <ul className="ht-dropdown megamenu">
                                                    {/* Single Column Start */}
                                                    <li>
                                                        <ul>
                                                            <li className="menu-tile">electronicsShop</li>
                                                            <li>
                                                                <a href="shop.html">Integrated Systems</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop.html">DJI</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop.html">Power Vision</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop.html">Ryze Tech</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop.html">Yuneec</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    {/* Single Column End */}
                                                    {/* Single Column Start */}
                                                    <li>
                                                        <ul>
                                                            <li className="menu-tile">Stroller Shop</li>
                                                            <li>
                                                                <a href="shop.html">Joggers</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop.html">Lightweight</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop.html">Prams</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop.html">Standard</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop.html">Travel Systems</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    {/* Single Column End */}
                                                    {/* Single Column Start */}
                                                    <li>
                                                        <ul>
                                                            <li className="menu-tile">smartwatch Shop</li>
                                                            <li>
                                                                <a href="shop.html">Men's Watches</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop.html">Ladies Watches</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop.html">Sport Watch</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop.html">Wrist Watches</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop.html">Watch Bands</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    {/* Single Column End */}
                                                </ul>
                                                {/* Mega-Menu End */}
                                            </li>
                                            <li>
                                                <a href="shop.html">accessories</a>
                                            </li>
                                            <li>
                                                <a className="drop-icon" href="#">pages</a>
                                                {/* Home Version Dropdown Start */}
                                                <ul className="ht-dropdown">
                                                    <li>
                                                        <a href="contact.html">contact us</a>
                                                    </li>
                                                    <li>
                                                        <a href="about.html">about us</a>
                                                    </li>
                                                    <li>
                                                        <a href="register.html">register</a>
                                                    </li>
                                                    <li>
                                                        <a href="login.html">Login</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">404</a>
                                                    </li>
                                                    <li>
                                                        <a href="forgot-password.html">forgot password</a>
                                                    </li>
                                                </ul>
                                                {/* Home Version Dropdown End */}
                                            </li>
                                            <li>
                                                <a className="drop-icon" href="blog.html">blog</a>
                                                {/* Home Version Dropdown Start */}
                                                <ul className="ht-dropdown blog-dropdown">
                                                    <li>
                                                        <a href="blog.html">Blog</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">Blog Details</a>
                                                    </li>
                                                </ul>
                                                {/* Home Version Dropdown End */}
                                            </li>
                                            <li>
                                                <a href="contact.html">contact</a>
                                            </li>
                                            <li>
                                                <a className="drop-icon" href="shop.html">shop</a>
                                                {/* Home Version Dropdown Start */}
                                                <ul className="ht-dropdown">
                                                    <li>
                                                        <a href="shop.html">Shop</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-details.html">product details</a>
                                                    </li>
                                                    <li>
                                                        <a href="compare.html">compare</a>
                                                    </li>
                                                    <li>
                                                        <a href="cart.html">cart</a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">checkout</a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html">wishlist</a>
                                                    </li>
                                                </ul>
                                                {/* Home Version Dropdown End */}
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* Menu Area End Here */}
                                {/* Cart Box Start Here */}
                                <div className="col-lg-2">
                                    <div className="setting-box float-right">
                                        <ul>
                                            <li className="drodown-show">
                                                <a href="#">
                                                    <span className="ti-settings" />
                                                </a>
                                                {/* Currency & Language Selection Start */}
                                                <ul className="dropdown cart-box-width currency-selector">
                                                    <li>
                                                        <h3>My Account </h3>
                                                        <ul>
                                                            <li>
                                                                <a href="register.html">Register</a>
                                                            </li>
                                                            <li>
                                                                <a href="login.html">Login</a>
                                                            </li>
                                                            <li>
                                                                <a href="account.html">My Account</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h3>Currency: USD</h3>
                                                        <ul>
                                                            <li>
                                                                <a href="#">€ Euro</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">£ Pound Sterling</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">$ US Dollar</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h3>Language: EN-GB</h3>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="img\header\1.jpeg" alt="lang-icon" /> English</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="img\header\2.jpeg" alt="lang-icon" /> Germany</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                {/* Currency & Language Selection End */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Cart Box End Here */}
                            </div>
                            {/* Row End */}
                            {/* Mobile Menu Start Here */}
                            <div className="mobile-menu d-block d-lg-none" data-menu="Menu">
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="index.html">home</a>
                                            {/* Home Version Dropdown Start */}
                                            <ul>
                                                <li>
                                                    <a href="index.html">Home Style 1</a>
                                                </li>
                                                <li>
                                                    <a href="home-2.html">Home Style 2</a>
                                                </li>
                                            </ul>
                                            {/* Home Version Dropdown End */}
                                        </li>
                                        <li>
                                            <a href="#">Mobile</a>
                                            {/* Men Accessories Dropdown Start */}
                                            <ul className="submobile-mega-dropdown">
                                                <li>
                                                    <a href="#">Electra Shope</a>
                                                    {/* Watches Dropdown Start */}
                                                    <ul>
                                                        <li>
                                                            <a href="shop.html">Integrated Systems</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">DJI</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Power Vision</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Ryze Tech</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Yuneec</a>
                                                        </li>
                                                    </ul>
                                                    {/* Watches Dropdown End */}
                                                </li>
                                                <li>
                                                    <a href="#">Stroller Shop</a>
                                                    {/* Shoes Dropdown Start */}
                                                    <ul>
                                                        <li>
                                                            <a href="shop.html">Joggers</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Lightweight</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Prams</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Standard</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Travel Systems</a>
                                                        </li>
                                                    </ul>
                                                    {/* Shoes Dropdown End */}
                                                </li>
                                                <li>
                                                    <a href="#">smartwatch Shop</a>
                                                    {/* Bags Dropdown Start */}
                                                    <ul>
                                                        <li>
                                                            <a href="shop.html">Men's Watches</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Ladies Watches</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Sport Watch</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Wrist Watches</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Watch Bands</a>
                                                        </li>
                                                    </ul>
                                                    {/* Bags Dropdown End */}
                                                </li>
                                                <li>
                                                    <a href="#">Scooter Shop</a>
                                                    {/* Bags Dropdown Start */}
                                                    <ul>
                                                        <li>
                                                            <a href="shop.html">Pro Scooters</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Custom Scooters</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Kids Scooters</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Dirt Scooters</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">Adult / Commuter Scooters</a>
                                                        </li>
                                                    </ul>
                                                    {/* Bags Dropdown End */}
                                                </li>
                                            </ul>
                                            {/* Men Accessories Dropdown End */}
                                        </li>
                                        <li>
                                            <a href="#">shop</a>
                                            {/* Mobile Menu Dropdown Start */}
                                            <ul>
                                                <li>
                                                    <a href="shop.html">Shop</a>
                                                </li>
                                                <li>
                                                    <a href="product-details.html">product details</a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">compare</a>
                                                </li>
                                                <li>
                                                    <a href="cart.html">cart</a>
                                                </li>
                                                <li>
                                                    <a href="checkout.html">checkout</a>
                                                </li>
                                                <li>
                                                    <a href="wishlist.html">wishlist</a>
                                                </li>
                                            </ul>
                                            {/* Mobile Menu Dropdown End */}
                                        </li>
                                        <li>
                                            <a href="#">Blog</a>
                                            {/* Mobile Menu Dropdown Start */}
                                            <ul>
                                                <li>
                                                    <a href="blog.html">blog</a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">Blog Details</a>
                                                </li>
                                            </ul>
                                            {/* Mobile Menu Dropdown End */}
                                        </li>
                                        <li>
                                            <a href="#">pages</a>
                                            {/* Mobile Menu Dropdown Start */}
                                            <ul>
                                                <li>
                                                    <a href="about.html">about us</a>
                                                </li>
                                                <li>
                                                    <a href="account.html">My account</a>
                                                </li>
                                                <li>
                                                    <a href="register.html">register</a>
                                                </li>
                                                <li>
                                                    <a href="login.html">Login</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">404</a>
                                                </li>
                                                <li>
                                                    <a href="forgot-password.html">forgot password</a>
                                                </li>
                                            </ul>
                                            {/* Mobile Menu Dropdown End */}
                                        </li>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* Mobile Menu End Here */}
                        </div>
                        {/* Container End */}
                    </div>
                </header>
                {/* Header Area End Here */}
            </div>
        );
    }
}

export default Header;