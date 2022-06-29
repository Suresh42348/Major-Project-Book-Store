import React from "react"; 
import './bookdetails.css'; 
import { Link } from 'react-router-dom'; 
import Displaydata from "./displaydata";
import Header from '../../header';

let url; 
let purl;
let amount;
let single;

 
 
 let bookid;
class Bookdetails extends React.Component { 

    orderId = []
 
    // Constructor  
    constructor(props) { 
        super(props); 
    
        this.state = { 
            items: [], 
            DataisLoaded: false ,
            bookid:0,
            details:'',
            userItem:'',
            cid:Math.floor(Math.random()*100000),

        }; 
        bookid= props.match.params.bookid; 
        console.log(bookid) ;
        purl="https://frozen-meadow-35944.herokuapp.com/cart";
        url= `https://frozen-meadow-35944.herokuapp.com/books?bookid=${bookid}`;
        amount=Number(sessionStorage.getItem("amount"))
        single=Number(sessionStorage.getItem("single"))
        // url = `http://localhost:9800/books?bookid=${bookid}`; 
    } 
 
    // ComponentDidMount is used to 
    // execute the code  
    componentDidMount() { 
        sessionStorage.setItem('page',0)
        fetch( 
            url) 
            .then((res) => res.json()) 
            .then((json) => { 
                console.log(json) 
                this.setState({ 
                    items: json, 
                    DataisLoaded: true,
                    bookid:bookid,
                    
                }); 
            }) 
    } 
    // addToCart = (data) => {
    //     console.log("addtocart")
    //     this.setState({userItem:data})
    //     console.log(data)
    // }

    ordernow = () => {
        if(sessionStorage.getItem('loginStatus')=="false"){
            this.props.history.push(`/login`)
        }
        else{
            sessionStorage.setItem('bookid',this.state.bookid);
            sessionStorage.setItem("single",this.state.items[0].new_price)
            this.props.history.push(`/placeOrder/${this.state.bookid}`)
        }
       
    }
    cart = () => {
        
        if(sessionStorage.getItem('loginStatus')=="false"){
            this.props.history.push(`/login`)
        }
        else{
            let obj={
                email:sessionStorage.getItem('userInfo').split(',')[1],
                cid:this.state.cid,
                items:this.state.items
                
                
            }
            console.log(obj)
        fetch(purl,{method:"POST",
        headers:{
            'accept':'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify(obj)
       
        
    })
    .then(res=>{
        console.log(res.status)
        if (res.status===200){
            sessionStorage.setItem("amount",amount+this.state.items[0].new_price)
            
            this.props.history.push(`/cart`)

        }

    }
    )}
    }
    render() { 
        const { DataisLoaded, items } = this.state; 
        if (!DataisLoaded) return <div> 
            <h1> Pleses wait some time.... </h1> </div>; 
 
        return (
            <>
            <Header/>
            <div >{ 
                items.map((item) => ( 
                    <div key={item.book_id} className="box">
                   
                    
                        <div className="main1 "> 
                            <img src={item.Image} ></img>

                        </div> 
                        <div className="detail">
                            <h1 className="bookname">{item.Book_Name}</h1>
                            <h4><span class="heading">Author: </span> {item.author} </h4>
                            <h4><span class="heading">Publisher:</span> {item.publisher} </h4>
                            <div style={{display:"flex"}}>
                            <span className="newprice">₹ {item.new_price} </span>
                            <span className="oldprice">₹ {item.old_price}</span>
                            <span className="discount">{((item.old_price-item.new_price)/(item.old_price)*100).toFixed(2)}% OFF</span>
                            </div>
                            <h4><span class="heading">Availability:</span> Out of Stock</h4>
                            <h4><span class="heading">Shipping-Time: </span> Usually Ships 1-3 Days</h4>
                            <h4><span class="heading">Rating: </span> {item.rating}</h4>
                            <div className="btn btn1" onClick={this.cart} >Add to Cart</div>
                            <div className="btn btn2" onClick={this.ordernow}>Order Now</div>
                        </div>
                        
                        
                        <div className="second">
                             <Displaydata bookid={this.state.bookid}/>
                            
                        </div>
                      
                    </div>
                )) 
              } 
           
 
           </div >     
           </> 
        );
    }
}
      
    





    
 
 
export default Bookdetails;