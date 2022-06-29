import React,{Component} from 'react';
import './placeOrder.css'
import Header from '../../header'; 
import Orderfromcart from './Ordersummary2';


const purl = "https://frozen-meadow-35944.herokuapp.com/placeOrder";

class PlaceOrder2 extends Component {
    constructor(props){
        super(props)
 
        this.state={
            id:Math.floor(Math.random()*100000),
            bookname:this.props.match.params.bookname,
            name:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[0]:'',
            email:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:'',
            cost:0,
            phone:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[2]:'',
            address:'Block C, Set No.09, VikasNagar, Shimla',
            orderitems:'',
            cartdata:[]
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItems" key={item.book_id}>
                        <img src={item.Image} alt={item.Book_Name}/>
                        <h3>{item.Book_Name}</h3>
                        <h4>Rs. {item.new_price}</h4>
                    </div>
                )
            })
        }
    }
    dategnenrator(){
        let date=new Date().toLocaleDateString()
        console.log(date)
       sessionStorage.setItem("date",date)
        
    }

    proceed = () => {
        let a=Math.random()
        console.log(this.state)
        let obj = this.state;
        obj.orderitems = sessionStorage.getItem('bookid')
        fetch(purl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push('/viewBooking'))
        .then(console.log('order Added'))
        .then(this.dategnenrator)
    .then(sessionStorage.setItem("single",a))    
    }

    render(){
        // if(sessionStorage.getItem('loginStatus')==false){
        //     return(
        //         <div>
        //             <Header/>
        //             <center>
        //                 <h2>Login First To Place Order</h2>    
        //             </center>
        //         </div>
        //     )
        // }
        return(
            <>
                <Header/>
            <div className="container">
                <hr/>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3>Your Orders </h3>
                    </div>
                    <div className="panel-body">
                        <form >
                        <input type="hidden" name="cost" value={this.state.cost}/>
                        <input type="hidden" name="id" value={this.state.id}/>
                        <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="fname">Name</label>
                                <input id="fname" name="name" className="form-control"
                                value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input id="email" name="email" className="form-control"
                                value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="phone">Phone</label>
                                <input id="phone" name="phone" className="form-control"
                                value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="address">Address</label>
                                <input id="address" name="address" className="form-control"
                                value={this.state.address} onChange={this.handleChange}/>
                            </div>
                        </div>

                        {this.state.orderdata!=="" && <Orderfromcart orders={this.state.cartdata} />}
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="tc1">Total Price is Rs.{sessionStorage.getItem("amount")}</h2>
                            </div>
                        </div>
                        <button className=" alpha btn btn-primary" onClick={this.proceed}>Procced</button>
                        </form>
                    </div>
                </div>
            </div>
            </>
        )
    }

    //call api 
    componentDidMount(){
        sessionStorage.setItem('page',0)
        let email =sessionStorage.getItem('userInfo').split(',')[1];
        fetch(`https://frozen-meadow-35944.herokuapp.com/viewcart?email=${email}`)
        .then(res=>res.json())
        .then((data)=>{
             console.log(data)
            // console.log(typeof data.new_price)
           this.setState({
            cartdata:data,
            bookid:data.book_id,
            cost: Number(sessionStorage.getItem("amount"))
           }
           )

         
        })
        
    }
}


export default PlaceOrder2