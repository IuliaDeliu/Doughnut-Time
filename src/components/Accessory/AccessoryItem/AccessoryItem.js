import { useContext, useState } from 'react';
import DoughnutItemForm from '../../Doughnuts/DoughnutItem/DoughnutItemForm'
import classes from './AccessoryItem.module.css'
import CartContext from '../../../store/cart-context';

const AccessoryItem = props => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            image: props.image,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (<li className={classes.doughnut}>
        <div>
            <img srcSet={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <div className={classes.bottom}>
                <div className={classes.price}>{price}</div>
                <DoughnutItemForm onAddToCart={addToCartHandler} />
            </div>
        </div>

    </li>)
}

export default AccessoryItem;