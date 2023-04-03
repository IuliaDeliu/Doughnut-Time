import React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';


const activePage = ({ isActive }) => isActive ? classes.active : undefined;


const Header = props => {
    return (<React.Fragment>
        <header className={classes.top}>
            <div className={classes.header}>
                <h1>Doughnut Time</h1>
                <NavLink to='/cart'><HeaderCartButton /></NavLink>
            </div>
            <div className={classes.headers}>
                <nav>
                    <ul className={classes.list}>
                        <li><NavLink to="/" className={activePage} end>About Us</NavLink></li>
                        <li><NavLink to="/doughnuts" className={activePage}>Doughnuts</NavLink></li>
                        <li><NavLink to="/accessory" className={activePage}>Accessory</NavLink></li>
                        <li><NavLink to="/corporate" className={activePage}>Corporate</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    </React.Fragment>
    )
};

export default Header;