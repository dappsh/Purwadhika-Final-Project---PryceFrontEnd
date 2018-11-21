import React, { Component } from 'react';
import './signUp.css';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { apiHost } from './../../config';



class register extends Component {
    // create component state
    constructor(){
        // run super
        super();
        this.state = {
            username : '',
            email: '',
            password:'',
            fullname:''
        }
        
        this.onChange = this.onChange.bind(this)
        // atau bisa langsung inline pada onChange ={this.onChange.bind(this)}

    }
   

    // mengambil nilai berdasarkan name, setelah ini bind this pada this.setState
    // jika tidak di bind this tidak di kenali
    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    // Function klik singUp, posting dan redirect ke halaman login
    KlikSignUp(){
        // posting user baru
        // membuat object dengan nama newUser
        const newUser = {
            fullname:this.state.fullname,
            username : this.state.username,
            email : this.state.email,
            password : this.state.password,
        }
        // objek bisa langsung di posti pada parameter newUSer
        var url = `${apiHost}/SignUp`
        //url ini adalah server yang mau kita pake untuk request
        // newUser ini adalah data yang akan kita kirim sebagai reqeust body\   // then ini adalah methodnya si promise yang mana dia menghandle success 
        // pada saat kita gunakan then ini, respon yang akan kita terima adalah object
        // dengan response schema berikut {data: berisi objek yang dikirim res send
        //  status: http code, statusText : ok, headers: {}, config: {}, request: {}
        // kalau catct ini method dari promise juga dia untuk handle error
        axios.post(`${apiHost}/SignUp`, newUser)
            .then((res) => {console.log('SIGN UP = RES DATA POST ',res.data)
            })
            .catch((err)=>{console.log(err)})
            // swal('You have successfully created your accou created');
            swal({
                title: "YAY!",
                text: "You have successfully created your account!",
                icon: "success",
              })
            this.props.history.push('/userLogin');
        }
    
    render() {
        return (
            <div>
                  <div id='signUpForm' >
                    <div className='container'>
                        {/* <h1 className='form-heading'>signUp Form</h1> */}
                        <div className='signUp-form'>
                            <div className='main-div' style={{backgroundImage: 'url(img/product/14710.jpg'}}>
                                <div className='panel'>
                                    <h1>Sign-Up</h1>
                                    {/* <p>Please enter your email and password</p> */}
                                </div>
                                <form id='signUp'>
                                 {/* name user */}
                                 <div className='form-group'>
                                        <input 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='Full Name'
                                        name='fullname'
                                        value={this.state.fullname}
                                        onChange={this.onChange}
                                        />
                                    </div>

                                {/* name user */}
                                    <div className='form-group'>
                                        <input 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='Username'
                                        name='username'
                                        value={this.state.username}
                                        onChange={this.onChange}
                                        />
                                    </div>

                                {/* email user */}
                                    <div className='form-group'>
                                        <input 
                                         type='email'
                                         className='form-control'
                                         placeholder='Email Address' 
                                         name='email'
                                         value={this.state.email}
                                         onChange={this.onChange}
                                         />
                                    </div>
                                {/* password user */}
                                    <div className='form-group'>
                                        <input 
                                         type='password'
                                         className='form-control'
                                         placeholder='Password' 
                                         name='password'
                                         value={this.state.password}
                                         onChange={this.onChange}
                                         />
                                    </div>

                                        {/* <div className='form-group'>
                                        <input 
                                         type='password'
                                         className='form-control'
                                         placeholder='Confirm Password'
                                         name='password2' 
                                         value={this.state.password2}
                                         onChange={this.onChange}
                                         />
                                    </div>
                                 */}
                                

                                    {/* menjalankan function signUp */}
                                    <button type='button' 
                                    className='btn btn-info' 
                                    onClick={()=>{this.KlikSignUp()}}>
                                    Sign Up</button>

                                    <div className="forgot">
                                    <Link to='/userLogin'><p> Log-in Here</p></Link>
                                    </div>
                                </form>
                            </div>
                            
                        </div></div>

                </div>
            </div>
        );
    }

}

export default register;

// saat input diberikan value  state, input tidak bisa di ketik, maka diberikan function onchange