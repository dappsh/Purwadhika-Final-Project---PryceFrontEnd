import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from '../../../node_modules/axios';
import { withRouter } from 'react-router';
// import { storeInvoice } from '../../action'; //function redux 
import { connect } from 'react-redux';  //redux
import { apiHost } from './../../config';
import { Link } from 'react-router-dom';
import * as moment from 'moment';

class invoiceDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {

            detailInv: []

        }
    }

    componentDidMount() {
        this.getDetailInvoice()
    }


    rupiah = (a) => {
        var bilangan = a;
        var reverse = bilangan.toString().split('').reverse().join(''),
            ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        var a = 'Rp ' + ribuan 
        return a
    }

 
    getDetailInvoice() {
        var url = `${apiHost}/getinvoicedetail/${this.props.inv.insertInvoice[0].invcode}`;
        axios.get(url).then((a) => {
            console.log('INVOICE ===== GET INVOICE DATA', a.data)
            this.setState({
                detailInv: a.data
                // length: a.data
            })
            console.log('INVOICE ==== KODE INVOICE FROM REDUX : ', this.props.inv)
            console.log('INVOICE ==== DETAIL INVOICE : ', this.state.detailInv)
        })
    }



    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="row p-5">
                                    <div className="col-md-6">
                                        <img src="img/product/logofull.png" alt="Pryce" />
                                    </div>

                                    <div className="col-md-6 text-right">
                                        <p className="font-weight-bold mb-1">INVOICE : {this.props.inv.insertInvoice[0].invcode}</p>
                                        <p className="text-muted"> {moment(this.props.inv.insertInvoice[0].time).format('DD-MM-YYYY')}</p>
                                    </div>
                                </div>

                                <hr className="my-5" />

                                <div className="row pb-5 p-5">
                                    <div className="col-md-6">
                                        <p className="font-weight-bold mb-4">Customer Information</p>
                                        <p className="mb-1">Ship to : {this.props.inv.insertInvoice[0].shipto}</p>
                                        <p className="mb-1">Address : {this.props.inv.insertInvoice[0].address}</p>
                                        <p className="mb-1">Contact : {this.props.inv.insertInvoice[0].phone}</p>
                                    </div>

                                    {/* <div className="col-md-6 text-right">
                                        <p className="font-weight-bold mb-4">Payment Details</p>
                                        <p className="mb-1"><span className="text-muted">VAT: </span> 1425782</p>
                                        <p className="mb-1"><span className="text-muted">VAT ID: </span> 10253642</p>
                                        <p className="mb-1"><span className="text-muted">Payment Type: </span> Root</p>
                                        <p className="mb-1"><span className="text-muted">Name: </span> John Doe</p>
                                    </div> */}
                                </div>

                                <div className="row p-5">
                                    <div className="col-md-12">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="border-0 text-uppercase small font-weight-bold">No.</th>
                                                    <th className="border-0 text-uppercase small font-weight-bold">Product</th>
                                                    <th className="border-0 text-uppercase small font-weight-bold">Price</th>
                                                    <th className="border-0 text-uppercase small font-weight-bold">Quantity</th>
                                                    <th className="border-0 text-uppercase small font-weight-bold">Sub Total</th>
                                                    {/* <th className="border-0 text-uppercase small font-weight-bold">Total</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {this.state.detailInv.map((data, key) => {
                                                    console.log('INVOICE === DATA MAP DETAIL INV', data)
                                                    return (
                                                        <tr key={key}>
                                                            <td>{key + 1}</td>
                                                            <td>{data.productname}</td>
                                                            <td>{this.rupiah(data.price)}</td>
                                                            <td>{this.rupiah(data.productqty*data.price)}</td>
                                                            <td>{data.productqty}</td>
                                                        </tr>
                                                    )
                                                }
                                                )}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="d-flex flex-row-reverse bg-dark text-white p-4">
                                    <div className="py-3 px-5 text-right">
                                        <div className="mb-2">Grand Total</div>
                                        <div className="h2 font-weight-light">{this.rupiah(this.props.inv.getTotal)}</div>
                                    </div>

                                    {/* <div className="py-3 px-5 text-right">
                                        <div className="mb-2">Discount</div>
                                        <div className="h2 font-weight-light">10%</div>
                                    </div> */}

                                    {/* <div className="py-3 px-5 text-right">
                                        <div className="mb-2">Sub - Total amount</div>
                                        <div className="h2 font-weight-light">$32,432</div>
                                    </div> */}
                                </div>

                                 <Link to='/'> 
                                       <span className="btn karl-checkout-btn w" style={{color:'white'}}>Continue Shopping</span>
                                </Link>
                                <p></p>
                                <Link to='/invoice'>
                                    <span className="btn karl-checkout-btn w" style={{ color: 'black' }}>Check History Invoice</span>
                                  </Link>

                            </div>
                        </div>
                    </div>
                </div>
             </div>



        )
    }
}
const mapStateToProps = (state) => {
    const user = state.user
    const inv = state.invoiceRed
    // function reduxnya userLogin
    return { user, inv }
};

export default withRouter(connect(mapStateToProps, {})(invoiceDetail));
