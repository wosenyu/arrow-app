import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    Box,
    Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Divider,
} from '@chakra-ui/react'

import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../Layout/Header';
import CheckOutCart from './CheckOutCart';
import CheckOutForm from './CheckoutForm';
import CheckoutDeliveryForm from './CheckoutDeliveryForm';

function StepOne() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <CheckOutCart />
        </motion.div>
    );
}


function StepTwo() {
    return (
        <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <CheckoutDeliveryForm />
        </motion.form>
    );
}


function StepThree() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <CheckOutForm />
        </motion.div>
    );
}
function CheckOut() {
    const MotionStepper = motion(Stepper);
    const MotionStep = motion(Step);
    const [activeStep, setActiveStep] = useState(0);


    // const stepData = [
    //     { name: 'John Doe', age: 25 },
    //     // Other data for each step
    // ];

    const handleBack = () => {
        setActiveStep(prevStep => prevStep - 1);
    };

    const handleContinue = () => {
        setActiveStep(prevStep => prevStep + 1);
    };

    const StepComponent = [StepOne, StepTwo, StepThree][activeStep];

    const steps = [
        { title: 'First', description: 'Cart Info' },
        { title: 'Second', description: 'Contact Info' },
        { title: 'Third', description: 'Payment' },
    ]

    return (
        <div>
            <Header />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card maxW='lg' maxH='lg' align='center'>
                    <CardHeader>
                        <MotionStepper index={activeStep} initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            {steps.map((step, index) => (
                                <MotionStep key={index} initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}>
                                    <StepIndicator>
                                        <StepStatus
                                            complete={<StepIcon />}
                                            incomplete={<StepNumber />}
                                            active={<StepNumber />}
                                        />
                                    </StepIndicator>

                                    <Box flexShrink='0'>
                                        <StepTitle>{step.title}</StepTitle>
                                        <StepDescription>{step.description}</StepDescription>
                                    </Box>

                                    <StepSeparator />
                                </MotionStep>
                            ))}
                        </MotionStepper>
                    </CardHeader>

                    <CardBody>
                        <MotionStepper
                            activeStep={activeStep}
                            colorScheme="teal"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {steps.map((step, index) => (
                                <MotionStep
                                    key={index}
                                    label={step}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                />
                            ))}
                        </MotionStepper>

                        <div>
                            <StepComponent data={[activeStep]} />
                        </div>


                    </CardBody>
                    <Divider />

                    <CardFooter>
                        <ButtonGroup spacing='10'>
                            <Button >
                                <motion.button
                                    onClick={handleBack}
                                    disabled={activeStep === 0}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}

                                >
                                    Back
                                </motion.button>
                            </Button>

                            <Button>
                                <motion.button
                                    onClick={handleContinue}
                                    disabled={activeStep === steps.length - 1}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Continue
                                </motion.button>
                            </Button>

                        </ButtonGroup>

                    </CardFooter>
                </Card>
            </div>



        </div>


    )
}
export default CheckOut