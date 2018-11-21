import React, { Component } from 'react'



class formatfashe extends Component {
    render() {
        return (
            
             <div>
                <header className="header1">
                    {/* <!-- Header desktop --> */}
                    <div className="container-menu-header">
                        <div className="topbar">
                            <div className="topbar-social">
                                <a href="#" className="topbar-social-item fa fa-facebook"></a>
                                <a href="#" className="topbar-social-item fa fa-instagram"></a>
                                <a href="#" className="topbar-social-item fa fa-pinterest-p"></a>
                                <a href="#" className="topbar-social-item fa fa-snapchat-ghost"></a>
                                <a href="#" className="topbar-social-item fa fa-youtube-play"></a>
                            </div>

                            <span className="topbar-child1">
                                Free shipping for standard order over $100
				</span>

                            <div className="topbar-child2">
                                <span className="topbar-email">
                                project@dappsh.com
					</span>

                                <div className="topbar-language rs1-select2">
                                    <select className="selection-1" name="time">
                                        <option>USD</option>
                                        <option>EUR</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="wrap_header">
                            {/* <!-- Logo --> */}
                            
                            <a href="index.html" className="logo">
                            <p>formatfashe dummy dapps</p>    
                            {/* <img src="images/icons/logo.png" alt="IMG-LOGO" /> */}
                            </a>

                            {/* <!-- Menu --> */}
                            <div className="wrap_menu">
                                <nav className="menu">
                                    <ul className="main_menu">
                                        <li>
                                            <a href="index.html">Home</a>
                                            <ul className="sub_menu">
                                                <li><a href="index.html">Homepage V1</a></li>
                                                <li><a href="home-02.html">Homepage V2</a></li>
                                                <li><a href="home-03.html">Homepage V3</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="product.html">Shop</a>
                                        </li>

                                        <li className="sale-noti">
                                            <a href="product.html">Sale</a>
                                        </li>

                                        <li>
                                            <a href="cart.html">Features</a>
                                        </li>

                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>

                                        <li>
                                            <a href="about.html">About</a>
                                        </li>

                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            {/* <!-- Header Icon --> */}
                            <div className="header-icons">
                                <a href="#" className="header-wrapicon1 dis-block">
                                    <img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
                                </a>

                                <span className="linedivide1"></span>

                                <div className="header-wrapicon2">
                                    <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
                                    <span className="header-icons-noti">0</span>

                                    {/* <!-- Header cart noti --> */}
                                    <div className="header-cart header-dropdown">
                                        <ul className="header-cart-wrapitem">
                                            <li className="header-cart-item">
                                                <div className="header-cart-item-img">
                                                    <img src="images/item-cart-01.jpg" alt="IMG" />
                                                </div>

                                                <div className="header-cart-item-txt">
                                                    <a href="#" className="header-cart-item-name">
                                                    White Shirt With Pleat Detail Back
										</a>

                                                <span className="header-cart-item-info">
                                                    1 x $19.00
										</span>
									</div>
								</li>

                                        <li className="header-cart-item">
                                            <div className="header-cart-item-img">
                                                <img src="images/item-cart-02.jpg" alt="IMG" />
                                            </div>

                                            <div className="header-cart-item-txt">
                                                <a href="#" className="header-cart-item-name">
                                                    Converse All Star Hi Black Canvas
										</a>

                                                <span className="header-cart-item-info">
                                                    1 x $39.00
										</span>
                                            </div>
                                        </li>

                                        <li className="header-cart-item">
                                            <div className="header-cart-item-img">
                                                <img src="images/item-cart-03.jpg" alt="IMG" />
                                            </div>

                                            <div className="header-cart-item-txt">
                                                <a href="#" className="header-cart-item-name">
                                                    Nixon Porter Leather Watch In Tan
										</a>

                                                <span className="header-cart-item-info">
                                                    1 x $17.00
										</span>
                                            </div>
                                        </li>
							</ul>

                                    <div className="header-cart-total">
                                        Total: $75.00
							</div>

                                    <div className="header-cart-buttons">
                                        <div className="header-cart-wrapbtn">
                                            {/* <!-- Button --> */}
                                            <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                                View Cart
									</a>
                                        </div>

                                        <div className="header-cart-wrapbtn">
                                            {/* <!-- Button --> */}
                                            <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                                Check Out
									</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
		</div>

                {/* <!-- Header Mobile --> */}
                <div className="wrap_header_mobile">
                    {/* <!-- Logo moblie --> */}
                    <a href="index.html" className="logo-mobile">
                    <p>formatfashe Dummy Ajeng</p>
                        {/* <img src="images/icons/logo.png" alt="IMG-LOGO" /> */}
                    </a>

                    {/* <!-- Button show menu --> */}
                    <div className="btn-show-menu">
                        {/* <!-- Header Icon mobile --> */}
                        <div className="header-icons-mobile">
                            <a href="#" className="header-wrapicon1 dis-block">
                                <img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
                            </a>

                            <span className="linedivide2"></span>

                            <div className="header-wrapicon2">
                                <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
                                <span className="header-icons-noti">0</span>

                                {/* <!-- Header cart noti --> */}
                                <div className="header-cart header-dropdown">
                                    <ul className="header-cart-wrapitem">
                                        <li className="header-cart-item">
                                            <div className="header-cart-item-img">
                                                <img src="images/item-cart-01.jpg" alt="IMG" />
                                            </div>

                                            <div className="header-cart-item-txt">
                                                <a href="#" className="header-cart-item-name">
                                                    White Shirt With Pleat Detail Back
										</a>

                                                <span className="header-cart-item-info">
                                                    1 x $19.00
										</span>
                                            </div>
                                        </li>

                                        <li className="header-cart-item">
                                            <div className="header-cart-item-img">
                                                <img src="images/item-cart-02.jpg" alt="IMG" />
                                            </div>

                                            <div className="header-cart-item-txt">
                                                <a href="#" className="header-cart-item-name">
                                                    Converse All Star Hi Black Canvas
										</a>

                                                <span className="header-cart-item-info">
                                                    1 x $39.00
										</span>
                                            </div>
                                        </li>

                                        <li className="header-cart-item">
                                            <div className="header-cart-item-img">
                                                <img src="images/item-cart-03.jpg" alt="IMG" />
                                            </div>

                                            <div className="header-cart-item-txt">
                                                <a href="#" className="header-cart-item-name">
                                                    Nixon Porter Leather Watch In Tan
										</a>

                                                <span className="header-cart-item-info">
                                                    1 x $17.00
										</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="header-cart-total">
                                        Total: $75.00
							</div>

                                    <div className="header-cart-buttons">
                                        <div className="header-cart-wrapbtn">
                                            {/* <!-- Button --> */}
                                            <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                                View Cart
									</a>
                                        </div>

                                        <div className="header-cart-wrapbtn">
                                            {/* <!-- Button --> */}
                                            <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                                Check Out
									</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* <!-- Menu Mobile --> */}
                <div className="wrap-side-menu" >
                    <nav className="side-menu">
                        <ul className="main-menu">
                            <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                                <span className="topbar-child1">
                                    Free shipping for standard order over $100
						</span>
                            </li>

                            <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                                <div className="topbar-child2-mobile">
                                    <span className="topbar-email">
                                        project@dappsh.com
							</span>

                                    <div className="topbar-language rs1-select2">
                                        <select className="selection-1" name="time">
                                            <option>USD</option>
                                            <option>EUR</option>
                                        </select>
                                    </div>
                                </div>
                            </li>

                            <li className="item-topbar-mobile p-l-10">
                                <div className="topbar-social-mobile">
                                    <a href="#" className="topbar-social-item fa fa-facebook"></a>
                                    <a href="#" className="topbar-social-item fa fa-instagram"></a>
                                    <a href="#" className="topbar-social-item fa fa-pinterest-p"></a>
                                    <a href="#" className="topbar-social-item fa fa-snapchat-ghost"></a>
                                    <a href="#" className="topbar-social-item fa fa-youtube-play"></a>
                                </div>
                            </li>

                            <li className="item-menu-mobile">
                                <a href="index.html">Home</a>
                                <ul className="sub-menu">
                                    <li><a href="index.html">Homepage V1</a></li>
                                    <li><a href="home-02.html">Homepage V2</a></li>
                                    <li><a href="home-03.html">Homepage V3</a></li>
                                </ul>
                                <i className="arrow-main-menu fa fa-angle-right" aria-hidden="true"></i>
                            </li>

                            <li className="item-menu-mobile">
                                <a href="product.html">Shop</a>
                            </li>

                            <li className="item-menu-mobile">
                                <a href="product.html">Sale</a>
                            </li>

                            <li className="item-menu-mobile">
                                <a href="cart.html">Features</a>
                            </li>

                            <li className="item-menu-mobile">
                                <a href="blog.html">Blog</a>
                            </li>

                            <li className="item-menu-mobile">
                                <a href="about.html">About</a>
                            </li>

                            <li className="item-menu-mobile">
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
	</header>

              {/* <!-- Slide1 --> */}
            <section className="slide1">
                <div className="wrap-slick1">
                    <div className="slick1">
                     <div className="item-slick1 item1-slick1" style={{backgroundImage: 'url(images/master-slide-02.jpg)'}}>
                            <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                                <span className="caption1-slide1 m-text1 t-center animated visible-false m-b-15" data-appear="fadeInDown">
                                    Women Collection 2018
						</span>

                                <h2 className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="fadeInUp">
                                    New arrivals
						</h2>

                                <div className="wrap-btn-slide1 w-size1 animated visible-false" data-appear="zoomIn">
                                    {/* <!-- Button --> */}
                                    <a href="product.html" className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                                        Shop Now
							</a>
                                </div>
                            </div>
                        </div>

                        <div className="item-slick1 item2-slick1" style={{backgroundImage: 'url(images/master-slide-03.jpg)'}}>
                            <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                                <span className="caption1-slide1 m-text1 t-center animated visible-false m-b-15" data-appear="rollIn">
                                    Women Collection 2018
						</span>

                                <h2 className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="lightSpeedIn">
                                    New arrivals
						</h2>

                                <div className="wrap-btn-slide1 w-size1 animated visible-false" data-appear="slideInUp">
                                    {/* <!-- Button --> */}
                                    <a href="product.html" className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                                        Shop Now
							</a>
                                </div>
                            </div>
                        </div>

                        <div className="item-slick1 item3-slick1" style={{backgroundImage: 'url(images/master-slide-04.jpg)'}}>
                            <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                                <span className="caption1-slide1 m-text1 t-center animated visible-false m-b-15" data-appear="rotateInDownLeft">
                                    Women Collection 2018
						</span>

                                <h2 className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="rotateInUpRight">
                                    New arrivals
						</h2>

                                <div className="wrap-btn-slide1 w-size1 animated visible-false" data-appear="rotateIn">
                                    {/* <!-- Button --> */}
                                    <a href="product.html" className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                                        Shop Now
							</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

              {/* <!-- Banner --> */}
            <section className="banner bgwhite p-t-40 p-b-40">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                            {/* <!-- block1 --> */}
                            <div className="block1 hov-img-zoom pos-relative m-b-30">
                                <img src="images/banner-02.jpg" alt="IMG-BENNER" />

                                <div className="block1-wrapbtn w-size2">
                                    {/* <!-- Button --> */}
                                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                        Dresses
							</a>
                                </div>
                            </div>

                            {/* <!-- block1 --> */}
                            <div className="block1 hov-img-zoom pos-relative m-b-30">
                                <img src="images/banner-05.jpg" alt="IMG-BENNER" />

                                <div className="block1-wrapbtn w-size2">
                                    {/* <!-- Button --> */}
                                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                        Sunglasses
							</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                            {/* <!-- block1 --> */}
                            <div className="block1 hov-img-zoom pos-relative m-b-30">
                                <img src="images/banner-03.jpg" alt="IMG-BENNER" />

                                <div className="block1-wrapbtn w-size2">
                                    {/* <!-- Button --> */}
                                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                        Watches
							</a>
                                </div>
                            </div>

                            {/* <!-- block1 --> */}
                            <div className="block1 hov-img-zoom pos-relative m-b-30">
                                <img src="images/banner-07.jpg" alt="IMG-BENNER" />

                                <div className="block1-wrapbtn w-size2">
                                    {/* <!-- Button --> */}
                                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                        Footerwear
							</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                            {/* <!-- block1 --> */}
                            <div className="block1 hov-img-zoom pos-relative m-b-30">
                                <img src="images/banner-04.jpg" alt="IMG-BENNER" />

                                <div className="block1-wrapbtn w-size2">
                                    {/* <!-- Button --> */}
                                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                        Bags
							</a>
                                </div>
                            </div>

                            {/* <!-- block2 --> */}
                            <div className="block2 wrap-pic-w pos-relative m-b-30">
                                <img src="images/icons/bg-01.jpg" alt="IMG" />

                                <div className="block2-content sizefull ab-t-l flex-col-c-m">
                                    <h4 className="m-text4 t-center w-size3 p-b-8">
                                        Sign up & get 20% off
							</h4>

                                    <p className="t-center w-size4">
                                        Be the frist to know about the laformatfashe fashion news and get exclu-sive offers
							</p>

                                    <div className="w-size2 p-t-25">
                                        {/* <!-- Button --> */}
                                        <a href="#" className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                                            Sign Up
								</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

              {/* <!-- New Product --> */}
            <section className="newproduct bgwhite p-t-45 p-b-105">
                <div className="container">
                    <div className="sec-title p-b-60">
                        <h3 className="m-text5 t-center">
                            Featured Products
				</h3>
                    </div>

                    {/* <!-- Slide2 --> */}
                    <div className="wrap-slick2">
                        <div className="slick2">

                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* <!-- Block2 --> */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                                        <img src="images/item-02.jpg" alt="IMG-PRODUCT" />

                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                            </a>

                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* <!-- Button --> */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
										</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Herschel supply co 25l
								</a>

                                        <span className="block2-price m-text6 p-r-5">
                                            $75.00
								</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* <!-- Block2 --> */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                                        <img src="images/item-03.jpg" alt="IMG-PRODUCT" />

                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                            </a>

                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* <!-- Button --> */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
										</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Denim jacket blue
								</a>

                                        <span className="block2-price m-text6 p-r-5">
                                            $92.50
								</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* <!-- Block2 --> */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                                        <img src="images/item-05.jpg" alt="IMG-PRODUCT" />

                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                            </a>

                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* <!-- Button --> */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
										</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Coach slim easton black
								</a>

                                        <span className="block2-price m-text6 p-r-5">
                                            $165.90
								</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* <!-- Block2 --> */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                                        <img src="images/item-07.jpg" alt="IMG-PRODUCT" />

                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                            </a>

                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* <!-- Button --> */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
										</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Frayed denim shorts
								</a>

                                        <span className="block2-oldprice m-text7 p-r-5">
                                            $29.50
								</span>

                                        <span className="block2-newprice m-text8 p-r-5">
                                            $15.90
								</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* <!-- Block2 --> */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                                        <img src="images/item-02.jpg" alt="IMG-PRODUCT" />

                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                            </a>

                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* <!-- Button --> */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
										</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Herschel supply co 25l
								</a>

                                        <span className="block2-price m-text6 p-r-5">
                                            $75.00
								</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* <!-- Block2 --> */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                                        <img src="images/item-03.jpg" alt="IMG-PRODUCT" />

                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                            </a>

                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* <!-- Button --> */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
										</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Denim jacket blue
								</a>

                                        <span className="block2-price m-text6 p-r-5">
                                            $92.50
								</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* <!-- Block2 --> */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                                        <img src="images/item-05.jpg" alt="IMG-PRODUCT" />

                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                            </a>

                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* <!-- Button --> */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
										</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Coach slim easton black
								</a>

                                        <span className="block2-price m-text6 p-r-5">
                                            $165.90
								</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* <!-- Block2 --> */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                                        <img src="images/item-07.jpg" alt="IMG-PRODUCT" />

                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                            </a>

                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* <!-- Button --> */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
										</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Frayed denim shorts
								</a>

                                        <span className="block2-oldprice m-text7 p-r-5">
                                            $29.50
								</span>

                                        <span className="block2-newprice m-text8 p-r-5">
                                            $15.90
								</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

              {/* <!-- Banner2 --> */}
            <section className="banner2 bg5 p-t-55 p-b-55">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
                            <div className="hov-img-zoom pos-relative">
                                <img src="images/banner-08.jpg" alt="IMG-BANNER" />

                                <div className="ab-t-l sizefull flex-col-c-m p-l-15 p-r-15">
                                    <span className="m-text9 p-t-45 fs-20-sm">
                                        The Beauty
							</span>

                                    <h3 className="l-text1 fs-35-sm">
                                        Lookbook
							</h3>

                                    <a href="#" className="s-text4 hov2 p-t-20 ">
                                        View Collection
							</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
                            <div className="bgwhite hov-img-zoom pos-relative p-b-20per-ssm">
                                <img src="images/shop-item-09.jpg" alt="IMG-BANNER" />

                                <div className="ab-t-l sizefull flex-col-c-b p-l-15 p-r-15 p-b-20">
                                    <div className="t-center">
                                        <a href="product-detail.html" className="dis-block s-text3 p-b-5">
                                            Gafas sol Hawkers one
								</a>

                                        <span className="block2-oldprice m-text7 p-r-5">
                                            $29.50
								</span>

                                        <span className="block2-newprice m-text8">
                                            $15.90
								</span>
                                    </div>

                                    <div className="flex-c-m p-t-44 p-t-30-xl">
                                        <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                                            <span className="m-text10 p-b-1 days">
                                                69
									</span>

                                            <span className="s-text5">
                                                days
									</span>
                                        </div>

                                        <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                                            <span className="m-text10 p-b-1 hours">
                                                04
									</span>

                                            <span className="s-text5">
                                                hrs
									</span>
                                        </div>

                                        <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                                            <span className="m-text10 p-b-1 minutes">
                                                32
									</span>

                                            <span className="s-text5">
                                                mins
									</span>
                                        </div>

                                        <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                                            <span className="m-text10 p-b-1 seconds">
                                                05
									</span>

                                            <span className="s-text5">
                                                secs
									</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


              {/* <!-- Blog --> */}
            <section className="blog bgwhite p-t-94 p-b-65">
                <div className="container">
                    <div className="sec-title p-b-52">
                        <h3 className="m-text5 t-center">
                            Our Blog
				</h3>
                    </div>

                    <div className="row">
                        <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                            {/* <!-- Block3 --> */}
                            <div className="block3">
                                <a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
                                    <img src="images/blog-01.jpg" alt="IMG-BLOG" />
                                </a>

                                <div className="block3-txt p-t-14">
                                    <h4 className="p-b-7">
                                        <a href="blog-detail.html" className="m-text11">
                                            Black Friday Guide: Best Sales & Discount Codes
								</a>
                                    </h4>

                                    <span className="s-text6">By</span> <span className="s-text7">Nancy Ward</span>
                                    <span className="s-text6">on</span> <span className="s-text7">July 22, 2017</span>

                                    <p className="s-text8 p-t-16">
                                        Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames
							</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                            {/* <!-- Block3 --> */}
                            <div className="block3">
                                <a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
                                    <img src="images/blog-02.jpg" alt="IMG-BLOG" />
                                </a>

                                <div className="block3-txt p-t-14">
                                    <h4 className="p-b-7">
                                        <a href="blog-detail.html" className="m-text11">
                                            The White Sneakers Nearly Every Fashion Girls Own
								</a>
                                    </h4>

                                    <span className="s-text6">By</span> <span className="s-text7">Nancy Ward</span>
                                    <span className="s-text6">on</span> <span className="s-text7">July 18, 2017</span>

                                    <p className="s-text8 p-t-16">
                                        Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit ame
							</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                            {/* <!-- Block3 --> */}
                            <div className="block3">
                                <a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
                                    <img src="images/blog-03.jpg" alt="IMG-BLOG" />
                                </a>

                                <div className="block3-txt p-t-14">
                                    <h4 className="p-b-7">
                                        <a href="blog-detail.html" className="m-text11">
                                            New York SS 2018 Street Style: Annina Mislin
								</a>
                                    </h4>

                                    <span className="s-text6">By</span> <span className="s-text7">Nancy Ward</span>
                                    <span className="s-text6">on</span> <span className="s-text7">July 2, 2017</span>

                                    <p className="s-text8 p-t-16">
                                        Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel erat tincidunt, sed hendrerit ligula porttitor. Fusce sit amet maximus nunc
							</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

              {/* <!-- Instagram --> */}
            <section className="instagram p-t-20">
                <div className="sec-title p-b-52 p-l-15 p-r-15">
                    <h3 className="m-text5 t-center">
                        @ follow us on Instagram
			</h3>
                </div>

                <div className="flex-w">
                    {/* <!-- Block4 --> */}
                    <div className="block4 wrap-pic-w">
                        <img src="images/gallery-03.jpg" alt="IMG-INSTAGRAM" />

                        <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
                            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                                <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                                <span className="p-t-2">39</span>
                            </span>

                            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                                <p className="s-text10 m-b-15 h-size1 of-hidden">
                                    Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
						</p>

                                <span className="s-text9">
                                    Photo by @nancyward
						</span>
                            </div>
                        </a>
                    </div>

                    {/* <!-- Block4 --> */}
                    <div className="block4 wrap-pic-w">
                        <img src="images/gallery-07.jpg" alt="IMG-INSTAGRAM" />

                        <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
                            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                                <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                                <span className="p-t-2">39</span>
                            </span>

                            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                                <p className="s-text10 m-b-15 h-size1 of-hidden">
                                    Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
						</p>

                                <span className="s-text9">
                                    Photo by @nancyward
						</span>
                            </div>
                        </a>
                    </div>

                    {/* <!-- Block4 --> */}
                    <div className="block4 wrap-pic-w">
                        <img src="images/gallery-09.jpg" alt="IMG-INSTAGRAM" />

                        <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
                            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                                <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                                <span className="p-t-2">39</span>
                            </span>

                            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                                <p className="s-text10 m-b-15 h-size1 of-hidden">
                                    Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
						</p>

                                <span className="s-text9">
                                    Photo by @nancyward
						</span>
                            </div>
                        </a>
                    </div>

                    {/* <!-- Block4 --> */}
                    <div className="block4 wrap-pic-w">
                        <img src="images/gallery-13.jpg" alt="IMG-INSTAGRAM" />

                        <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
                            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                                <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                                <span className="p-t-2">39</span>
                            </span>

                            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                                <p className="s-text10 m-b-15 h-size1 of-hidden">
                                    Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
						</p>

                                <span className="s-text9">
                                    Photo by @nancyward
						</span>
                            </div>
                        </a>
                    </div>

                    {/* <!-- Block4 --> */}
                    <div className="block4 wrap-pic-w">
                        <img src="images/gallery-15.jpg" alt="IMG-INSTAGRAM" />

                        <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
                            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                                <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                                <span className="p-t-2">39</span>
                            </span>

                            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                                <p className="s-text10 m-b-15 h-size1 of-hidden">
                                    Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
						</p>

                                <span className="s-text9">
                                    Photo by @nancyward
						</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

              {/* <!-- Shipping --> */}
            <section className="shipping bgwhite p-t-62 p-b-46">
                <div className="flex-w p-l-15 p-r-15">
                    <div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
                        <h4 className="m-text12 t-center">
                            Free Delivery Worldwide
				</h4>

                        <a href="#" className="s-text11 t-center">
                            Click here for more info
				</a>
                    </div>

                    <div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 bo2 respon2">
                        <h4 className="m-text12 t-center">
                            30 Days Return
				</h4>

                        <span className="s-text11 t-center">
                            Simply return it within 30 days for an exchange.
				</span>
                    </div>

                    <div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
                        <h4 className="m-text12 t-center">
                            Store Opening
				</h4>

                        <span className="s-text11 t-center">
                            Shop open from Monday to Sunday
				</span>
                    </div>
                </div>
            </section>


              {/* <!-- Footer --> */}
            <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
                <div className="flex-w p-b-90">
                    <div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
                        <h4 className="s-text12 p-b-30">
                            GET IN TOUCH
				</h4>

                        <div>
                            <p className="s-text7 w-size27">
                                Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
					</p>

                            <div className="flex-m p-t-30">
                                <a href="#" className="fs-18 color1 p-r-20 fa fa-facebook"></a>
                                <a href="#" className="fs-18 color1 p-r-20 fa fa-instagram"></a>
                                <a href="#" className="fs-18 color1 p-r-20 fa fa-pinterest-p"></a>
                                <a href="#" className="fs-18 color1 p-r-20 fa fa-snapchat-ghost"></a>
                                <a href="#" className="fs-18 color1 p-r-20 fa fa-youtube-play"></a>
                            </div>
                        </div>
                    </div>

                    <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
                        <h4 className="s-text12 p-b-30">
                            Categories
				</h4>

                        <ul>
                            <li className="p-b-9">
                                <a href="#" className="s-text7">
                                    Men
						</a>
                            </li>

                            <li className="p-b-9">
                                <a href="#" className="s-text7">
                                    Women
						</a>
                            </li>

                            <li className="p-b-9">
                                <a href="#" className="s-text7">
                                    Dresses
						</a>
                            </li>

                            <li className="p-b-9">
                                <a href="#" className="s-text7">
                                    Sunglasses
						</a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
                        <h4 className="s-text12 p-b-30">
                            Links
				</h4>

                        <ul>
                            <li className="p-b-9">
                                <a href="#" className="s-text7">
                                    Search
						</a>
                            </li>

                            <li className="p-b-9">
                                <a href="#" className="s-text7">
                                    About Us
						</a>
                            </li>

                            <li className="p-b-9">
                                <a href="#" className="s-text7">
                                    Contact Us
						</a>
                            </li>

                            <li className="p-b-9">
                                <a href="#" className="s-text7">
                                    Returns
						</a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
                        <h4 className="s-text12 p-b-30">
                            Help
				</h4>

                        <ul>
                            <li className="p-b-9">
                                <a href="#" className="s-text7">
                                    Track Order
						</a>
                            </li>

                            <li className="p-b-9">
                                <a href="#" className="s-text7">
                                    Returns
						</a>
                            </li>

                            <li className="p-b-9">
                                <a href="#" className="s-text7">
                                    Shipping
						</a>
                            </li>

                            <li className="p-b-9">
                                <a href="#" className="s-text7">
                                    FAQs
						</a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-size8 p-t-30 p-l-15 p-r-15 respon3">
                        <h4 className="s-text12 p-b-30">
                            Newsletter
				</h4>

                        <form>
                            <div className="effect1 w-size9">
                                <input className="s-text7 bg6 w-full p-b-5" type="text" name="email" placeholder="email@example.com" />
                                <span className="effect1-line"></span>
                            </div>

                            <div className="w-size2 p-t-20">
                                {/* <!-- Button --> */}
                                <button className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                                    Subscribe
						</button>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="t-center p-l-15 p-r-15">
                    <a href="#">
                        <img className="h-size2" src="images/icons/paypal.png" alt="IMG-PAYPAL" />
                    </a>

                    <a href="#">
                        <img className="h-size2" src="images/icons/visa.png" alt="IMG-VISA" />
                    </a>

                    <a href="#">
                        <img className="h-size2" src="images/icons/mastercard.png" alt="IMG-MASTERCARD" />
                    </a>

                    <a href="#">
                        <img className="h-size2" src="images/icons/express.png" alt="IMG-EXPRESS" />
                    </a>

                    <a href="#">
                        <img className="h-size2" src="images/icons/discover.png" alt="IMG-DISCOVER" />
                    </a>

                    <div className="t-center s-text8 p-t-20">
                        Copyright © 2018 All rights reserved. | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https: colorlib.com" target="_blank">Colorlib</a>
                    </div>
                </div>
            </footer>



            {/* <!-- Back to top --> */}
            <div className="btn-back-to-top bg0-hov" id="myBtn">
                <span className="symbol-btn-back-to-top">
                    <i className="fa fa-angle-double-up" aria-hidden="true"></i>
                </span>
            </div>

            {/* <!-- Container Selection1 --> */}
            <div id="dropDownSelect1"></div>




            </div >
        )
    }
}

export default formatfashe