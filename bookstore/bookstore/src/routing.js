//Routing 
 
import React, { useState } from 'react'; 
import {BrowserRouter, Route} from 'react-router-dom'; 
import Aboutus from './Component/Home/aboutus';
 import Footer from './footer'; 
 import Home from './Component/Home/Home'; 
 import Listing from './Component/details/listing';
 import Bookdetails from './Component/details/bookdetails';
 import PlaceOrder from './Component/orders/placeOrders';
 import PlaceOrder2 from './Component/orders/placeOrder2';
 import ViewOrder from './Component/orders/viewOrder'; 
 import Login from './Component/login/loginComponent';
 import Register from './Component/login/registerComponent';
 import Search from './Component/search/search';
 import Cart from './Component/cart/cart';
 import OrderDetails from './Component/orders/orderDetails';

 
const Routing = () => { 
     
    return( 
        <BrowserRouter> 
            {/* <Header/>  */}
                <Route exact path="/" component={Home}/> 
                <Route exact path="/listing" component={Listing}/>
                <Route exact path="/aboutus" component={Aboutus}/>  
                 <Route path="/listing/:id" component={Listing}/> 
                 <Route exact path="/bookdetails" component={Bookdetails}/>
                 <Route path="/bookdetails/:bookid" component={Bookdetails}/>
                 <Route path="/placeOrder" component={PlaceOrder}/>
                 <Route path="/placeOrder2" component={PlaceOrder2}/>
                <Route path="/viewBooking" component={ViewOrder}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/search" component={Search}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/orderdetails" component={OrderDetails}/>


                
            <Footer/> 
        </BrowserRouter> 
    ) 
} 
 
export default Routing