import React,{Component} from 'react';
import './about.css';
import Header from '../../header';

import {Link} from 'react-router-dom'

class Aboutus extends Component {
    render() { 
        
        return (
            <>
            <Header/>
            <div id="main">
                <h1>About US</h1>
                <h2>
                "To learn to read is to light a fire; every syllable that is spelled out is a spark." – Victor Hugo.
                </h2>
            
                <h2>They say- If you have to enlarge someone's world, make them live 1000 lives, enlighten even the dullest of minds… hand them a book.</h2>
                
                <h2>One of the earliest online books marketplace in India we have stayed true to our mission of providing an extensive range of books spanning from Fiction, Non-Fiction, Literature, Classics, Academic, Competitive Exam books written by Indian and International Authors to users all across India at most affordable price. Our sincere hope is the people read more and those that read end up writing more.</h2>
                <h2>We're the place to be if you're scouting for your next best read or searching for the right academic source material.</h2>
                <h2>Thousands of titles across different genres, ready to be shipped across India at the touch of your fingertips.</h2>
                <h2>So what are you waiting for, reader?</h2>
                <h2>Start exploring, reading and buying now!</h2>
                
            </div>
            </>
        );

}
}
export default Aboutus;
