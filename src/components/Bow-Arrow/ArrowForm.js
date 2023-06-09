
import Input from '../UI/Input'
import { useRef, useState } from 'react';
import classes from './Arrow.module.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const ArrowForm = (props) => {

    const [amountIsvalid, setAmountIsvalid] = useState(true)
    const [rotate, setRotate] = useState(false)

    const inputRef = useRef();

    const handleSubmit = event => {
        event.preventDefault();

        const enterAmount = inputRef.current.value;
        const enterAmountNum = +enterAmount

        if (enterAmount.trim().length === 0 || enterAmountNum < 1) {
            setAmountIsvalid(false);
            return;
        }

        props.onAddToCart(enterAmountNum)
    }

    const controls = useAnimation();

    const handleClick = () => {

        animateButton();
    };

    const animateButton = async () => {

        const shakeAnimation = {
            x: [-10, 10, -10, 10, 0],
            y: [-10, 10, -10, 10, 0]
        };

        // Trigger the animation
        await controls.start(shakeAnimation);
    };

    return (

        <form className={classes.form} onSubmit={handleSubmit}>
            <Input ref={inputRef} label='Amount' input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '10',
                step: '1',
                defaultValue: '1'
            }} />
            <motion.button onClick={handleClick} whileHover={{ scale: 1.3 }} animate={controls}>+ ADD</motion.button>
            {!amountIsvalid && <p>Enter valid amount</p>}
        </form>
        // <FormControl onSubmit={handleSubmit}>
        //     <FormLabel>Amount</FormLabel>
        //     <Input></Input>
        //     <Input ref={inputRef} id='amount' type='number' size='sm' min={1} defaultValue={1} />
        //     <FormHelperText>We'll never share your email.</FormHelperText>
        //     <Button style={{ color: "#00005c", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)" }}>+ Add</Button>
        //     {!amountIsvalid && <p>Enter valid amount</p>}
        // </FormControl>
    )
}
export default ArrowForm