import React,{Component, useEffect, useState} from 'react';
import './cart.css';
import axios from 'axios';
import Header from '../../header';
import CartDetail from './cartDetail';
import createBrowserHistory from "history/createBrowserHistory"



const Cart=(props)=>{
    const purl = "https://frozen-meadow-35944.herokuapp.com/cart";
    const[email,setemail]=useState(sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:'');
    const[cost,setcost]=useState(0)
    const[cartdata,setcartdata]=useState('')
    const[bookid,setbookid]=useState(0)
    const[totalamount,settotalamount]=useState(0)
    const[random,setrandom]=useState('')
    const history = createBrowserHistory({
        forceRefresh: true
        })
    //proceed 
    const proceed = () => {
        history.push('/placeOrder2')
}
//recievedata
const recievedata=(data)=>{
    console.log(data)
    setTimeout(() => {
        setrandom(data)
    },500);
    

}
 useEffect(()=>{
    sessionStorage.setItem('page',0)
    console.log("useeffect running")
    let amount = [] 
    if(sessionStorage.getItem('loginStatus')=="false"){
        sessionStorage.setItem("accesscart","true")
        history.push(`/login`)
    }
    else{
    let email =sessionStorage.getItem('userInfo').split(',')[1];
    setTimeout(() => {
        fetch(`https://frozen-meadow-35944.herokuapp.com/viewcart?email=${email}`)
    .then(res=>res.json())
    .then((data)=>{
         console.log(data)
        // console.log(typeof data.new_price)
       
        setcartdata(data)
        setbookid(data.book_id)
        setcost(cost + data[0].items[0].new_price)
       
       
        data.map((old) => {
        amount.push(Number(old.items[0].new_price))
        let calc_amount = amount.reduce(reduceFunction)
        console.log(calc_amount)
        function reduceFunction(total, num) {
            return total + num;
        }
        sessionStorage.setItem('amount', calc_amount) 
    },0);
    
    
        setTimeout(()=>{
                settotalamount(sessionStorage.getItem("amount"))
        },500)
        
    })
     
    })
   
}},[random])  
    return(
        <>
                <Header/>
            <div className="container">
                <hr/>
                
                        <h1>Items In Cart</h1>
                    </div>
                    

                  <CartDetail getdata={(data)=>recievedata(data)} abc={cartdata} />
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="tc">Total Price is Rs.{totalamount}</h2>
                            </div>
                        </div>
                        <button className=" alpha1 btn btn-primary" onClick={proceed}>Place Order</button>
            </>
    )
}
export default Cart