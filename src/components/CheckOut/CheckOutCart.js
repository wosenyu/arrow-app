import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Stack, Text, Heading
} from '@chakra-ui/react'

import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';


function CheckOutCart() {

    const location = useLocation();
    const amountTotal = location.state.totalAmount.toFixed(2);

    return (
        <div>
            <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {<Stack mt='6' spacing='3'>
                    <Heading size='lg' textAlign="center">Cart</Heading>
                    <Text>
                        <TableContainer>
                            <Table variant='simple'>

                                <Thead>
                                    <Tr>
                                        <Th>Item</Th>
                                        <Th>Quantity</Th>
                                        <Th>Price</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {location.state.items.map((item, index) => (
                                        <Tr key={index}>
                                            <Td>{item.name}</Td>
                                            <Td isNumeric>{item.amount}</Td>
                                            <Td isNumeric>${item.price}</Td>
                                        </Tr>
                                    ))}

                                </Tbody>

                            </Table>
                        </TableContainer>
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        Total: ${amountTotal}
                    </Text>
                </Stack>}
            </motion.form>
        </div>
    )
}
export default CheckOutCart