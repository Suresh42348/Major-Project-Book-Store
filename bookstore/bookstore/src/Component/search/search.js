import React,{Component} from 'react';
import Header from '../../header';
import { Link } from 'react-router-dom';
import Product from './productDisplay'; 



class Search extends Component {
    constructor(){
        super()

        this.state={
            productData:[],
            filteredData:[]
        }
    }
    componentDidMount() { 
        fetch( 
            
"https://frozen-meadow-35944.herokuapp.com/books"
) 
            .then((res) => res.json()) 
            .then((json) => { 
               
                this.setState({ 
                    productData: json,  
                    
                   
                }); 
            }) 
           

    } 
   
    /* var a= [1,3,6,8,2]
    a.filter((data) => {return data>5})*/

    
    filterProduct = (keyword) => {
        console.log(keyword)

        
        if(this.state.productData.length>0){
            console.log(this.state.productData)
            let output = this.state.productData.filter((item) => {
                return item.Book_Name.toLowerCase().indexOf(keyword.toLowerCase())>-1
            })
            console.log(output)
            this.setState({filteredData:output})
        }
        
    }
    
         
    render(){
        // var keyword=sessionStorage.getItem("keyword");
       
        
      
        
       
     
         
       
        return(
            <>
                 <Header pasdata={(data)=>{this.filterProduct(data)}} />
                  {this.state.filteredData.length >0 && <Product  prodData={this.state.filteredData}/>} 
               
            </>
        )
      
    }
}

export default Search