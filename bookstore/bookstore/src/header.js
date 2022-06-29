import React,{Component} from 'react';
import './header.css';
import {Link,withRouter} from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory"

const url = "https://zlogin42348.herokuapp.com/api/auth/userinfo"




class Header extends Component {
    constructor(props){
        super(props)

        this.state={
            userData:'',
            username:'',
            keyword:''
        }
    }
     history = createBrowserHistory({
        forceRefresh: true
        })

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('amount')
        sessionStorage.removeItem('accessorder')
        sessionStorage.removeItem('accesscart')
        sessionStorage.setItem('loginStatus',false)
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outArray = [data.name, data.email, data.phone, data.role];
            sessionStorage.setItem('userInfo',outArray)
            sessionStorage.setItem('loginStatus',true)
    

            

            
            return(
                <>
                <div className="btnlogin">
                         <Link to="/" className="btn btn-success">
                             <span className="glyphicon glyphicon-user"></span> Hi {this.state.userData.name}
                        </Link>
                       
                    </div> &nbsp;
                   <div className="btnlogin">
                        <button onClick={this.handleLogout} className="btn btn-danger">
                        Logout
                        </button>
                   </div>
                </>
            )
        }else{
            return(
                <>
                    <div className="btnlogin">
                         <Link to="/login" className="btn btn-success">
                             <span className="glyphicon glyphicon-log-in"></span> Login
                        </Link>
                    </div> &nbsp;
                   <div className="btnlogin">
                        <Link to="/register" className="btn btn-primary">
                        <span className="glyphicon glyphicon-user"></span> Register</Link>
                   </div>
                </>
            )
        }
    }
        

    
    about=()=>{
        let a = "abc";
        this.props.suresh(a);
    }
    bestseller=()=>{
        let a = 3;

        this.props.suresh(a);
    }
    newrelease=()=>{
        let a = 4;
        this.props.suresh(a);
    }
    school=()=>{
        let a = 5;
        this.props.suresh(a);
    }
    fiction=()=>{
        let a = 6;
        this.props.suresh(a);
    }
    children=()=>{
        let a = 2;
        this.props.suresh(a);
    }
    exam=()=>{
        let a = 1;
        this.props.suresh(a);
    }
    inputhandler=(event)=>{
        this.setState({
            keyword:event.target.value

        })
        sessionStorage.setItem("keyword", event.target.value)
        console.log(event.target.value)

    }
    searchcondition=()=>{
         if(sessionStorage.getItem('page')==0){
            this.history.push('/search')
        }
        else{
            this.props.pasdata(Math.random())
        }
    }
     
    
   





    render(){
        return (
            <header>
                <div>
                <div id="social" className="social container">
                <div class="weather">
           <img src="https://i.ibb.co/ts2x6SL/weather.png" class="weathericon"/>
            <span id="weather"> </span>
            <span id="city"> </span> 
           
            </div>
            <script src="./geo.js"></script>
            <script>window.onload=geolocation();</script>
            
                <div className="lightdark">
                <button id="btn" type="button" onClick="changeMode()"><img id="lightmode" src="https://i.ibb.co/m05Gz6t/light.png"/> </button>
            </div>
            <div className="icon">
               <a href=""><img src="https://i.ibb.co/KNqrm79/linkedin.png"  className="img-responsive" alt ="facebook"/> </a> 
            </div>
            <div className="icon">
                <a href=""><img src="https://i.ibb.co/MMXCx1G/instagram.png" className="img-responsive" alt ="facebook"/> </a>
            </div>
            <div className="icon">
               <a href=""> <img src="https://i.ibb.co/xMbhQMg/twitter.png" className="img-responsive" alt ="facebook"/> </a>
            </div>
            <div className="icon">
               <a href=""><img src="https://i.ibb.co/3kcd1sW/facebook.png"  className="img-responsive" alt ="facebook"/> </a> 
            </div>
            </div>
         
                
                <div id="head container">
            <div className="logo">
                <img src="https://i.ibb.co/Lk0p77N/logo.png" class="img-responsive"/>
                
            </div>
            <div className="search container">
                <div id="searchbar">
                <input type="text" placeholder="Search by title, author or ISBN here..... " onChange={this.inputhandler} className="form-control" id="keyword"/></div>
                <div className="searchicon" ><button onClick={this.searchcondition} className="btn"><span className="glyphicon glyphicon-search"></span></button>
            </div></div>
            <div className="login">
                
                  {this.conditionalHeader()}
        </div> 
        </div>
        <div></div>
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a class="navbar-brand" href="#"> BuyBooks <sub>india.com</sub></a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to='/'>Home</Link></li>
      
        <li onClick={this.about}><Link to='/aboutus'>About Us</Link></li>
        <li onClick={this.bestseller}><Link to="/listing/3">Best Sellers</Link></li>
        <li onClick={this.newrelease}><Link to="/listing/4">New Releases</Link></li>
        <li onClick={this.school}><Link to="/listing/5">School Books</Link></li>
        <li onClick={this.fiction}><Link to="/listing/6">Fiction &Non-fiction</Link></li>
        <li onClick={this.children}><Link to="/listing/2">Children &Adults</Link></li>
        <li onClick={this.exam}><Link to="/listing/1">Exam Prepration</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
    <li><Link to="/viewBooking"><span class="glyphicon glyphicon-briefcase"></span> Orders</Link></li>
    <li><Link to="/cart"><span class="glyphicon glyphicon-shopping-cart"></span> Cart</Link></li>
    </ul>
  </div>
</nav>
        </div>
        
        
           
     </header>

        )
    }
    componentDidMount(){
        
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({
                userData:data,
                username:data.name
            })
            console.log(this.state.username)
            console.log("componentdidmount running in header")
        })
    }
    
}

export default Header;