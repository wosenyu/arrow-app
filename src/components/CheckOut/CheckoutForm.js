import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Flex, Text } from '@chakra-ui/react'


import { useLocation } from 'react-router-dom';

const CheckOutForm = () => {
  const [loading, setLoading] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);

  const simulatePaymentProcessing = async (paymentData) => {
    // Simulate payment processing delay
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate payment response (randomly generating a successful or declined response)
    const isSuccessful = Math.random() < 0.8; // 80% success rate
    setPaymentResult(isSuccessful ? 'Payment Successful!' : 'Payment Declined :(');
    setLoading(false);
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    // Gather payment data from the form (you can use a form library for better form handling)
    const paymentData = {
      cardNumber: e.target.elements.cardNumber.value,
      expirationDate: e.target.elements.expirationDate.value,
      cvv: e.target.elements.cvv.value,
      // Other relevant payment data...
    };

    await simulatePaymentProcessing(paymentData);
  };
  const location = useLocation();
  const amountTotal = location.state.totalAmount.toFixed(2);
  return (
    <div>
      <form onSubmit={handlePaymentSubmit}>
        <FormControl id="CardNumber" mr={2}>
          <FormLabel>Card Number:</FormLabel>
          <Input type="text" name="cardNumber" />
        </FormControl>
        <Flex mb={4}>
          <FormControl id="ExperationDate" mr={2}>
            <FormLabel>Expiration Date:</FormLabel>
            <Input type="text" name="expirationDate" />
          </FormControl>

          <FormControl id="Cvv" mr={2}>
            <FormLabel>CVV:</FormLabel>
            <Input type="text" name="cvv" />
          </FormControl>
        </Flex>


        <Flex justifyContent='right'>
          <Button type="submit" disabled={loading} marginRight='8px'>
            {loading ? 'Processing...' : 'Pay Now'}
          </Button>
        </Flex>

      </form>
      {paymentResult && <div>{paymentResult}</div>}

      <Text color='blue.600' fontSize='2xl'>
        Total: ${amountTotal}
      </Text>
    </div>
  );
};

export default CheckOutForm;
