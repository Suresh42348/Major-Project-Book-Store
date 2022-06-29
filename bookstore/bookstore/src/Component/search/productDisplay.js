import React from 'react';
import '../details/listing.css'; 
import { Link } from 'react-router-dom'; 

const Product = (props) => {
    console.log(props)

    const renderProduct =({prodData})=>{
        if(prodData){
            
            
            return prodData.map((item) => {
                return (
                    <Link to={`/Bookdetails/${item.book_id}`}> 
 
                                    <div className="first col-lg-2 col-md-4 col-sm-4 col-xs-6" key={item.catgory_id}> 
                                        <div className="card"> 
                                            <div className="productimage"> 
                                                <img src={item.Image} alt="indian 2021" /> 
                                            </div> 
                                            <div className="details"> 
                                                <b> <span className="detailheading">{item.Book_Name}</span> </b><br></br> 
                                                <span><strike>Old Price : {item.old_price}</strike></span><br></br> 
                                                <span className="detailheading">New Price : {item.new_price}</span> 
                                            </div> 
                                        </div> 
                                    </div> 
                                </Link> 
                )
            })
        }
    
    
    } 
    return(
        <div className="row row-cols-1 row-cols-4 g-4">
            {renderProduct(props)}
        </div>

    )
}

export default Product;