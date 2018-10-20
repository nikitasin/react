import React, {Component} from 'react';
import c from '../images/soclink/c.png';
import styles from './style.css'


class Footer extends Component {
    render() {
        return(
            <footer className={styles.footer}>
                <span>
                    <img className={styles.footer_c} src={c} alt=""/>
                    <p>Solutions for retail. All rights reserved</p>
                </span>
                <span>
                    <ul className={styles.footer_info}>
                        <li><a href="/#">LEGAL</a></li>
                        <li className={styles.footer_border}><a href="/#">SITEMAP</a></li>
                        <li><a href="/#">CONTACTS</a></li>
                    </ul>
                </span>
            </footer>
        )
    }
};

export default Footer;