import {
    TableContainer,
    Table,
    Thead,
    Th,
    Tr,
    Td,
    Tbody,
    Tfoot,
    Input,
    Text,
    Link,
    Flex,
    VStack,
    Divider,
    Icon
 } from '@chakra-ui/react'
import React, { useContext, useState, useEffect } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { InvoiceContext } from '../../pages/invoices/edit/[id]'

export const InvoiceItems = () => {
    const {
        items,
        setItems,
        vatrate,
        setVatrate
    } = useContext(InvoiceContext)
    const [editvatrate, setEditvatrate] = useState(false)
    const [subtotal, setSubtotal] = useState(0)
    const [total, setTotal] = useState(0)

    const AddNewInvoiceItem = () => {
        const tempArr = items
        tempArr.push({
            description: "",
            quantity: "",
            price: ""
        })
        setItems([...tempArr])
    }

    const OnTableElementChange = (e, index) => {
        const tempItem = items[index]
        const tempArr = items

        tempItem[e.target.id] = e.target.value

        tempArr[index] = tempItem
        setItems([...tempArr])
    }
    const OnTableElementDelete = (e, index) => {
        const tempArr = items.splice(index - 1, 1)
        setItems([...tempArr])
    }

    const OnVatRateChange = (e) => {
        e.preventDefault()
        setVatrate(e.target.value)
        setEditvatrate(false)
    }

    useEffect(() => {
        const item_totals = []
        items.forEach((item, index) => {
            if (item['quantity'] && item['price']) {
                const item_total = parseFloat(item['quantity']) * parseFloat(item['price'])
                item_totals.push(item_total)
            }
        })
        let totalSum = item_totals.reduce((partialSum, a) => partialSum + a, 0);
        setSubtotal(totalSum)
    }, [items])

    useEffect(() => {
        const total_calc = subtotal - (subtotal * vatrate/100)
        setTotal(total_calc)
    }, [vatrate, subtotal])

    return (
    <TableContainer>
        <Table size="sm" mb={4}>
            <Thead>
                <Tr>
                    <Th>ITEM</Th>
                    <Th>QTY</Th>
                    <Th>RATE</Th>
                    <Th textAlign="right">TOTAL</Th>
                </Tr>

            </Thead>
            <Tbody>
                {items.map((item, index) => (
                <Tr key={index}>
                    <Th maxW={12}>
                        <Input
                            value={item.description}
                            onChange={(e) => OnTableElementChange(e, index)}
                            bg="grey.100"
                            id='description'
                            type='text'
                            placeholder='Item name'
                            rounded="sm"
                        />
                    </Th>
                    <Th maxW={6}>
                        <Input
                            value={item.quantity}
                            onChange={(e) => OnTableElementChange(e, index)}
                            bg="grey.100"
                            id='quantity'
                            type='tel'
                            placeholder='1'
                            rounded="sm"
                        />
                    </Th>
                    <Td maxW={6}>
                        <Input
                            value={item.price}
                            onChange={(e) => OnTableElementChange(e, index)}
                            bg='grey.100'
                            id='price'
                            type='tel'
                            placeholder='50.00'
                            rounded="sm"
                        />
                    </Td>
                    <Td maxW={6} textAlign="right" isNumeric>
                        <Text>$ {item.quantity * item.price}</Text>
                    </Td>
                    <Th maxW={2} textAlign="center">
                        <Icon 
                            as={FiTrash2} 
                            w={4} 
                            h={4}
                            _hover={{w: 5, h: 5}}
                            onClick={(e) => OnTableElementDelete(e, index)}
                        />
                    </Th>
                </Tr>
                ))}

            </Tbody>
        </Table>
        <Flex flexDir="row" w="100%">
        <Flex ml={4} w="50%">
            <Link textColor="blue.600" onClick={() => AddNewInvoiceItem()}>Add Item</Link>
        </Flex>
        <Flex w="50%" justifyContent="right" gap={2}>
            <VStack w="100%" alignItems="flex-end">
            <Flex w="70%" justifyContent="space-between" pr={4} gap={1}>
                <Text fontWeight="600">Subtotal</Text>
                <Text>$ {subtotal}</Text>
            </Flex>
            <Flex w="70%" justifyContent="space-between" alignItems="center" pr={4}>
                <Link textColor="blue.600" onClick={() => setEditvatrate(true)}>Add tax</Link>
                {editvatrate ? 
                <Input
                    w="20%"
                    size="sm"
                    id="tax_value"
                    type="number"
                    placeholder="17%"
                    rounded="sm"
                    onBlur={(e) => OnVatRateChange(e)}
                />
                :
                <Text>{vatrate == 0 ? "" : vatrate + "%"}</Text>
                }
            </Flex>
            <Divider w="70%" />
            <Flex w="70%" justifyContent="space-between" pr={4} gap={1}>
                <Text fontWeight="600">Total</Text>
                <Text>$ {total}</Text>
            </Flex>
            </VStack>
        </Flex>
        </Flex>

    </TableContainer>
    )
}
