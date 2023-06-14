import classes from '../Bow-Arrow/Arrow.module.css'

import Carousel from 'react-bootstrap/Carousel';
import MingBow from '../assets/Bowming.png'
import QingBow from '../assets/qingbow.png'
import Rb from '../assets/recurvebow.png'
import Rb2 from '../assets/recurvebow-2.png'
import { Container } from 'react-bootstrap';



const ArrowCarousel = () => {
    return (

        <Container className={classes.contain}>
            <section className={classes.summary}>

                <Carousel indicators={false} interval={7000} >
                    <Carousel.Item>
                        <img
                            className={classes.i}
                            src={MingBow}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                            <p>Ming Dynasty Style Bow</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={classes.i}
                            src={QingBow}
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                            <p>Qing Dynasty Style Bow</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>


            </section>
            <section className={classes.summary}>

                <Carousel indicators={false} interval={7000}>
                    <Carousel.Item>
                        <img
                            className={classes.i}
                            src={Rb}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                            <p>Olympic Style Bow</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={classes.i}
                            src={Rb2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                            <p>Modern Recurve Bow</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>


            </section>
        </Container>




    )
}
export default ArrowCarousel;