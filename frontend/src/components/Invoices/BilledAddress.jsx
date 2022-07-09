import React, { useContext, useState } from 'react'
import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
    Input,
    Text,
    FormControl,
    FormLabel,
    VStack,
    Spinner
} from '@chakra-ui/react'
import { InvoiceContext } from '../../pages/invoices/edit/[id]'

export const BilledAddress = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {
      billed_address_city,
      setBilled_address_city,
      billed_address_country,
      setBilled_address_country,
      billed_address_post_code,
      setBilled_address_post_code,
      billed_address_street,
      setBilled_address_street,
      billed_company_name,
      setBilled_company_name,
      billed_tax_number,
      setBilled_tax_number,
      billed_vat_number,
      setBilled_vat_number,
      billed_email,
      setBilled_email,
      invoice_id
    } = useContext(InvoiceContext)
    const [savebutton, setSavebutton] = useState(false)

    const SaveModalChanges = async () => {
        setSavebutton(true)
        await fetch(`/api/invoices/${invoice_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                billed_company_name: billed_company_name,
                billed_address_street: billed_address_street,
                billed_address_city: billed_address_city,
                billed_address_country: billed_address_country,
                billed_address_post_code: billed_address_post_code,
                billed_vat_number: billed_vat_number,
                billed_tax_number: billed_tax_number,
            })
        })
        .then((res) => {
            setTimeout(() => {
                setSavebutton(false)
                onClose()
            }, 1000)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <Flex h="100%" flexDir="column" gap={6}>
        <Input 
            bg={billed_email ? 'white' : 'grey.100'}
            border={0}
            size="lg"
            placeholder="example@gmail.com"
            fontSize="sm"
            value={billed_email}
            onChange={(e) => setBilled_email(e.target.value)}
        />

        <Button 
            w="100%"
            h="100%"
            onClick={onOpen}
            justifyContent="flex-start"
            alignItems="start"
            p={6}
            bg={billed_company_name || billed_address_country ? 'white' : 'grey.100'}
            fontSize="sm"
            size="sm"
        >
            <Flex flexDir="column" gap={2} textAlign="left">
                <Text as="h1" fontSize="2xl">{billed_company_name}</Text>
                <Text fontWeight="normal">{billed_address_street}</Text>
                <Flex>
                    <Text fontWeight="normal">{billed_address_country}</Text>
                    {billed_address_city ? 
                        <Text fontWeight="normal">, {billed_address_city}</Text>
                        :
                        <Text></Text>
                    }
                </Flex>
                <Text fontWeight="normal">{billed_address_post_code}</Text>
                <Text fontWeight="normal">{billed_vat_number}</Text>
                <Text fontWeight="normal">{billed_tax_number}</Text>
            </Flex>
        </Button>
    
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Billed Address</ModalHeader>
            <ModalCloseButton />
            <ModalBody mb={4}>
                <VStack spacing={4}>
                <FormControl>
                    <FormLabel htmlFor='biller_company_name'>Company Name</FormLabel>
                    <Input
                        value={billed_company_name}
                        onChange={(e) => setBilled_company_name(e.target.value)}
                        id='billed_company_name'
                        type='text'
                        placeholder='Spotify'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='billed_address_street'>Address Street</FormLabel>
                    <Input
                        value={billed_address_street}
                        onChange={(e) => setBilled_address_street(e.target.value)}
                        id='billed_address_street'
                        type='text'
                        placeholder='Park Avenue 704, 4d'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='billed_address_country'>Address Country</FormLabel>
                    <Input
                        value={billed_address_country}
                        onChange={(e) => setBilled_address_country(e.target.value)}
                        id='billed_address_country'
                        type='text'
                        placeholder='United States'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='billed_address_city'>Address City</FormLabel>
                    <Input
                        value={billed_address_city}
                        onChange={(e) => setBilled_address_city(e.target.value)}
                        id='billed_address_city'
                        type='text'
                        placeholder='New York'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='billed_address_post_code'>Post Code</FormLabel>
                    <Input
                        value={billed_address_post_code}
                        onChange={(e) => setBilled_address_post_code(e.target.value)}
                        id='billed_address_post_code'
                        type='text'
                        placeholder='1749-123'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='billed_vat_number'>VAT Number</FormLabel>
                    <Input
                        value={billed_vat_number}
                        onChange={(e) => setBilled_vat_number(e.target.value)}
                        id='billed_vat_number'
                        type='text'
                        placeholder='US123456'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='billed_tax_number'>TAX Number</FormLabel>
                    <Input
                        value={billed_tax_number}
                        onChange={(e) => setBilled_tax_number(e.target.value)}
                        id='billed_tax_number'
                        type='text'
                        placeholder='123456'
                    />
                </FormControl>
                </VStack>
            </ModalBody>
    
            <ModalFooter>
                {savebutton ? 
                <Button disabled="True" colorScheme="teal"><Spinner size='sm' />Save</Button>
                :
                <Button colorScheme='teal' size='sm' onClick={SaveModalChanges}>Save</Button>
                }
            </ModalFooter>
            </ModalContent>
        </Modal>
        </Flex>
    )
}

