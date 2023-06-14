import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { React, useState, useContext, useEffect } from 'react'
import CartItem from './CartItem'
import Card from '../Layout/Card'
import { Icon } from '@chakra-ui/react'
import { BsFillCartFill } from "react-icons/bs";
import CartContext from '../store/Cart-Context';
import classes from './Header.module.css'
import { color } from 'framer-motion';


const Cart = props => {

    const [btnBump, setBtnBump] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cartRemoveHandler = (id) => {
        cartContx.removeItem(id)
    }
    const cartAddHandler = (item) => {
        cartContx.addItem({ ...item, amount: 1 })
    }

    const cartContx = useContext(CartContext)
    const numOfCartItem = cartContx.items.reduce((curNum, item) => { return curNum + item.amount }, 0)

    const cartItems = (
        <ul>
            {cartContx.items.map((item) => (
                <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartRemoveHandler.bind(null, item.id)} onAdd={cartAddHandler.bind(null, item)} />
            ))}
        </ul>
    )

    const totalAmount = `$${cartContx.totalAmount.toFixed(2)}`
    const hasItem = cartContx.items.length > 0;
    const { items } = cartContx;
    const btnClasses = `${classes.button} ${btnBump ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnBump(true)

        const timer = setTimeout(() => {
            setBtnBump(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return <div>
        {/* <Card onClick={handleShow}></Card> */}

        <Button onClick={handleShow} style={{ backgroundColor: "#526D82", border: "none" }} className={btnClasses}>
            <span className={classes.icon} ><Icon as={BsFillCartFill} /></span>
            <span>Your Cart </span>
            <span className={classes.badge}> {numOfCartItem}</span>

        </Button>


        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Order</Modal.Title>
            </Modal.Header>

            <Modal.Body>{cartItems}</Modal.Body>

            <Modal.Body style={{ font: 'inherit', fontWeight: 'bold', fontSize: ' 1.10rem', color: '#27374D' }} >Total Amount: {totalAmount}</Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                    Close
                </Button>
                {hasItem && <Button variant="dark" onClick={handleClose}>
                    Order
                </Button>}

            </Modal.Footer>
        </Modal>
    </div>
}


export default Cart;