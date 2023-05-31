import { Fragment } from "react";
import { Icon, IconButton } from '@chakra-ui/react'
import { BsFillCartFill } from "react-icons/bs";
import classes from './Header.module.css'
import Card from './Card'
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1> React Arrow </h1>
            <Card />
        </header>
    </Fragment>
};

export default Header;