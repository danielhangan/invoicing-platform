import React, { useState } from 'react'
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
    FormHelperText
} from '@chakra-ui/react'


export const AccountSettings = ({ user_data }) => {

    return (
            <Flex my={4} mx={12} flexDir="column">
            
            <Heading size="xl">Personal Details</Heading>
            <Divider />

            <VStack w={["100%", "80%", "60%"]} p={12} mt={6} boxShadow="base" align="left" bg="white">
                <FormControl>
                    <FormLabel htmlFor='full-name'>Full Name</FormLabel>
                    <Input value={user_data.profile.full_name} id='full_name' type='text' />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='profession'>Profession</FormLabel>
                    <Input value={user_data.profile.profession ? user_data.profile.profession : ''} id='profession' type='text' placeholder='Software Engineer' />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input disabled="True" value={user_data.profile.email ? user_data.profile.email : ''} id='email' type='email' placeholder='example@gmail.com' />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='company-url'>Company URL</FormLabel>
                    <Input value={user_data.company.url ? user_data.company.url : ''} id='companyurl' type='text' placeholder='mycompany.com' />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='country'>Business Country</FormLabel>
                    <Input value={user_data.company.address_country ? user_data.company.address_country : ''} id='address_country' type='text' placeholder='Romania' />
                    <FormHelperText>Country where your business entity is registered.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='city'>Business City</FormLabel>
                    <Input value={user_data.company.address_city ? user_data.company.address_city : ''} id='address_city' type='text' placeholder='Bucharest' />
                    <FormHelperText>City where your business entity is registered.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='address'>Business Address</FormLabel>
                    <Input value={user_data.company.address_street ? user_data.company.address_street : ''} id='address_street' type='text' placeholder='Strade Dej 59' />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='vat_number'>Vat Number</FormLabel>
                    <Input value={user_data.company.vat_number ? user_data.company.vat_number : ''} id='vat_number' type='text' placeholder='RO123456' />
                    <FormHelperText>You business unique VAT number.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='tax_number'>Tax Address</FormLabel>
                    <Input value={user_data.company.tax_number ? user_data.company.tax_number : ''} id='tax_number' type='text' placeholder='123456' />
                    <FormHelperText>You business unique TAX number.</FormHelperText>
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel htmlFor='founded_on'>Founded On</FormLabel>
                    <Input value={user_data.company.founded_on ? user_data.company.founded_on : ''} id='founded_on' type='date' placeholder='2022-01-01' />
                    <FormHelperText>Business incorporation date.</FormHelperText>
                </FormControl>
                <Flex flexDir='row' justify="right">
                    <Button mt={4}>
                        Save
                    </Button>
                </Flex>
            </VStack>
            </Flex>
  )
}
