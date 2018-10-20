import React, {Component} from 'react';
import photo1 from '../images/products/photo1.jpg';
import photo2 from '../images/products/photo2.jpg';
import photo3 from '../images/products/photo3.jpg';
import photo4 from '../images/products/photo4.jpg';
import photo5 from '../images/products/photo5.jpg';
import photo6 from '../images/products/photo6.jpg';
import photo7 from '../images/products/photo7.jpg';
import ProductsCard from "../productCard";
import ProductsCardBig from "../productCardBig";
import styles from './style.css'



class Products extends Component {
    render() {
        return(
          <div >
              <h3 className={styles.h3}>PRODUCTS</h3>
              <div className={styles.product_wrap}>
              <ProductsCard 
              photo={photo1}
              Name='REMOTE'
              />
              <ProductsCard 
              photo={photo2}
              Name='PLUG-in'
              />
              <ProductsCard 
              photo={photo3}
              Name='NON REFRIGERATED CABINETS'
              />
              <ProductsCard 
              photo={photo4}
              Name='HOT - CASES'
              />
              <ProductsCard 
              photo={photo5}
              Name='REFRIGERATION SYSTEMS'
              />
              </div>
             <div className={styles.product_wrap}>
             <ProductsCardBig 
              photo={photo6}
              Name='REFRIGERATION SYSTEMS'
              />
              <ProductsCardBig 
              photo={photo7}
              Name='REFRIGERATION SYSTEMS'
              />
             </div>
          </div>
        )
    }
};
export default Products;