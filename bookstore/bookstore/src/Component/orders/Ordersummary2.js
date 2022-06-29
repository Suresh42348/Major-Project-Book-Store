import './orderSummary.css'

function Orderfromcart(props){
   

    const renderItem = ({orders})=>{
        // console.log(orders)
        if(orders)
        console.log(orders)
            return orders.map((item)=>{
                return <div key={item._id} className="maindiv1">
                    <div className='imgdiv1'>
                        <img src={item.items[0].Image} width="250px" height="250px" />
                    </div>
                    <div className='content'>
                    <h2 className="name">{item.items[0].Book_Name}</h2>
                        <h4><span class="heading">Author: </span> {item.items[0].author} </h4>
                        <h4><span class="heading">Publisher:</span> {item.items[0].publisher} </h4>
                        <div style={{display:"flex"}}>
                            <span className="newprice">₹ {item.items[0].new_price} </span>
                            <span className="oldprice">₹ {item.items[0].old_price}</span>
                            <span className="discount">{((item.items[0].old_price-item.items[0].new_price)/(item.items[0].old_price)*100).toFixed(2)}% OFF</span>
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

export default Orderfromcart;