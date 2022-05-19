function Renderfromapi(props){
    return(
     
            <div className="first col-lg-2 col-md-4 col-sm-4 col-xs-6" >
                            <div className="card">
                                <div className="productimage">
                                 <img src={props.item.Image} alt="indian 2021"/>  
                                </div>
                                <div className="details">
                                    <b> <span className="detailheading">{props.item.Book_Name}</span> </b><br></br>
                                    <span><strike>Old Price : {props.item.old_price}</strike></span><br></br>
                                    <span className="detailheading">New Price : {props.item.new_price}</span>
                                </div>
                            </div>
                        </div>
      
    )
}
export default Renderfromapi