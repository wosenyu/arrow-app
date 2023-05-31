import { Fragment } from "react";
import { Icon, IconButton } from '@chakra-ui/react'
import { BsFillCartFill } from "react-icons/bs";
import classes from './Header.module.css'

const Card = props => {
    return <button className={classes.button}>
        <span className={classes.icon} ><Icon as={BsFillCartFill} /></span>
        <span>Your Cart </span>
        <span className={classes.badge}> 2</span>

    </button>


};

export default Card;