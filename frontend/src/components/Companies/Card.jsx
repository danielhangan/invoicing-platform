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
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Spinner } from '@chakra-ui/react'
import { EditCardModal } from './EditCardModal'

export const CompanyCard = ({ company_data }) => {
    const [company, setCompany] = useState({});
    const [deletecompany, setDeletecompany] = useState(false);
    const {data: session} = useSession();
    const router = useRouter();

    useEffect(() => {
        setCompany(company_data)
    }, [company_data])

    const DeleteCompany = async () => {
        setDeletecompany(true)
        await fetch(`/api/companies/delete/`, {
            method: 'DELETE',
            body: JSON.stringify({
                "user_email": session?.user?.email,
                "company_id": company.company_id
            })
        }).then((res) => {
            setDeletecompany(false)
            router.replace(router.asPath)
            })
            .catch((err) => {
                console.log(err)
            })
    }
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
                    <EditCardModal company_info={company} />
                    {deletecompany ? 
                    <Button disabled="True" size="sm" colorScheme="red"><Spinner size='sm' mr={3}/>Delete</Button>
                    :
                    <Button onClick={DeleteCompany} size="sm" colorScheme="red">Delete</Button>
                    }
                </Flex>

            </Flex>
        </GridItem>
    )
}
