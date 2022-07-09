import React, { useState, useEffect } from 'react'
import {
    Flex,
    VStack,
    Button,
    Heading,
    useColorModeValue,
    Input,
    Divider,
    FormControl,
    FormLabel,
    FormHelperText,
    Spinner
} from '@chakra-ui/react'
import axios from 'axios'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export const AccountSettings = ({ user_data }) => {
    const router = useRouter()
    const [fullname, setFullname] = useState('')
    const [profession, setProfession] = useState('')
    const [company_name, setCompany_name] = useState('')
    const [company_url, setCompany_url] = useState('')
    const [address_street, setAddress_street] = useState('')
    const [address_city, setAddress_city] = useState('')
    const [address_country, setAddress_country] = useState('')
    const [address_post_code, setAddress_post_code] = useState('')
    const [vat_number, setVat_number] = useState('')
    const [tax_number, setTax_number] = useState('')
    const [founded_on, setFounded_on] = useState('')
    const [savebutton, setSavebutton] = useState(false)

    useEffect(() => {
        setSavebutton(false)
        setFullname(user_data.profile.full_name)
        setProfession(user_data.profile.profession ? user_data.profile.profession : "")
        setCompany_name(user_data.company.company_name ? user_data.company.company_name : "")
        setCompany_url(user_data.company.url ? user_data.company.url : "")
        setAddress_street(user_data.company.address_street ? user_data.company.address_street : "")
        setAddress_city(user_data.company.address_city ? user_data.company.address_city : "")
        setAddress_country(user_data.company.address_country ? user_data.company.address_country : "")
        setAddress_post_code(user_data.company.address_post_code ? user_data.company.address_post_code: "")
        setVat_number(user_data.company.vat_number ? user_data.company.vat_number : "")
        setTax_number(user_data.company.tax_number ? user_data.company.tax_number : "")
        setFounded_on(user_data.company.founded_on ? user_data.company.founded_on : new Date().toISOString().split("T")[0])
      }, [user_data])
    
    const SaveProfileChanges = async () => {  
        setSavebutton(true)
        await fetch(`/api/users/${user_data.profile.email}`, {
            method: 'PUT',
            body: JSON.stringify({
                profile: {
                    full_name: fullname,
                    profession: profession
                },
                company: {
                    company_name: company_name,
                    url: company_url,
                    address_street: address_street,
                    address_city: address_city,
                    address_country: address_country,
                    address_post_code: address_post_code,
                    vat_number: vat_number,
                    tax_number: tax_number,
                    founded_on: founded_on
                }
            })
        })
        .then((res) => {
            setTimeout(() => {
                setSavebutton(false)
            }, 1000)
        })
        .catch((err) => {
            // console.log(err)
        })
    }

    const DeleteProfile = async () => {
        await signOut()
        await fetch(`/api/users/${user_data.profile.email}`, {
            method: 'DELETE'
        }).then((res) => {
                console.log(res)
                router.push("/")
            })
            .catch((err) => {
                console.log(err)
            })
        router.push("/")
    }

    return (
            <Flex my={4} mx={12} flexDir="column">
            <Heading size="xl">Personal Details</Heading>
            <Divider />
            <VStack w={["100%", "80%", "60%"]} p={12} mt={6} boxShadow="base" align="left" bg="white">
                <FormControl>
                    <FormLabel htmlFor='full-name'>Full Name</FormLabel>
                    <Input 
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        id='full_name'
                        type='text'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='profession'>Profession</FormLabel>
                    <Input 
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                        id='profession'
                        type='text'
                        placeholder='Software Engineer' />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input 
                        disabled="True"
                        value={user_data.profile.email ? user_data.profile.email : ''}
                        id='email'
                        type='email'
                        placeholder='example@gmail.com'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='company-name'>Company Name</FormLabel>
                    <Input 
                        value={company_name}
                        onChange={(e) => setCompany_name(e.target.value)}
                        id='companyname'
                        type='text'
                        placeholder='Open Invoice'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='company-url'>Company URL</FormLabel>
                    <Input
                        value={company_url}
                        onChange={(e) => setCompany_url(e.target.value)}
                        id='companyurl'
                        type='text'
                        placeholder='mycompany.com'
                    />
                </FormControl>
                <FormControl>
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
                <FormControl>
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
                <FormControl>
                    <FormLabel htmlFor='address'>Business Address</FormLabel>
                    <Input
                        value={address_street}
                        onChange={(e) => setAddress_street(e.target.value)}
                        id='address_street'
                        type='text'
                        placeholder='Strade Dej 59'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='address_post_code'>Business Post Code</FormLabel>
                    <Input
                        value={address_post_code}
                        onChange={(e) => setAddress_post_code(e.target.value)}
                        id='address_post_code'
                        type='text'
                        placeholder='014044'
                    />
                </FormControl>
                <FormControl>
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
                <FormControl>
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
                <FormControl mb={4}>
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
                <Flex flexDir='row' justify="center">
                    {savebutton ? 
                    <Flex w="100%" mt={4} justifyContent='space-between'>
                        <Button onClick={DeleteProfile} colorScheme="red">Delete</Button>
                        <Button disabled="True" colorScheme="blue"><Spinner size='sm' mr={3}/> Save</Button>
                    </Flex>
                    :
                    <Flex w="100%" mt={4} justifyContent='space-between'>
                        <Button onClick={DeleteProfile} colorScheme="red">Delete</Button>
                        <Button onClick={SaveProfileChanges} colorScheme="blue">Save</Button>
                    </Flex>
                }
                </Flex>
            </VStack>
            </Flex>
  )
}
