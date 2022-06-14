import React, {useState, useEffect} from 'react'
import { CompaniesLayout } from '../../layouts/CompaniesLayout'
import { getSession, useSession } from 'next-auth/react'
import {
    Box,
    Flex,
    Text,
    Grid,
} from '@chakra-ui/react'
import { CompanyCard } from '../../components/Companies/Card'
import { LoadingSpinner } from '../../components/Spinner'
import { AddCompanyModal } from '../../components/Companies/AddCompanyModal'

export default function Companies ({ companies }) {
    const [loading, setLoading] = useState(true)
    const [user_companies, setUsercompanies] = useState({})

    useEffect(() => {
        setLoading(false)
        setUsercompanies(companies)
      }, [companies])
    if (loading) {
        return (
            <LoadingSpinner />
        )
    }

    console.log(user_companies)
    return (
        <CompaniesLayout>
            {
                Object.keys(user_companies).length < 1 ? 
                <Flex>
                    <Text>Add Company</Text>
                </Flex>
                :
                <Flex flexDir="column" my={4} mx={12}>
                <Flex w="auto">
                   <AddCompanyModal />
                </Flex>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(4, 1fr)']} gap={6} ml={1} w="auto">
                    {Object.keys(user_companies).map((company, index) => (
                        <CompanyCard key={index} company_data={user_companies[company]} />
                    ))}
                </Grid>
                </Flex>
            }
        </CompaniesLayout>
    )
}


export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    const companies = {} 
    await fetch(`${process.env.BASE_URL}/companies/${session?.user?.email}`,
    {
        headers: {
            Authorization: `Bearer ${process.env.AUTH_SECRET}`
        }
    }
    ).then(async (data) => {
        Object.assign(companies, await data.json())
    }).catch((err) => {
        console.log(err)
    })
    return {
        props: {
            companies
        }
    }
}
