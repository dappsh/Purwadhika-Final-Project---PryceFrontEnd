
import React, { Component } from 'react';



class productCarousel extends Component {
    render() {
        return (

  
           <section class="top_catagory_area d-md-flex clearfix">
           {/* <!-- Single Catagory --> */}
           <div class="single_catagory_area d-flex align-items-center bg-img" style={{backgroundImage: 'url(img/bg-img/bg-2.jpg)'}}>
               <div class="catagory-content">
                   <h6>On Accesories</h6>
                   <h2>Sale 30%</h2>
                   <a href="#" class="btn karl-btn">SHOP NOW</a>
               </div>
           </div>
           {/* <!-- Single Catagory --> */}
           <div class="single_catagory_area d-flex align-items-center bg-img" style={{backgroundImage: 'url(img/bg-img/bg-3.jpg)'}}>
               <div class="catagory-content">
                   <h6>in Bags excepting the new collection</h6>
                   <h2>Designer bags</h2>
                   <a href="#" class="btn karl-btn">SHOP NOW</a>
               </div>
           </div>
       </section>
     



        )
    }
}

export default productCarousel