import classes from '../Bow-Arrow/Arrow.module.css'

import Carousel from 'react-bootstrap/Carousel';
import MingBow from '../assets/Bowming.png'
import QingBow from '../assets/qingbow.png'
import Rb from '../assets/recurvebow.png'
import Rb2 from '../assets/recurvebow-2.png'
import { Container } from 'react-bootstrap';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';




const ArrowCarousel = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, // Animations will trigger only once
        threshold: 0.1, // Adjust this value based on your requirements
    });

    return (
        <div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                transition={{ duration: 0.5 }}

            >
                <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: inView ? 0 : 100 }}
                    transition={{ duration: 0.5, delay: 0.2 }}

                >
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
                </motion.div>
            </motion.div>
        </div>






    )
}
export default ArrowCarousel;