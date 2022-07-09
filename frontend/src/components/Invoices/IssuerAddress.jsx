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
import { InvoiceContext } from '../../layouts/InvoiceLayout'

export const IssuerAddress = ({ view_mode }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {
      issuer_address_city,
      setIssuer_address_city,
      issuer_address_country,
      setIssuer_address_country,
      issuer_address_post_code,
      setIssuer_address_post_code,
      issuer_address_street,
      setIssuer_address_street,
      issuer_company_name,
      setIssuer_company_name,
      issuer_tax_number,
      setIssuer_tax_number,
      issuer_vat_number,
      setIssuer_vat_number,
      issuer_email,
      setIssuer_email,
      invoice_id
    } = useContext(InvoiceContext)
    const [savebutton, setSavebutton] = useState(false)

    const SaveModalChanges = async () => {
        setSavebutton(true)
        await fetch(`/api/invoices/${invoice_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                issuer_company_name: issuer_company_name,
                issuer_address_street: issuer_address_street,
                issuer_address_city: issuer_address_city,
                issuer_address_country: issuer_address_country,
                issuer_address_post_code: issuer_address_post_code,
                issuer_vat_number: issuer_vat_number,
                issuer_tax_number: issuer_tax_number,
            })
        })
        .then((res) => {
            console.log(res)
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
        <>
        {view_mode === 'edit' ?
        <Flex h="100%" flexDir="column" gap={6}>
        <Input 
            bg={issuer_email ? 'white' : 'grey.100'}
            border={0}
            size="lg"
            placeholder="example@gmail.com"
            fontSize="sm"
            value={issuer_email}
            onChange={(e) => setIssuer_email(e.target.value)}
        />

        <Button 
            w="100%"
            h="100%"
            onClick={onOpen}
            justifyContent="flex-start"
            alignItems="start"
            p={6}
            bg={issuer_company_name || issuer_address_country ? 'white' : 'grey.100'}
            fontSize="sm"
            size="sm"
        >
            <Flex flexDir="column" gap={2} textAlign="left">
                <Text as="h1" fontSize="2xl">{issuer_company_name}</Text>
                <Text fontWeight="normal">{issuer_address_street}</Text>
                <Flex>
                    <Text fontWeight="normal">{issuer_address_country}</Text>
                    {issuer_address_city ? 
                        <Text fontWeight="normal">, {issuer_address_city}</Text>
                        :
                        <Text></Text>
                    }
                </Flex>
                <Text fontWeight="normal">{issuer_address_post_code}</Text>
                <Text fontWeight="normal">{issuer_vat_number}</Text>
                <Text fontWeight="normal">{issuer_tax_number}</Text>
            </Flex>
        </Button>
        </Flex>
        :
        <Flex h="100%" flexDir="column" gap={6} p={4}>
        <Text>{issuer_email}</Text>

        <Flex flexDir="column" gap={2} textAlign="left">
            <Text as="h1" fontSize="2xl">{issuer_company_name}</Text>
            <Text fontWeight="normal">{issuer_address_street}</Text>
            <Flex>
                <Text fontWeight="normal">{issuer_address_country}</Text>
                {issuer_address_city ? 
                    <Text fontWeight="normal">, {issuer_address_city}</Text>
                    :
                    <Text></Text>
                }
            </Flex>
            <Text fontWeight="normal">{issuer_address_post_code}</Text>
            <Text fontWeight="normal">{issuer_vat_number}</Text>
            <Text fontWeight="normal">{issuer_tax_number}</Text>
        </Flex>
        </Flex>
        
        }
    
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Issuer Address</ModalHeader>
            <ModalCloseButton />
            <ModalBody mb={4}>
                <VStack spacing={4}>
                <FormControl>
                    <FormLabel htmlFor='issuer_company_name'>Company Name</FormLabel>
                    <Input
                        value={issuer_company_name}
                        onChange={(e) => setIssuer_company_name(e.target.value)}
                        id='issuer_company_name'
                        type='text'
                        placeholder='Spotify'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='issuer_address_street'>Address Street</FormLabel>
                    <Input
                        value={issuer_address_street}
                        onChange={(e) => setIssuer_address_street(e.target.value)}
                        id='issuer_address_street'
                        type='text'
                        placeholder='Park Avenue 704, 4d'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='issuer_address_country'>Address Country</FormLabel>
                    <Input
                        value={issuer_address_country}
                        onChange={(e) => setIssuer_address_country(e.target.value)}
                        id='issuer_address_country'
                        type='text'
                        placeholder='United States'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='issuer_address_city'>Address City</FormLabel>
                    <Input
                        value={issuer_address_city}
                        onChange={(e) => setIssuer_address_city(e.target.value)}
                        id='issuer_address_city'
                        type='text'
                        placeholder='New York'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='issuer_address_post_code'>Post Code</FormLabel>
                    <Input
                        value={issuer_address_post_code}
                        onChange={(e) => setIssuer_address_post_code(e.target.value)}
                        id='issuer_address_post_code'
                        type='text'
                        placeholder='1749-123'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='issuer_vat_number'>VAT Number</FormLabel>
                    <Input
                        value={issuer_vat_number}
                        onChange={(e) => setIssuer_vat_number(e.target.value)}
                        id='issuer_vat_number'
                        type='text'
                        placeholder='US123456'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='issuer_tax_number'>TAX Number</FormLabel>
                    <Input
                        value={issuer_tax_number}
                        onChange={(e) => setIssuer_tax_number(e.target.value)}
                        id='issuer_tax_number'
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
        </>
    )
}
