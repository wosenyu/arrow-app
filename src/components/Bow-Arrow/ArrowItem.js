import classes from './Arrow.module.css'
import { useContext } from 'react'
import ArrowForm from './ArrowForm'
import CartContext from '../store/Cart-Context'

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

    return (
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

    )
}


export default ArrowItem