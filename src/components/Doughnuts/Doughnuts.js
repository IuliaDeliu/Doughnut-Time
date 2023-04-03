import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import AvailableDoughnuts from "./AvailableDoughnuts"
import collectionHeader from '../../assets/collection-header.jpg';
import classes from './Doughnuts.module.css';

const activePage = ({ isActive }) => isActive ? classes.active : undefined;

const Doughnuts = () => {
    return (<>
        <img src={collectionHeader} alt="Doughnuts" className={classes['main-image']} />
        <main>
                <div className={classes.categories}>
                    <ul className={classes.list}>
                        <li><NavLink to="/doughnuts" className={activePage} end>All</NavLink></li>
                        <li><NavLink to="/doughnuts/baked" className={activePage}>Baked</NavLink></li>
                        <li><NavLink to="/doughnuts/vegan" className={activePage}>Vegan</NavLink></li>
                    </ul>
                  
                </div >
                <AvailableDoughnuts />
            </main>
    </>
    )
}

export default Doughnuts;

