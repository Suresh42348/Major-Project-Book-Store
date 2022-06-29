import React from 'react';
import Picture from './Picture';
import First from '../categories/first.js';
import Second from '../categories/second.js';
import Third from '../categories/third.js';
import Fourth from '../categories/fourth.js';
import Fifth from '../categories/fifth.js';
import Sixth from '../categories/sixth.js';
import Banner1 from '../categories/banner1.js';
import Banner2 from '../categories/banner2.js';
import Banner3 from '../categories/banner3.js';
import Header from '../../header';
import Search from '../search/search';


const Home = () => {
    return(
        <>
       <Header/>
        
        <div>
        
        <Picture/>
         <First/> 
         <Second/> 
         <Banner1/> 
         <Third/> 
         <Fourth/>
         <Banner2/>  
         <Fifth/> 
         <Sixth/> 
         <Banner3/> 
    </div>
    </>
    )
}

export default Home;