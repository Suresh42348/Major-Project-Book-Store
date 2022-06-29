import React from 'react';
import './header.css';
import banner3 from './images/banner3.jpg'

const Banner3 = (props) => {
    return (
        <React.Fragment>
               <div className="banner container">
           <img src={banner3}  id="banner1"  className="img-responsive" alt="banner"/>
            </div>
      
        </React.Fragment>
    )
}

export default Banner3;