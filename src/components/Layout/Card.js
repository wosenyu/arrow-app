import { useContext } from "react";
import { Icon } from '@chakra-ui/react'
import { BsFillCartFill } from "react-icons/bs";
import classes from './Header.module.css'
import CartContext from "../store/Cart-Context";

const Card = props => {

    const cartContx = useContext(CartContext)
    const numOfCartItem = cartContx.items.reduce((curNum, item) => { return curNum + item.amount }, 0)

    return <button className={classes.button}>
        <span className={classes.icon} ><Icon as={BsFillCartFill} /></span>
        <span>Your Cart </span>
        <span className={classes.badge}> 1</span>

    </button>


};

export default Card;