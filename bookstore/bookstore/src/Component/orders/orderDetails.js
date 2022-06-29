import React, { Component } from 'react';
import Header from '../../header'
import './orderDetails.css'
import OrderDetailed from './OrderDetailed';
let url;
let id;


class OrderDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: [],
            totalcost:''

        }
        console.log(this.props)
        id = this.props.location.search.split("=")[1]
        console.log(id)
        url = `https://frozen-meadow-35944.herokuapp.com/orderdetails?id=${id}`
    }
    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                console.log(data[0].cost)
                this.setState({
                    orders: data,
                    totalcost:data[0]
                })
            })
    }

    render() {
        // let item = this.state.orders.cartdata[0]
        setTimeout(()=>{
            console.log(this.state.orders.cartdata)
        },1000)
 
        return (
            <>
                <Header />
                <div className="orderdetails">
                <h1>Order Details</h1>
                <h3>Order Id: <span>{this.state.totalcost.id}</span></h3>
                <h3>Phone: <span>{this.state.totalcost.phone}</span></h3>
                <h3>Name: <span>{this.state.totalcost.name}</span></h3>
                <h3>Email: <span>{this.state.totalcost.email}</span></h3>
                <h3>Address: <span>{this.state.totalcost.address}</span></h3>
                <h3>Ordered Items: <span>{this.state.totalcost.orderitems}</span></h3>
                <h3>Total Cost: <span>{this.state.totalcost.cost}</span></h3>
                    </div>
                <OrderDetailed data={this.state.orders} />

            </>
        )
    }

}

export default OrderDetails