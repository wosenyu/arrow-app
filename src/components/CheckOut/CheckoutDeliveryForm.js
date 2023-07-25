import { Select, Heading, FormControl, FormLabel, Input, Flex } from '@chakra-ui/react'



function CheckoutDeliveryForm() {
    return (
        <div>
            <form >
                <Heading as='h3' size='lg'>Contact</Heading>
                <Flex mb={4}>
                    <FormControl id="Name" mr={2}>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" name="Name" />
                    </FormControl>
                    <FormControl id="email" mr={2}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name="email" />
                    </FormControl>
                </Flex>




                <Heading as='h3' size='lg'>Shipping</Heading>
                <Select placeholder='Country/Region'>
                    <option value='option1'>USA</option>
                    <option value='option2'>Canada</option>
                    <option value='option3'>Australia</option>
                </Select>
                <FormControl id="address" mr={2}>
                    <FormLabel>Address</FormLabel>
                    <Input type="text" name="address" />
                </FormControl>
                <Flex mb={4}>
                    <FormControl id="city" mr={2}>
                        <FormLabel>City</FormLabel>
                        <Input type="text" name="city" />
                    </FormControl>
                    <FormControl id="State" mr={2}>
                        <FormLabel>State</FormLabel>
                        <Input type="text" name="State" />
                    </FormControl>
                    <FormControl id="zip" mr={2}>
                        <FormLabel>Zip Code</FormLabel>
                        <Input type="text" name="zip" />
                    </FormControl>
                </Flex>



            </form>
        </div>
    )
}
export default CheckoutDeliveryForm