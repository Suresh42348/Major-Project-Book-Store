import React from "react"; 
import './listing.css'; 
import { Link } from 'react-router-dom'; 
import Header from '../../header';
let categoryid; 
let url; 
let newurl;
 
 
 
class Listing extends React.Component { 
 
    // Constructor  
    constructor(props) { 
        super(props); 
    
        this.state = { 
            items: [], 
            DataisLoaded: false ,
            status:3
        }; 
        categoryid= props.match.params.id; 
        console.log(categoryid) 
        url= `https://frozen-meadow-35944.herokuapp.com/books?categoryid=${categoryid}`
        // url = `http://localhost:9800/books?categoryid=${categoryid}`;  
       
    } 
 
    // ComponentDidMount is used to 
    // execute the code  
    
    handelheader=(data)=>{
       
         let catid=data;
        fetch( 
         `https://frozen-meadow-35944.herokuapp.com/books?categoryid=${catid}`
        ) 
            .then((res) => res.json()) 
            .then((json) => { 
                console.log(json) 
                this.setState({ 
                    items: json, 
                    DataisLoaded: true 
                }); 
            }) 


    }
    render() { 
        console.log(this.state.status)
        const { DataisLoaded, items } = this.state; 
        if (!DataisLoaded) return <div> 
            <h1> Pleses wait some time.... </h1> </div>; 
 
        return (
            <>
            <Header suresh={(data)=>this.handelheader(data)}/>
            <div>{ 
                items.map((item,index) => ( 
                    index < 1 && 
                    <div class=" header container"> 
                        <h1> {item.category} </h1> 
                       
                    </div> 
                )) 
            } 
           
 
                <div className="bookwindow container"> 
                    <div className="row"> 
                        { 
                            items.map((item) => ( 
 
 
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
 
 
                            )) 
                        } 
                    </div> 
                </div> 
            </div>
            </>  
        ); 
    } 
    componentDidMount() { 
        sessionStorage.setItem('page',0)
        console.log("listing page is coming")
        fetch( 
            url) 
            .then((res) => res.json()) 
            .then((json) => { 
                console.log(json) 
                this.setState({ 
                    items: json, 
                    DataisLoaded: true 
                }); 
            }) 
    } 
} 
 
export default Listing;