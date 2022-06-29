import React from 'react';
import './header.css';
import banner2 from './images/ad-banner2.png'

const Banner2 = (props) => {
    return (
        <React.Fragment>
               <div className="banner container">
           <img src={banner2} id="banner1"  className="img-responsive" alt="banner"/>
            </div>
      
        </React.Fragment>
    )
}

export default Banner2;