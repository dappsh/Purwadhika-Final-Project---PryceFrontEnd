import React, {Component} from 'react';
// import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer';
// import Carousel from '../../components/Carousel/carousel';
import Product from '../../components/Product/product'



class home extends Component{
    render(){
        console.log('Home');
        return(
            <div>
                {/* <Header /> */}
                <Product/>
                <Footer/>
            </div>


        )
    }

}

export default home