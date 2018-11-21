import React, { Component } from 'react';
import axios from 'axios';
// import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';  //redux
// import { storeProduct } from '../../action'; //function redux 
import { withRouter } from 'react-router';
import { apiHost } from './../../config';
import Header from '../Header/header';
import swal from 'sweetalert';
// import Cookies from 'js-cookie';





class product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: [], //diisi dengan data dari maping table product
            dataModal: {}, //diisi dengan data pada maping product, untuk dapat dipanggil di modal
            qty: 1,
            // search: '',
            user: this.props.user

        }
    }

    componentDidMount() {

        this.showAllProduct()
    }

    // userChecking = () => {
    //     const getCookies = Cookies.get('idUserLogin')
    //     if(!getCookies){
    //         this.props.history.push('/userLogin')
    //     }
    // }
    // show all product
    showAllProduct = () => {
        var url = `${apiHost}/product`;

        var a = axios.get(url);
        a.then((x) => {
            console.log('PRODUCT === DATA YANG DIKIRIMR RES SEND SHOW ALL PRODUCT', x.data)
            // x.data > data ini adalah respon yang disediakan oleh server
            this.setState({
                product: x.data
            })
            // this.props.storeProduct(x.data);

        })
    }
    // show catagories cats
    showCatagoryCats = () => {
        var url = `${apiHost}/product/category/cats`;
        axios.get(url).then((x) => {
            console.log(x.data);
            this.setState({
                product: x.data

            })
        })
    }

    // show cattagores words
    showCatagoryWords = () => {
        var url = `${apiHost}/product/category/words`;
        axios.get(url).then((x) => {
            console.log(x.data);
            this.setState({
                product: x.data

            })
        })
    }

    // VIEW FULL PRODUCT, STORE DATA PRODUCT KE REDUX
    addQty = () => {
        console.log('add')
        this.setState({
            qty: this.state.qty + 1
        })
    }
    minQty = () => {
        if (this.state.qty > 0) {
            this.setState({
                qty: this.state.qty - 1

            })

        }
    }

    addToCart = () => {
        // console.log('dataModal add Tocart', this.state.dataModal);
        if (!this.props.user) {
            swal('Please login before shopping')
            this.props.history.push('/userLogin');
        } else {
            // data yang dikirim sebagai req body
            var url = `${apiHost}/addToCart`;
            axios.post(url, {
                productqty: this.state.qty,
                userid: this.props.user.userid,
                status: "ok",
                productid: this.state.dataModal.productid
            })
                .then((respon) => {
                    swal("Add to cart", "product successfully added to your cart!", "success");
                    // console.log('respon data addToCart', respon.data)
                    console.log('product masuk ke Cart dengan user id', this.props.user.userid)
                    this.setState({ qty: 1 })
                })

            // console.log('test user', this.props.user.userid)
        }

    }  

    rupiah = (a) => {
        var bilangan = a;
        var reverse = bilangan.toString().split('').reverse().join(''),
            ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        var a = 'Rp ' + ribuan 
        return a
    }


    // searchthis() {
    //     var url = `http://localhost:3210/search/${this.state.search}`;
    //     axios.get(url).then((x) => {
    //     //  console.log(x.data)
    //       this.setState({
    //         dataBackend: x.data,
    //       })
    //     })
    //   }

    render() {
        const { dataModal, qty } = this.state;
        // console.log('data product redux', this.props.productDetail);
        console.log('PRODUCT === THIS PROPS USER ===', this.props.user)

        return (


            <div style={{ backgroundImage: 'url(img/product/14710.jpg' }}>
                <Header />

                {/* <!-- MATERI JUMBOTRON --> */}
                <div className="jumbotron" style={{ height: '57px', textAlign: 'center', backgroundColor: "#f5d568", padding: "7px" }}>
                    <div className="container">
                        <h2><span style={{ color: "#ffffff" }}>{this.props.greet}</span></h2>

                        {/* <form className="navbar-form" role="search"> */}
                        {/* <div className="input-group w-25">
                            <input type="text" className="form-control" placeholder="Search"  onChange={(nilai) => this.setState({ search: nilai.target.value } ref="search" />
                            <div className="input-group-btn">
                                <button className="btn btn-outline-info" type="submit" onClick={() => this.searchthis()><i className="fa fa-search"></i></button>
                            </div>
                        </div> */}
                        {/* </form> */}

                    </div>
                </div>

                <div className="karl-projects-menu">
                    <div className="text-center portfolio-menu">
                        <h1 style={{ color: '#000000' }} >OUR PRODUCTS</h1>
                    </div>
                </div>


                {/* <!-- ****** Quick View Modal Area Start ****** --> */}

                {console.log('ini isi dataModal', dataModal)}

                <div className="modal fade" id="quickview" tabIndex="-1" role="dialog" aria-labelledby="quickview" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <div className="modal-body">
                                <div className="quickview_body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 col-lg-5">
                                                <div className="quickview_pro_img">
                                                    <img src={dataModal.productimage} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-7">
                                                <div className="quickview_pro_des">
                                                    <h4 className="title">{dataModal.productname}</h4>

                                                    {/* <h5 className="price">Rp{dataModal.price}</h5> */}
                                                    <p>{dataModal.description}</p>
                                                    <p>Available Stock : {dataModal.stock}</p>
                                                    {/* <button type="button" className="btn btn-outline-info" onClick={() => this.storeProductToRedux()}>View Full Product Details</button> */}
                                                </div>
                                                {/* <!-- Add to Cart Form --> */}
                                                {/* <form className="cart" method="post"> */}
                                                <div className="quantity">
                                                    <button className="qty-minus"><i className="fa fa-minus" aria-hidden="true" onClick={() => this.minQty()}></i></button>
                                                    {/* onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false; */}

                                                    <input type="number" className="qty-text" id="qty" name="quantity" value={qty} onChange={(e) => this.setState({ qty: e.target.value })} />

                                                    <button className="qty-plus" ><i className="fa fa-plus" aria-hidden="true" onClick={() => this.addQty()}></i></button>

                                                    <button type="submit" className="cart-submit" onClick={() => { this.addToCart() }}>Add to cart</button>
                                                </div>

                                                {/* </form> */}

                                                <div className="share_wf mt-30">

                                                    <a  ><img src="img/product/logofull.png" alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="shop_grid_area" style={{ padding: '20px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-3"  >
                                <div className="shop_sidebar_area">

                                    <div className="widget catagory mb-50">
                                        {/* <!--  Side Nav  --> */}
                                        <div className="nav-side-menu" >
                                            <h6 className="mb-0">Catagories</h6>
                                            <div className="menu-list">
                                                <ul id="menu-content2" className="menu-content collapse out">
                                                    {/* <!-- Single Item --> */}
                                                    <li onClick={() => { this.showAllProduct() }} >
                                                        <a>ALL MUGS</a>
                                                    </li>
                                                    <li onClick={() => this.showCatagoryCats()}>
                                                        <a>CATS MUG</a>
                                                    </li>
                                                    <li onClick={() => { this.showCatagoryWords() }} >
                                                        <a>WORDS MUG</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 col-md-8 col-lg-9">
                                <div className="shop_grid_product_area">
                                    <div className="row">
                                        {console.log('haloooooo')}

                                        {/* mapping product */}

                                        {this.state.product.map((data, key) => {
                                            // Cetak hasil
                                        

                                            return (
                                                <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.2s" key={key}>
                                                    {/* <!-- Product Image --> */}
                                                    <div className="product-img">
                                                        <img src={data.productimage} alt="" />
                                                        <div className="product-quicview">
                                                            <a data-toggle="modal" onClick={() => this.setState({ dataModal: data })} data-target="#quickview"><i className="ti-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Product Description --> */}
                                                    <div className="product-description">
                                                        <h4 className="product-price" style={{ color: "#000000" }}> {
                                                            this.rupiah(data.price)}</h4>
                                                        <p style={{ color: "#000000" }}>{data.productname}</p>

                                                    </div>
                                                </div>
                                            )
                                        })
                                        }





                                    </div>
                                </div>

                                {/* <div className="shop_pagination_area wow fadeInUp" data-wow-delay="1.1s">
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-sm">
                                    <li className="page-item active"><a className="page-link"  >01</a></li>
                                    <li className="page-item"><a className="page-link"  >02</a></li>
                                    <li className="page-item"><a className="page-link"  >03</a></li>
                                </ul>
                            </nav>

                            
                        </div> */}

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // const productDetail = state.productDetail;
    const user = state.user
    const greet = state.greetRed
    return { user, greet }
};

export default withRouter(connect(mapStateToProps)(product));
