import './orderSummary.css'

function OrderSummary(props){
    console.log(props)

    const renderItem = ({orders})=>{
        console.log(orders)
        if(orders!=="")
            return orders.map((item)=>{
                return <div key={item._id} className="maindiv1">
                    <div className='imgdiv1'>
                        <img src={item.Image} width="250px" height="250px" />
                    </div>
                    <div className='content'>
                    <h2 className="name">{item.Book_Name}</h2>
                        <h4><span class="heading">Author: </span> {item.author} </h4>
                        <h4><span class="heading">Publisher:</span> {item.publisher} </h4>
                        <div style={{display:"flex"}}>
                            <span className="newprice">₹ {item.new_price} </span>
                            <span className="oldprice">₹ {item.old_price}</span>
                            <span className="discount">{((item.old_price-item.new_price)/(item.old_price)*100).toFixed(2)}% OFF</span>
                            </div>
                    </div>
                </div>
            })
            
        }
    

    return(
        <div>
           {renderItem(props)}
        </div>
    )
}

export default OrderSummary;