import React, { Component } from 'react'


class footer extends Component {

    render() {
        return (
            <div className="App">

                {/* <!-- ****** Footer Area Start ****** --> */}
                {/* <footer className="footer_area"> */}
                    <div className="container">
         
                        <div className="line"></div>

                        {/* <!-- Footer Bottom Area Start --> */}
                        <div className="footer_bottom_area">
                            <div className="row">
                                <div className="col-12">
                                    <div className="footer_social_area text-center">
                                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                        <i cla ssName="fa fa-twitter" aria-hidden="true"></i>
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </footer> */}
                {/* <!-- ****** Footer Area End ****** --> */}
            </div>
        );
    }

}

export default footer;