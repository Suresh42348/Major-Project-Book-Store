import React,{Component} from 'react';
import './header.css';


class Picture extends Component{

   
  

    render(){
        console.log(">>>>inside render")
        return(
            <div className="picture">
                <div className="container">
            
                    <div id="myslider" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myslider" data-slide-to="0" className="active"></li>
                            <li data-target="#myslider" data-slide-to="1"></li>
                            <li data-target="#myslider" data-slide-to="2"></li>
                            <li data-target="#myslider" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active" >
                                <img src="https://i.ibb.co/wY2b2hM/ncert.png" alt="a"/>
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/Jr2VgMH/pic1.png" alt="ncert"/>
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/F628yNh/pic2.png" alt="Sales"/>
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/XkKsqj0/pic3.png" alt="Sales"/>
                            </div>
                        </div>
          
                        <a className="left carousel-control" href="#myslider" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a className="right carousel-control" href="#myslider" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>
                </div>
            </div>
      
        
           
        )
    }

  
    
}

export default Picture