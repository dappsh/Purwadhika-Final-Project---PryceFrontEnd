import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { connect } from 'react-redux';
// import Cookies from 'js-cookie';

import { userLogin } from '../../action'; //import nama functioan yang di buat di index.js pada reducers
import { greeting } from '../../action'; //import nama functioan yang di buat di index.js pada reducers
import { apiHost } from './../../config';

class login extends Component {

    componentDidMount() {
        const { user } = this.props; // user = this.props.user
        if (user) {
            //history.push navigate react router dengan withRouter
            //untuk mengarahkan user ke halamn lain
            this.props.history.push('/');   // ke halaman home
        }
        // this.userChecking();
    };

    // userChecking = () => {
    //     const getCookies = Cookies.get('idUserLogin'); // => { name: 'value' }
    //     console.log('getCookies login', getCookies)
    //     if (getCookies) {
    //         // this.props.history.push('/');
    //     }
    //     console.log('get cookies ===============', getCookies)
    // }

    login = (e) => {

        const url = `${apiHost}/login`;
        if (e.username.value === '') {
            alert('Username cant be blank')
        } else if (e.password.value === '') {
            alert('Password cant be blank')
        } else {

            axios.post(url, {
                username: e.username.value,
                password: e.password.value
            })
                .then((respon) => {
                    if (respon.data.length > 0) {
                        const data = respon.data[0];
                        console.log('LOGIN === CONSOLE respon', respon); // output berupa object
                        console.log('LOGIN === CONSOLE respon.data : ', respon.data);
                        // output array {userid: 1, username: "admin", password: "admin", email: "admin@admin.com", fullname: "Ajeng"}
                        // dengan length 1
                        console.log('LOGIN === CONSOLE data respon data length : ', respon.data.length);
                        console.log('LOGIN === CONSOLE user id', data.userid);
                        this.props.userLogin(data);  //store ke redux userLogin
                        // Cookies.set('idUserLogin', respon.data[0].userid, { expires: 1 })
                        this.props.history.push('/'); //ke halaman home 
                        var nama = data.fullname; //get fullname dari data
                        console.log(nama);
                        var welcome = `Happy shopping ${nama}`
                        this.props.greeting(welcome) //store ke redux greeting dengan welcome

                    } else {
                        alert('gagal masuk');
                    }
                })
                .catch((err) => { console.log(err) })
        }
    };

    // componentDidUpdate() {
    //     console.log('propsd id Update', this.props)
    // };
    // OBJECT 


    render() {
        console.log('props login', this.props);
        return (
            <div id="LoginForm" >
                <div className="container" >
                    {/* <h1 className="form-heading">login Form</h1> */}
                    <div className="login-form" >
                        <div className="main-div" style={{ backgroundImage: 'url(img/product/14710.jpg' }}>
                            <div className="panel" >
                                <h1>Log-in</h1>
                                <p>Please enter your email and password</p>
                            </div>
                            {/* <form id="Login"> */}

                            <div className="form-group">
                                <input type="email" className="form-control" ref="username" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" ref="password" placeholder="Password" />
                            </div>
                            <div className="forgot">
                                <Link to='/userRegister'>Sign Up Here</Link>
                            </div>
                            <button type="submit" onClick={() => { this.login(this.refs) }} className="btn btn-info">Login</button>

                            {/* </form> */}
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}
const mapStateToProps = (state) => {
    const user = state.user;
    return { user }
};

export default connect(mapStateToProps, { userLogin, greeting })(login);

// export default login;