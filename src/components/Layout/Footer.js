import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = () => {
    return (<div><div className={classes.gap}></div>
        <div className={classes.footer}>
            
                    <div className={classes.sb__footer_links_div}>
                    <h3>Doughnut Time </h3>
                        <NavLink to='contact'><h5>Contact Us</h5></NavLink>
                        <h5>917-555-8904</h5>
                   
            </div>

        </div>
    </div>

    )
}

export default Footer;