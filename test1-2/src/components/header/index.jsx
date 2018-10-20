import React, {Component} from 'react';
import styles from './style.css'
import facebook from '../images/soclink/facebook.svg';
import twitter from '../images/soclink/twitter.svg';
import google from '../images/soclink/google.svg';
// import {  } from "../images/soclink/twitter.png";


class Header extends Component {
    render() {
        return(
          <header className={styles.header}>
              <div className={styles.header_up}>
                  <div className={styles.social_links}>
                      <img src={google} alt="go"/>
                      <img src={twitter} alt="tw"/>
                      <img src={facebook} alt="fb"/>
                  </div>
                 <p>+123 45 678 5678</p>
              </div>
              <nav  className={styles.header_down}>
                  <div className={styles.logo_wrap}>
                     <div className={styles.logo}><a href="/#">LOGO</a></div>
                  </div>
                    <ul className={styles.ul}>
                        <li><a href="/#">COMPANY</a></li>
                        <li><a href="/#">PRODUCTS</a></li>
                        <li><a href="/#">SERVICE</a></li>
                        <li><a href="/#">PORTFOLIO</a></li>
                        <li><a href="/#">NEWS</a></li>
                        <li><a href="/#">CONTACTS</a></li>
                    </ul>
              </nav>
          </header>
        )
    }
};

export default Header;