import React,{Component} from 'react';
import axios from 'axios';

const url = "http://zomato42348.herokuapp.com/filter"

class CostFilter extends Component{

    filterCost = (event) => {
        let bookid = sessionStorage.getItem('bookid');
        let cost = event.target.value
        // let lcost = Number(cost[0])
        // let hcost = Number(cost[1])
        let costUrl = ""
        if(event.target.value === ""){
            costUrl = `${url}/${mealId}`
        }else{
            costUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.restPerCost(res.data)})
    }

    render(){
        return(
            <>
                <center>Cost Filter</center>
              
                <div id="sorting" class="container" onChange={this.filterCost}>
           
                    <select id="sort">
                    <option>--Select</option>
                    <option> Newest</option>
                    <option value="1">Price : Low to High</option>
                    <option value="2">Price : High to Low</option>
                    <option value="3">Letter : A to Z</option>
                    <option value="4">Letter : Z to A</option>
                    </select>
                    <label for="#sort">Sort :&nbsp; </label>
                </div>
              
            </>
        )
    }
}

export default CostFilter