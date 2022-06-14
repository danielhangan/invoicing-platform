import React, {useState} from 'react'
import {
    Flex,
    Box,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalBody,
    ModalHeader,
    ModalContent,
    ModalFooter,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Spinner

} from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'


export const AddCompanyModal = () => {
    const router = useRouter()
    const {data: session} = useSession()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [company_name, setCompanyname] = useState('')
    const [company_url, setCompanyurl] = useState('')
    const [address_street, setAddress_street] = useState('')
    const [address_city, setAddress_city] = useState('')
    const [address_country, setAddress_country] = useState('')
    const [address_post_code, setAddress_post_code] = useState('')
    const [vat_number, setVat_number] = useState('')
    const [tax_number, setTax_number] = useState('')
    const [founded_on, setFounded_on] = useState(new Date().toISOString().split("T")[0])
    const [submitCompany, setSubmitcompany] = useState(false)

    const SubmitNewCompany = async () => {
        setSubmitcompany(true)
        await fetch(`/api/companies/` , {
            method: "POST",
            body: JSON.stringify({
                company_name: company_name,
                url: company_url,
                user: session.user.email,
                address_street: address_street,
                address_city: address_city,
                address_country: address_country,
                address_post_code: address_post_code,
                vat_number: vat_number,
                tax_number: tax_number,
                founded_on: founded_on,
                profile_company: false
            })
        })
        .then((data) => {
            setSubmitcompany(false)
            onClose()
            router.replace(router.asPath)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return (
      <>
        <Button colorScheme='teal' size='sm' onClick={onOpen}>New Company</Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create company</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel htmlFor='company_name'>Company Name</FormLabel>
                    <Input 
                        value={company_name}
                        onChange={(e) => setCompanyname(e.target.value)}
                        id='company_name'
                        type='text'
                        placeholder='Google' />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel htmlFor='company-url'>Company URL</FormLabel>
                    <Input
                        value={company_url}
                        onChange={(e) => setCompanyurl(e.target.value)}
                        id='companyurl'
                        type='text'
                        placeholder='mycompany.com'
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel htmlFor='country'>Business Country</FormLabel>
                    <Input
                        value={address_country}
                        onChange={(e) => setAddress_country(e.target.value)}
                        id='address_country'
                        type='text'
                        placeholder='Romania'
                    />
                    <FormHelperText>Country where your business entity is registered.</FormHelperText>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel htmlFor='city'>Business City</FormLabel>
                    <Input
                        value={address_city}
                        onChange={(e) => setAddress_city(e.target.value)}
                        id='address_city'
                        type='text'
                        placeholder='Bucharest'
                    />
                    <FormHelperText>City where your business entity is registered.</FormHelperText>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel htmlFor='address'>Business Address</FormLabel>
                    <Input
                        value={address_street}
                        onChange={(e) => setAddress_street(e.target.value)}
                        id='address_street'
                        type='text'
                        placeholder='Strade Dej 59'
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel htmlFor='address_post_code'>Business Post Code</FormLabel>
                    <Input
                        value={address_post_code}
                        onChange={(e) => setAddress_post_code(e.target.value)}
                        id='address_post_code'
                        type='text'
                        placeholder='014044'
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel htmlFor='vat_number'>Vat Number</FormLabel>
                    <Input
                        value={vat_number}
                        onChange={(e) => setVat_number(e.target.value)}
                        id='vat_number'
                        type='text'
                        placeholder='RO123456'
                    />
                    <FormHelperText>You business unique VAT number.</FormHelperText>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel htmlFor='tax_number'>Tax Address</FormLabel>
                    <Input
                        value={tax_number}
                        onChange={(e) => setTax_number(e.target.value)}
                        id='tax_number'
                        type='text'
                        placeholder='123456'
                    />
                    <FormHelperText>You business unique TAX number.</FormHelperText>
                </FormControl>
                <FormControl mb={4} mt={4}>
                    <FormLabel htmlFor='founded_on'>Founded On</FormLabel>
                    <Input 
                        value={founded_on}
                        onChange={(e) => setFounded_on(e.target.value)}
                        id='founded_on'
                        type='date'
                        placeholder='2022-01-01'
                    />
                    <FormHelperText>Business incorporation date.</FormHelperText>
                </FormControl>
            </ModalBody>
  
            <ModalFooter>
                {submitCompany ? 
                    <Button disabled="True" colorScheme="blue"><Spinner size='sm' mr={3}/> Submit</Button>
                    :
                    <Button onClick={SubmitNewCompany} colorScheme="blue">Submit</Button>
                }
              <Button ml={3} onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }