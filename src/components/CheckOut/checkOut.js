import React, { Component } from 'react';
import { apiHost } from './../../config';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { storeInvoice } from '../../action';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

import axios from 'axios';


class checkOut extends Component {

    constructor(props) {
        super(props)
        this.state = {
            idCart: '',
            shipto: '',
            address: '',
            phone: '',

        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    // saat checkout, post data invoice
    postInvoice = () => {
        var url = `${apiHost}/getInvoice`
        axios.post(url, {
            userid: this.props.user.userid,
            shipto: this.state.shipto,
            address: this.state.address,
            phone: this.state.phone
        })
            .then((respon) => {
                console.log('res data post invoice ===== ', respon, respon.data)
                console.log('ini respon code invoice', respon.data)
                console.log('user id masuk atau engga', this.props.user.userid)
                this.props.storeInvoice(respon.data)
                swal("DONE!", "thank you for trusing our product", "success");
                this.props.history.push('/invoiceDetail')
            }
            )
    }



    render() {



        return (

            <div>
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-12">
                            <div className="checkout_details_area mt-50 clearfix">

                                <div className="cart-page-heading">
                                    <h5>Checkout</h5>
                                </div>

                                <form id="shipping">
                                    <div className="row">

                                        <div className="col-12 mb-12">
                                            <label >Name / Ship To <span>*</span></label>
                                            <input type="text" name='shipto' className="form-control mb-3" value={this.state.shipto}
                                                onChange={this.onChange} />
                                        </div>

                                        <div className="col-12 mb-3">
                                            <label >Address <span>*</span></label>
                                            <input type="text" name='address' className="form-control" value={this.state.address}
                                                onChange={this.onChange} />
                                        </div>

                                        <div className="col-12 mb-3">
                                            <label >Phone <span>*</span></label>
                                            <input type="text" name='phone' className="form-control" value={this.state.phone}
                                                onChange={this.onChange} />
                                        </div>


                                        <div className="col-12 mb-3">
                                            <span className="btn karl-checkout-btn w" style={{ color: 'white' }} onClick={() => this.postInvoice()}>Place Order</span>
                                            <p></p>
                                            <Link to='/cart'>
                                                <span className="btn karl-checkout-btn w" style={{ color: 'white' }}>Back To Cart</span>
                                            </Link>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        );
    }
}

const mapStateToProps = (state) => {
    const user = state.user
    return { user }
};

export default withRouter((connect(mapStateToProps, { storeInvoice })(checkOut)));

