import React,{Component} from 'react';
import './header.css';
import ncert from './images/ncert.jpg';
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';


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
                                <img src={ncert} alt="a"/>
                            </div>
                            <div className="item">
                                <img src= {pic1} alt="ncert"/>
                            </div>
                            <div className="item">
                                <img src={pic2} alt="Sales"/>
                            </div>
                            <div className="item">
                                <img src={pic3} alt="Sales"/>
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