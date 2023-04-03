import { NavLink } from 'react-router-dom';

import AvailableDoughnutsBaked from './AvailableDoughnutsBaked';
import collectionHeader from '../../../../assets/collection-header.jpg';
import classes from '../../Doughnuts.module.css';

const activePage = ({ isActive }) => isActive ? classes.active : undefined;

function DoughnutsBaked() {

    return (
        <>
            <img src={collectionHeader} alt="Doughnuts" className={classes['main-image']} />
            <main>
                <div className={classes.categories}>
                    <ul className={classes.list}>
                        <li><NavLink to="/doughnuts" className={activePage} end>All</NavLink></li>
                        <li><NavLink to="/doughnuts/baked" className={activePage} >Baked</NavLink></li>
                        <li><NavLink to="/doughnuts/vegan" className={activePage}>Vegan</NavLink></li>
                    </ul>
                </div >
                <AvailableDoughnutsBaked />
            </main>
        </>
    );
}

export default DoughnutsBaked;

