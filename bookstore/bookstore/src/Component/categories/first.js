//First.js 
 
import React from "react"; 
import './header.css'; 
import {Link} from 'react-router-dom'; 
class First extends React.Component { 
   
    // Constructor  
    constructor(props) { 
        super(props); 
    
        this.state = { 
            items: [], 
            DataisLoaded: false 
        }; 
    } 
    
     
    
    // ComponentDidMount is used to 
    // execute the code  
    componentDidMount() { 
        sessionStorage.setItem("page",0)
        fetch( 
"https://frozen-meadow-35944.herokuapp.com/books?categoryid=1"
) 
            .then((res) => res.json()) 
            .then((json) => { 
               
                this.setState({ 
                    items: json,  
                    DataisLoaded: true 
                   
                }); 
            }) 
           
         
    } 
   
    render() { 
        const { DataisLoaded, items } = this.state; 
        if (!DataisLoaded) return <div> 
            <h1> Pleses wait some time.... </h1> </div> ; 
   
 
 
        return ( 
        <div> 
             <div class=" header container"> 
                <h1>Exam Preparation Books</h1> 
            </div> 
            <div className="bookwindow container"> 
                    <div className="row">   
        { 
                items.map((item,index) => ( 
                    index < 6 && 
                    <Link to={`/Bookdetails/${item.book_id}`}> 
                    
                        <div key={item.book_id}className="first col-lg-2 col-md-4 col-sm-4 col-xs-6" > 
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
        <Link to= {`/listing/1`} >View More</Link> 
        </div> 
        </div> 
    ); 
} 
} 
    
export default First;