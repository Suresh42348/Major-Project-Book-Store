//Routing 
 
import React, { useState } from 'react'; 
import {BrowserRouter, Route} from 'react-router-dom'; 
import Header from './header' 
 import Footer from './footer'; 
 import Home from './Component/Home/Home'; 
 import Listing from './Component/details/listing'; 
// import Listing from './Component/listing/listing'; 
// import Details from './Component/details/restDetails' 
 
const Routing = () => { 
     
    return( 
        <BrowserRouter> 
            <Header/> 
                <Route exact path="/" component={Home}/> 
                <Route exact path="/listing" component={Listing}/> 
                 <Route path="/listing/:id" component={Listing}/> 
                 {/* <Route path="/details" component={Details}/>  */} 
            <Footer/> 
        </BrowserRouter> 
    ) 
} 
 
export default Routing