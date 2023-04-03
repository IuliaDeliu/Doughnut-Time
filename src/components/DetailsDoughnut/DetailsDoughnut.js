import { useContext, useState } from "react";
import classes from './DetailsDoughnut.module.css';
import CartContext from "../../store/cart-context";
import DoughnutItemForm from "../Doughnuts/DoughnutItem/DoughnutItemForm";


const DetailsDoughnut = props => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
   const [cartDetailsIsShow, setCartDetailsIsShow] = useState(false);
   const showCartDetailsHandler = () => {
    setCartDetailsIsShow(true);
}

const hideCarDetailsHandler = () => {
    setCartDetailsIsShow(false)
}
   const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            image: props.image,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
   

    return (<>
        <div className={classes.form}>
            <div>
                <img src={props.image} className={classes.img} />
                <div className={classes.summary}>
                    <span className={classes.price}><b>{price}</b></span>
                    <DoughnutItemForm onAddToCart={addToCartHandler} />
                </div>
            </div>
            <div className={classes.main}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p><i>Contains: <b>{props.contains}</b></i></p>
            </div>
        </div>
    </>
    )
}

export default DetailsDoughnut;