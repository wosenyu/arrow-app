import { Fragment } from "react";
import classes from './Header.module.css'
import Card from './Card'
import aImg from '../assets/chuttersnap.jpg'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import Cart from './Cart'
import { useNavigate } from 'react-router-dom';

const Header = props => {

    return <Fragment>



        <header className={classes.header}>
            <Breadcrumb fontSize='lg'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Arrows</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>


            <Cart />
        </header>

        <div className={classes['main-image']}>
            <img src={aImg}></img>
        </div>

    </Fragment>
};

export default Header;