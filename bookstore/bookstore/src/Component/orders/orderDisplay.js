import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
// import { push } from "connected-react-router";

import './orderDisplay.css'
let c;
const OrderDisplay = (props) => {
   const[date,setdate]=useState("")
   const[deleteorders,setdeleteorders]=useState(false)
   const[confirm,setconfirm]=useState(false)
   
    
   useEffect(()=>{
    let date=sessionStorage.getItem("date")
    setdate(date)
    

   },[])


    const RenderTable = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs. {item.cost}</td>
                        <td>{date}</td>
                        <td><Link to={`/orderdetails?id=${item.id}`}>Click here</Link></td>
                        <td><button className="btn btn-danger" onClick={()=>{deleteorder(item.id)}} >Cancel</button></td>
                        
                    </tr>
                )
            })
        }
      
    }
    function deleteorder(id) {
        fetch(`https://frozen-meadow-35944.herokuapp.com/deleteorders/${id}`, {
            method: "DELETE",
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        }).then(res => console.log(res.status))
    let a = Math.random().toFixed(4)
    props.getdata(a)
     
 
 }

    return(
        <div className="container">
            <center><h1> Your Orders</h1></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>  
                        <th>Name</th>  
                        <th>Phone</th>  
                        <th>Email</th>  
                        <th>Cost</th>  
                        <th>Date</th>
                        <th>Details</th>
                        <th>Cancel Order</th>    
                            
                    </tr>
                </thead>
                <tbody>
                    {RenderTable(props)}
                </tbody>
            </table>
        </div>
    )

}

export default OrderDisplay