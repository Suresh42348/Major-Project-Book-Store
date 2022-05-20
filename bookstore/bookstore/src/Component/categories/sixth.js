import React from "react"; 
import './header.css'; 
import {Link} from 'react-router-dom'; 
class Sixth extends React.Component { 
   
    // Constructor  
    constructor(props) { 
        super(props); 
    
        this.state = { 
            items: [], 
            categoryid:{}, 
            DataisLoaded: false 
        }; 
    } 
    
     
    
    // ComponentDidMount is used to 
    // execute the code  
    componentDidMount() { 
        fetch( 
"https://bookstore42348.herokuapp.com/books?categoryid=6") 
            .then((res) => res.json()) 
            .then((json) => { 
               
                this.setState({ 
                    items: json, 
                    DataisLoaded: true 
                   
                }); 
            }) 
            // let categoryid=sessionStorage.setItem('categoryid', 1); 
         
    } 
   
    render() { 
        const { DataisLoaded, items } = this.state; 
        if (!DataisLoaded) return <div> 
            <h1> Pleses wait some time.... </h1> </div> ; 
   
 
 
        return ( 
        <div> 
             <div class=" header container"> 
                <h1>Fiction & Non Fiction Books</h1> 
            </div> 
            <div className="bookwindow container"> 
                    <div className="row">   
        { 
                items.map((item,index) => ( 
                    index < 6 && 
                    <Link to= {`/listing/${this.state.category_id}`}> 
                    
                        <div className="first col-lg-2 col-md-4 col-sm-4 col-xs-6" > 
                            <div className="card"> 
                                <div className="productimage"> 
                                 <img src={item.Image} alt="indian 2021"/>   
                                </div> 
                                <div className="details"> 
                                    <b> <span className="detailheading">{item.Book_Name}</span> </b><br></br> 
                                    <span><strike>Old Price : {item.old_price}</strike></span><br></br> 
                                    <span className="detailheading">New Price : {item.new_price}</span> 
                                </div> 
                            </div> 
                        </div> 
                        </Link> 
                 
                 
                )) 
            } 
        </div> 
        </div> 
        <div className="viewmore container"> 
        <Link to= {`/listing/6`} >View More</Link> 
        </div> 
        </div> 
    ); 
} 
} 
    
export default Sixth;