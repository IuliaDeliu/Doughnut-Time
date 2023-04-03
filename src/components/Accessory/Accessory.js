import AvailableAccessory from "./AvailableAccessory"
import collectionHeader from '../../assets/collection-header.jpg';
import classes from './Accessory.module.css';

const Accessory = () => {
    return (<>
        <img src={collectionHeader} alt="Doughnuts" className={classes['main-image']} />
        <AvailableAccessory />
    </>
    )
}

export default Accessory;

