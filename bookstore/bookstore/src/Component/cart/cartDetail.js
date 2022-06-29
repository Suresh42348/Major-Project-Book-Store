 import './cartDetail.css'
 
function OrderDetail(props){
    console.log(props)
   

    const renderItem = ({abc})=>{
        console.log(abc)
        if(abc!=="")
            return abc.map((item)=>{
                return <div className="row"><div key={item._id} className="main">
                    <div className='imgdiv'>
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
                            <div className="remove"><button className="btn btn-danger" onClick={()=>{removefromcart(item.cid)}}>Remove</button></div>
                    </div>
                </div>
                </div>
            })
            
        }

        //delete from cart
        const removefromcart=(cid)   =>{
            
                fetch(`https://frozen-meadow-35944.herokuapp.com/removefromcart/${cid}`,
                {
                    method: "DELETE",
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify()
                }).then(res => console.log(res.status))
            let a = Math.random().toFixed(4)
            props.getdata(a)
             
         
         }
    

    return(
        <div>
           {renderItem(props)}
        </div>
    )
}

export default OrderDetail;