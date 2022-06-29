import React from "react"; 
import './displaydata.css'; 
import { Link } from 'react-router-dom'; 

let url;
let bookid; 
 
 
 
class Displaydata extends React.Component { 
 
    // Constructor  
    constructor(props) { 
        super(props); 
    
        this.state = { 
            items: [], 
            DataisLoaded: false,
            about_data:"",
            showdiv12:false,
            showdiv23:false
        }; 
        bookid= this.props.bookid;
        console.log(bookid)
        
         url= `https://frozen-meadow-35944.herokuapp.com/details?bookid=${bookid}`;
        //  url = ` http://localhost:9800/details?bookid=${bookid}`; 
    } 
    
     aboutbook=()=>{

        console.log("jglkdfgljkdf")
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            this.setState({
                about_data:data[0].About_Book,
                showdiv12:true,
                showdiv23:false

            })
        })
    }
    aboutauthor=()=>{
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            this.setState({
                about_data:data[0].About_Author,
                showdiv12:true,
                showdiv23:false
            })
        })
    }
    productspec=()=>{
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            this.setState({
                about_data:data[0].product_specification,
                showdiv23:true,
                showdiv12:false,
                

                
            })
        })
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
                    showdiv12:false,
                }); 
            }) 
    } 

    render() { 
        console.log(this.state.about_data)
        const { DataisLoaded, items } = this.state; 
        if (!DataisLoaded) return <div> 
            <h1> Pleses wait some time.... </h1> </div>; 
 
        return ( 
            <div >{ 
                items.map((item) => ( 
                    <div key={item.book_id}>
                    
                        <div className="row">
                            <div className="cols">
                            <button onClick={this.aboutbook} className="detailbtn1">About The Book</button>    
                            <button onClick={this.aboutauthor}className="detailbtn2" >About The Author</button> 
                            <button onClick={this.productspec} className="detailbtn3">Product Specification</button>       
                            </div> 
                        </div> {
                            this.state.showdiv12 &&
                        <div className=" div12 ">
                            {
                                this.state.about_data
                            }
                        
                        
                        </div>
    }
                        {
                            this.state.showdiv23 &&
                        <div className="div23">
                            {this.state.about_data.map((item)=>{
                                return(
                                    <table  key={item._id}>
                                        <tr>
                                            <td>Publisher</td>
                                            <td>{item.Publisher}</td>
                                        </tr>
                                        <tr>
                                            <td> Publication year </td>
                            
                                            <td>{item.Publication_Year} </td>
                                        </tr>
                                        <tr>
                                            <td>ISBN 13</td>
                                            <td>{item.ISBN_13}</td>
                                        </tr>
                                        <tr>
                                            <td>ISBN 10</td>
                                            <td>{item.ISBN_10}</td>
                                        </tr>
                                        <tr>
                                            <td>Binding</td>
                                            <td>{item.Binding}</td>
                                        </tr>
                                        <tr>
                                            <td>No. of Pages</td>
                                            <td>{item.No_of_pages}</td>
                                        </tr>
                                        <tr>
                                            <td>Language</td>
                                            <td>{item.Language}</td>
                                        </tr>
                                        <tr>
                                            <td>Weight</td>
                                            <td>{item.Weight}</td>
                                        </tr>
                                    </table>
                                )
                            })}

                        </div>}
                       
                     
                    </div>
                )) 
              } 
           
 
           </div >     
        );
    }
}
      
    





    
 
 
export default Displaydata;