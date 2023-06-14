import { Fragment } from "react"
import ArrowCarousel from "./ArrowCarousel";
import ArrowDisplay from "./ArrowDisplay";
import Header from '../Layout/Header'
import CartProvider from "../store/CardProvider";


const Arrows = () => {
    return (
        <Fragment>

            <main>
                <ArrowCarousel />
                <ArrowDisplay />
            </main>

        </Fragment>
    )
}
export default Arrows;