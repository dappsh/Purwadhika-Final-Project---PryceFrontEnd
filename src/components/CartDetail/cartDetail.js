import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../node_modules/axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { apiHost } from './../../config';
import Header from '../Header/header';
import Footer from '../Footer/footer'


class cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataCart: [],
            ada: 0
        }
    }

    componentDidMount() {
        this.Carts()
    }

    Carts() {
        var url = `${apiHost}/getItemCart/${this.props.user.userid}`;
        axios.get(url).then((a) => {
            console.log('getCarts', a.data)
            console.log('aaaaaaaaaaaaaaaaaaaaaa', a)
            this.setState({
                dataCart: a.data,
                ada: a.data
            })
            console.log('id user masuk cart : ', this.props.user.userid)
        })
    }


    deleteCart(id) {
        var url = `${apiHost}/getCartDelete`
        axios.post(url, {
            idcart: id

        })
            .then((respon) => {
                this.Carts()
            })
    }

    minusQtyCart(idx, jumlahx) {
        if (jumlahx > 1) {
            var jumlah = jumlahx - 1
            var url = `${apiHost}/getCartMinus`
            axios.post(url, {
                idcart: idx,
                productqty: jumlah,
            })
                .then(() => {
                    this.Carts()
                })
        }
    }

    plusQtyCart(idx, jumlahx) {

        var jumlah = jumlahx + 1
        var url = `${apiHost}/getCartPlus`
        axios.post(url, {
            idcart: idx,
            productqty: jumlah,
        })
            .then(() => {
                this.Carts()
            })
    }

    rupiah = (a) => {
        var bilangan = a;
        var reverse = bilangan.toString().split('').reverse().join(''),
            ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        var a = 'Rp ' + ribuan 
        return a
    }



    render() {

        if (this.state.ada == 0) {
            return (
                <div>
                    <Header />
                     {/* <!-- ****** Cart Area Start ****** --> */}
                <div className="cart_area section_padding_100 clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="cart-table clearfix">
                                <h2>Your cart is empty, get your cutest mug now!</h2>
                                </div>

                                <div className="cart-footer d-flex mt-30 justify-content-between">
                                    <div className="back-to-shop w-50">
                                        <Link to='/product'>Continue shooping</Link>
                                    </div>
                                    {/* <div className="w-25 text-right">
                                        <Link to="/product"><span style={{ color: 'white' }} className="btn karl-checkout-btn">Continue Shopping</span></Link>
                                    </div> */}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                    <Footer />
                </div>
            )

        }

        const mapingCart = this.state.dataCart.map((data, key) => {

            var idcart = data.idcart;
            var productName = data.productname;
            var productQty = data.productqty;
            var price = data.price;
            var productImage = data.productimage;
            var subtotal = productQty * price;


            // console.log(`ini data Cart : `, data)
            console.log('data', 'idcart : ', idcart, 'nama produk : ', productName, 'jumlah : ', productQty, 'harga : ', price, 'link imagae : ', productImage)

            // START RETURN




            return (
                <tr>
                    <td key={key} className="cart_product_img d-flex align-items-center">
                        <a ><img src={productImage} alt="Product" /></a>
                        <h6>{productName}</h6>
                    </td>
                    <td className="price"><span>{this.rupiah(price)}</span></td>
                    <td className="qty">
                        <div className="quantity">
                            <i className="fa fa-minus" aria-hidden="true" onClick={() => { this.minusQtyCart(idcart, productQty) }}></i>
                            <input type="number" className="qty-text" name="quantity" value={productQty} />
                            <i className="fa fa-plus" onClick={() => { this.plusQtyCart(idcart, productQty) }}></i>
                        </div>
                    </td>
                    <td className="total_price"><button className="btn btn-outline-danger" onClick={() => { this.deleteCart(idcart) }}><i className="fa fa-trash-o" aria-hidden="true"></i></button></td>
                    <td className="price"><span>{this.rupiah(subtotal)}</span></td>
                </tr>

            )
            // END RETURN

        })


        return (
            <div>

                {/* <!-- ****** Cart Area Start ****** --> */}
                <div className="cart_area section_padding_100 clearfix ">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="cart-table clearfix">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Delete</th>
                                                <th>Sub Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>


                                            {/* MAPING HERE  */}
                                            {mapingCart}

                                        </tbody>
                                    </table>
                                </div>

                                <div className="cart-footer d-flex mt-30 justify-content-between">
                                    <div className="back-to-shop w-50">
                                        <Link to='/product'>Continue shooping</Link>
                                    </div>
                                    <div className="w-25 text-right">
                                        <Link to="/checkout"><span style={{ color: 'white' }} className="btn karl-checkout-btn">Proceed to checkout</span></Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                {console.log('test id usersssssssssssssssssss', this.props.user.userid)}
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    // function reduxnya  storeProduct
    // const productDetail = state.productDetail;
    const user = state.user
    // function reduxnya userLogin
    return { user }
};

export default withRouter(connect(mapStateToProps, {})(cart));

