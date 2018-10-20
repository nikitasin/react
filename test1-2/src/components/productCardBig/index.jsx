import React, {Component} from 'react';
import { Card, CardTitle, CardActions } from 'react-mdl';
// import photo1 from '../images/products/photo1.jpg';
import styles from './style.css'



class ProductsCardBig extends Component {
    render() {
        return(
          <div >
              <Card className={styles.card} shadow={0}>
              <img className={styles.img} src={this.props.photo} alt=""/>
                <CardTitle expand />
                <CardActions 
                className={styles.CardActions}>
                    <span >
                    {this.props.Name}
                    </span>
                 </CardActions>
            </Card>
          </div>
        )
    }
};
export default ProductsCardBig;