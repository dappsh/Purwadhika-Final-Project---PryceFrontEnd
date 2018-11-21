import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../node_modules/axios';
import { connect } from 'react-redux';  //redux
// import { storeInvoice } from '../../action'; //function redux 
import * as moment from 'moment';
import { withRouter } from 'react-router';
import { apiHost } from './../../config';


class invoice extends Component {
  constructor(props) {
    super(props)
    this.state = {

      dataInvoice: [],
      detailInv: [],

    }
  }

  componentDidMount() {
    this.getDataInvoice()
  }

  getDataInvoice = () => {
    var url = `${apiHost}/historyInvoice/${this.props.user.userid}`
    axios.get(url).then((inv) => {
      console.log(inv.data)
      this.setState({
        dataInvoice: inv.data
      })

    })
  }

  getDetailInvoice(kodeinvoice) {
    var url = `${apiHost}/getinvoicedetail/${kodeinvoice}`;
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


  rupiah = (a) => {
    var bilangan = a;
    var reverse = bilangan.toString().split('').reverse().join(''),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    var a = 'Rp ' + ribuan
    return a
  }

  render() {

    console.log(this.state.dataInvoice)

    return (
      <div>

        {/* <div className="cart_area section_padding_100 clearfix"> */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>INVOICE</h4>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">DATE</th>
                    <th scope="col">INV CODE</th>
                    <th scope="col">SHIP TO</th>
                    <th scope="col">ADDRESS</th>
                    <th scope="col">GRAND TOTAL</th>

                  </tr>
                </thead>
                <tbody>

                  {/* =============== MAPPING DATA ===================== */}
                  {this.state.dataInvoice.map((data, key) => {
                    console.log('datainvoice map : ', data);
                    return (
                      <tr key={key}>
                        <td>{moment(data.time).format('DD-MM-YYYY')}</td>
                        <td onClick={() => this.getDetailInvoice(data.invcode)}>{data.invcode}</td>

                        <td>{data.shipto}</td>
                        <td>{data.address}</td>
                        <td>{this.rupiah(data.total)}</td>
                      </tr>
                    )
                  }
                  )
                  }
                </tbody>
              </table>

              <Link to='/'>
                <span className="btn karl-checkout-btn w" style={{ color: 'white' }}>Continue Shopping</span>
              </Link>
           
            </div>
          </div>
        </div>
      </div>

      // </div>


    )
  }
}

const mapStateToProps = (state) => {
  const user = state.user
  // const inv = state.invoiceRed
  // function reduxnya userLogin
  return { user }
};

export default withRouter(connect(mapStateToProps, {})(invoice));

