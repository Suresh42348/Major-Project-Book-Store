import React from 'react';
import './orderDetails.css';

function OrderDetailed(props) {

    const renderorder=({data})=>{
        if(data){
            console.log(data)
           return data.map((item)=>{
            if(item.cartdata.length>1){
                return item.cartdata.map((u)=>{
                    
                    
                    return(
                        <div className="row">
                        <div key={u.items[0]._id} className="maindiv">
                                <div className='imgdiv'>
                                    <img src={u.items[0].Image} width="250px" height="250px" />
                                </div>
                                <div className='content'>
                                    <h2 className="name">{u.items[0].Book_Name}</h2>
                                    <h4><span class="heading">Author: </span> {u.items[0].author} </h4>
                                    <h4><span class="heading">Publisher:</span> {u.items[0].publisher} </h4>
                                    <div style={{ display: "flex" }}>
                                        <span className="newprice">₹ {u.items[0].new_price} </span>
                                        <span className="oldprice">₹ {u.items[0].old_price}</span>
                                        <span className="discount">{((u.items[0].old_price - u.items[0].new_price) / (u.items[0].old_price) * 100).toFixed(2)}% OFF</span>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                    )
                    

                }) 
                
            }
            
            else  {
                return(
                    <div className="row">
                    <div key={item.cartdata[0]._id} className="maindiv">
                            <div className='imgdiv'>
                                <img src={item.cartdata[0].Image} width="250px" height="250px" />
                            </div>
                            <div className='content'>
                                <h2 className="name">{item.cartdata[0].Book_Name}</h2>
                                <h4><span class="heading">Author: </span> {item.cartdata[0].author} </h4>
                                <h4><span class="heading">Publisher:</span> {item.cartdata[0].publisher} </h4>
                                <div style={{ display: "flex" }}>
                                    <span className="newprice">₹ {item.cartdata[0].new_price} </span>
                                    <span className="oldprice">₹ {item.cartdata[0].old_price}</span>
                                    <span className="discount">{((item.cartdata[0].old_price - item.cartdata[0].new_price) / (item.cartdata[0].old_price) * 100).toFixed(2)}% OFF</span>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                )
            }
                
            })
        }

    }
    return (
        <div>
            {renderorder(props)}
        </div>
    );
}

export default OrderDetailed;