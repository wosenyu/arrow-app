import classes from './Arrow.module.css'
import { useContext, useEffect, useState } from 'react'
import ArrowForm from './ArrowForm'
import CartContext from '../store/Cart-Context'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
const ArrowItem = props => {

    const cartContx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`
    const addToCartHandler = amount => {
        cartContx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }


    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{ duration: 0.5 }}

            >
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: inView ? 0 : -100 }}
                    transition={{ duration: 0.5, delay: 0.2 }}

                >
                    <li className={classes.arrowList}>
                        <div>
                            <h3>{props.name}</h3>
                            <div className={classes.description}>{props.description}</div>
                            <div className={classes.price}>{props.price}</div>
                        </div>
                        <div>
                            <ArrowForm id={props.id} onAddToCart={addToCartHandler} />
                        </div>
                    </li>
                </motion.div>
            </motion.div>
        </div>

    )
}


export default ArrowItem