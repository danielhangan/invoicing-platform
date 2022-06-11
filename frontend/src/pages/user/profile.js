import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Box,
    Text,
    Flex,
    Spinner,
    VStack
} from '@chakra-ui/react'
import { getSession } from "next-auth/react"
import { LoadingSpinner } from '../../components/Spinner'
import DashboardLayout from '../../layouts/DashboardLayout'
import { AccountSettings } from '../../components/User/AccountSettings'
// import useSWR from 'swr'



export default function Profile ({ user_profile }) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})

    useEffect(() => {
        setLoading(false)
        setUser(user_profile)
      }, [user_profile])
    
    return (
        <DashboardLayout>
        <Box h="full">
            {loading ? <LoadingSpinner />: 
            <Box h='full'>
                <AccountSettings user_data={user} />
            </Box>
            }
        </Box>
        </DashboardLayout>
    )
}



export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    let user_profile = null

    await axios.get(`${process.env.BASE_URL}/users/profile/${session?.user?.email}`)
        .then((res) => {
           user_profile = Object.assign(res.data, user_profile)
            return {
                props: {
                    user_profile
                },
            }
        })
        .catch(async (error) => {
            if (error.response.data.detail === `User with email ${session?.user?.email} doesn't exist`) {
                console.log("create user")
                await axios.post(`${process.env.BASE_URL}/users/`, {
                    email: session?.user?.email,
                    full_name: session?.user?.name
                }).then((res) => {
                    const profile_payload = {
                        profile: {
                            email: session?.user?.email,
                            full_name: session?.user?.name,
                            profession: ""
                        },
                        company: {
                            company_name: null,
                            url: null,
                            address_street: null,
                            address_city: null,
                            address_country: null,
                            address_post_code: null,
                            vat_number: null,
                            tax_number: null,
                            founded_on: null,
                        }
                    }
                    user_profile = object.assign(profile_payload, user_profile)
                }).catch((err) => {
                    console.log(err)
                    user_profile = Object.assign({email: "invalid"}, user_profile)
                })
            }
        })
    
    return {
      props: {
          user_profile
      },
    }
  }