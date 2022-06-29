import React,{Component, useEffect, useState} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../../header';
import createBrowserHistory from "history/createBrowserHistory"
const ViewOrder =(props)=>{
const url = "https://frozen-meadow-35944.herokuapp.com/viewOrder"
const[orders,setorders]=useState('')
const[randomnumber,setrandomnumber]=useState('')
const[random,setrandom]=useState('')
const history = createBrowserHistory({
    forceRefresh: true
    })

//recievedata
const recievedata=(data)=>{
    console.log(data)
    setTimeout(() => {
        setrandom(data)
    },200);
}

useEffect(()=>{
    if(sessionStorage.getItem('loginStatus')=="false"){
        sessionStorage.setItem("accessorder","true")
        history.push(`/login`)
    }
    else{
    
    let email = sessionStorage.getItem('userInfo').split(',')[1];
    setTimeout(() => {
    fetch(`${url}?email=${email}`)
    .then(res=>res.json())
    .then((data)=>{
            setorders(data)
            setrandomnumber(sessionStorage.getItem("single"))
    })  
    
 },0);
  
}
})
    
    
    
    return (
        <>
            <Header />
            <OrderDisplay orderData={orders} getdata={(data)=>recievedata(data)}/>
        </>

    );
}
export default ViewOrder

