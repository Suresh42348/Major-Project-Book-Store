import React from 'react';
import './header.css';
import banner1 from './images/ad-banner1.jpg'

const Banner1 = (props) => {
    return (
        <React.Fragment>
               <div className="banner container">
           <img src={banner1} id="banner1"  className="img-responsive" alt="banner"/>
            </div>
      
        </React.Fragment>
    )
}

export default Banner1;