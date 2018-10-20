import React, {Component} from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';

import styles from './style.css'

import Carousel from 'nuka-carousel';
import slid_1 from '../images/slide_img/slid_1.jpg';

export default class Slides extends Component {
  render() {
    return (
      <div className={styles.slider}>
        <Carousel>
           <div className={styles.slide}>
           <img className={styles.slide_img} src={slid_1} alt="img"/>
           <div className={styles.info_block}>
               <p className={styles.info_big}>
               The Best Company <br/> to Help Your Business
               </p>
               <p className={styles.info_small}>
               International leader in design manufacture and installation of 
               complete equipment for the retail sector
               </p>
            </div>
           </div>
           <div className={styles.slide}>
           <img src={slid_1} alt="img"/>
           <div className={styles.info_block}>
               <p className={styles.info_big}>
               The Best Company <br/> to Help Your Business
               </p>
               <p className={styles.info_small}>
               International leader in design manufacture and installation of 
               complete equipment for the retail sector
               </p>
            </div>
           </div><div className={styles.slide}>
           <img src={slid_1} alt="img"/>
           <div className={styles.info_block}>
               <p className={styles.info_big}>
               The Best Company <br/> to Help Your Business
               </p>
               <p className={styles.info_small}>
               International leader in design manufacture and installation of 
               complete equipment for the retail sector
               </p>
            </div>
           </div><div className={styles.slide}>
           <img src={slid_1} alt="img"/>
           <div className={styles.info_block}>
               <p className={styles.info_big}>
               The Best Company <br/> to Help Your Business
               </p>
               <p className={styles.info_small}>
               International leader in design manufacture and installation of 
               complete equipment for the retail sector
               </p>
            </div>
           </div><div className={styles.slide}>
           <img src={slid_1} alt="img"/>
           <div className={styles.info_block}>
               <p className={styles.info_big}>
               The Best Company <br/> to Help Your Business
               </p>
               <p className={styles.info_small}>
               International leader in design manufacture and installation of 
               complete equipment for the retail sector
               </p>
            </div>
           </div>
        </Carousel>
      </div>
    );
  }
}