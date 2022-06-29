import React,{Component, useEffect, useState} from 'react';
import Header from '../../header';
import { Link } from 'react-router-dom';
import Product from './productDisplay';
import JSON from './random.json' 

const Search=()=>{
    const[productData,setproductData]=useState(JSON)
    const[filteredData,setfilteredData]=useState([])
    const[random,setrandom]=useState('')



    const filterProduct = () => {
        let keyword=sessionStorage.getItem('keyword')
        if(productData.length>0){
            console.log(productData)
            let output = productData.filter((item) => {
                return item.Book_Name.toLowerCase().indexOf(keyword.toLowerCase())>-1
            })
            console.log(output)
            setfilteredData(output)
        }
        
    }
   const  recievenumber=(number)=>{
            setrandom(number)
    }

useEffect(()=>{
    sessionStorage.setItem('page',1) 
    setTimeout(() => {
        
  
        fetch("https://frozen-meadow-35944.herokuapp.com/books") 
            .then((res) => res.json()) 
            .then((json) => { 
                setproductData(json)
            }, 500);  
                setTimeout(()=>{
                    filterProduct()
                },0)

                
            }) 

},[random])

return(
    <>
         <Header pasdata={(number)=>{recievenumber(number)}}/>
          {filteredData.length >0 && <Product  prodData={filteredData}/>} 
       
    </>
)
    
   
}
export default Search