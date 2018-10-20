import React, {Component} from 'react';
import Header from "../header";
import Slides from "../slider";
import Products from "../products";
import Footer from "../footer";
// import styles from './style.css'


class Main extends Component {
    render() {
        return(
           <div>
               <Header/>
               <Slides/>
               <Products/>
               <Footer/>
           </div>
        )
    }
};

export default Main;