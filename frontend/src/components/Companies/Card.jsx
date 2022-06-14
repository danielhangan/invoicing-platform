import React, { useState, useEffect } from 'react'
import {
    GridItem,
    Text,
    Heading,
    Button,
    Grid,
    Flex,
    Spacer
} from '@chakra-ui/react'

export const CompanyCard = ({ company_data }) => {
    const [company, setCompany] = useState({})

    useEffect(() => {
        setCompany(company_data)
    }, [company_data])
    return (
        <GridItem my={6} mr={6} minH="300px" minW="200px" h="full" boxShadow="lg" p={4}>
            <Flex h="100%" flexDir="column" justify="space-between">
                <Flex flexDir="column" gap='2'>
                    <Heading size="md">{company.company_name}</Heading>
                    <Text>{company.url}</Text>
                    <Text>{company.address_street}</Text>
                    <Text>{company.address_city}</Text>
                    <Text>{company.address_country}</Text>
                    <Text>{company.address_post_code}</Text>
                    <Text>{company.vat_number}</Text>
                    <Text>{company.tax_number}</Text>
                </Flex>
                <Flex flexDir="row" justify="space-between" alignItems="end">
                    <Button size="sm" colorScheme="blue">Edit</Button>
                    <Button size="sm" colorScheme="red">Delete</Button>
                </Flex>

            </Flex>
        </GridItem>
    )
}
