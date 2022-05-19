import React,{Component} from 'react';
import './header.css';

import {Link} from 'react-router-dom'

class Header extends Component {

    render(){
        return (
            <header>
                <div>
                <div id="social" className="social container">
                <div class="weather">
           <img src="https://i.ibb.co/ts2x6SL/weather.png" class="weathericon"/>
            <span id="weather"> </span>
            <span id="city"> </span> 
           
            </div>
            <script src="./geo.js"></script>
            <script>window.onload=geolocation();</script>
            
                <div className="lightdark">
                <button id="btn" type="button" onClick="changeMode()"><img id="lightmode" src="https://i.ibb.co/m05Gz6t/light.png"/> </button>
            </div>
            <div className="icon">
               <a href=""><img src="https://i.ibb.co/KNqrm79/linkedin.png"  className="img-responsive" alt ="facebook"/> </a> 
            </div>
            <div className="icon">
                <a href=""><img src="https://i.ibb.co/MMXCx1G/instagram.png" className="img-responsive" alt ="facebook"/> </a>
            </div>
            <div className="icon">
               <a href=""> <img src="https://i.ibb.co/xMbhQMg/twitter.png" className="img-responsive" alt ="facebook"/> </a>
            </div>
            <div className="icon">
               <a href=""><img src="https://i.ibb.co/3kcd1sW/facebook.png"  className="img-responsive" alt ="facebook"/> </a> 
            </div>
            </div>
         
                
                <div id="head container">
            <div className="logo">
                <img src="https://i.ibb.co/Lk0p77N/logo.png" class="img-responsive"/>
                
            </div>
            <div className="search container">
                <div id="searchbar">
                <input type="text" placeholder="Search by title, author or ISBN here..... " className="form-control"/></div>
                <div className="searchicon" ><button type="button"  className="btn"><span className="glyphicon glyphicon-search"></span></button>
            </div></div>
            <div className="login">
                <button type="submit" className="btn btn-Success"  onClick="window.location.href='./login/login.html'"> Login </button>
        </div> 
        </div>
        <div></div>
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a class="navbar-brand" href="#"> BuyBooks <sub>india.com</sub></a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      
        <li><a href="#">About us</a></li>
        <li><a href="#">Best Sellers</a></li>
        <li><a href="#">New Releases</a></li>
        <li><a href="#">School Books</a></li>
        <li><a href="#">Fiction &Non-fiction</a></li>
        <li><a href="#">Children &Adults</a></li>
        <li><a href="#">Exam Prepration</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
    <li><a href="#"><span class="glyphicon glyphicon-heart"></span> Wishlist</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span>Cart</a></li>
    </ul>
  </div>
</nav>
        </div>
        
        
           
     </header>

        )
    }
    
}

export default Header;