import React, {useState, useEffect} from 'react'
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  FormLabel,
  FormControl,
  FormHelperText,
  Input,
  Spinner,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export const EditCardModal = ({ company_info }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const {data: session} = useSession()

  const [company_id, setCompanyid] = useState(0)
  const [company_name, setCompanyname] = useState('')
  const [company_url, setCompanyurl] = useState('')
  const [address_street, setAddress_street] = useState('')
  const [address_city, setAddress_city] = useState('')
  const [address_country, setAddress_country] = useState('')
  const [address_post_code, setAddress_post_code] = useState('')
  const [vat_number, setVat_number] = useState('')
  const [tax_number, setTax_number] = useState('')
  const [updatecompany, setUpdatecompany] = useState(false)

  useEffect(() => {
      setCompanyid(company_info.company_id)
      setCompanyname(company_info.company_name)
      setCompanyurl(company_info.url)
      setAddress_street(company_info.address_street)
      setAddress_city(company_info.address_city)
      setAddress_country(company_info.address_country)
      setAddress_post_code(company_info.address_post_code)
      setVat_number(company_info.vat_number)
      setTax_number(company_info.tax_number)
  }, [company_info])

  const SubmitCompanyUpdate = async () => {
      setUpdatecompany(true)
      await fetch(`/api/companies/update/` , {
          method: "PUT",
          body: JSON.stringify({
              user_email: session?.user?.email,
              company_id: company_id,
              company_name: company_name,
              url: company_url,
              address_street: address_street,
              address_city: address_city,
              address_country: address_country,
              address_post_code: address_post_code,
              vat_number: vat_number,
              tax_number: tax_number,
          })
      })
      .then((data) => {
        setTimeout(() => {
          setUpdatecompany(false)
        }, 2000)
        onClose()
        router.replace(router.asPath)
      })
      .catch((err) => {
          console.log(err)
      })
  }
  return (
    <>
      <Button size="sm" colorScheme="blue" onClick={onOpen}>Edit</Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
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
            </ModalBody>

          <ModalFooter>

              {updatecompany ? 
              <Button disabled="True" size="sm" colorScheme="red"><Spinner size='sm' mr={3}/>Save</Button>
              :
              <Button onClick={SubmitCompanyUpdate} size="sm" colorScheme="red">Save</Button>
              }
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}