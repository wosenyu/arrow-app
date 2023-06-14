import { Fragment } from "react";
import classes from './Header.module.css'
import Card from './Card'
import aImg from '../assets/chuttersnap.jpg'

import Cart from './Cart'


const Header = props => {


    return <Fragment>

        <header className={classes.header}>

            <h2>  Arrows </h2>


            <Cart />
        </header>

        <div className={classes['main-image']}>
            <img src={aImg}></img>
        </div>

    </Fragment>
};

export default Header;