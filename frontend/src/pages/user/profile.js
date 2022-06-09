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
import { useRouter } from 'next/router'
import { LoadingSpinner } from '../../components/Spinner'
import DashboardLayout from '../../layouts/DashboardLayout'
import { AccountSettings } from '../../components/User/AccountSettings'


export default function Profile ({ user_profile }) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    const router = useRouter()

    useEffect(() => {
        if (user_profile.email != "invalid") {
            setLoading(false)
            setUser(user_profile)
        } else {
            router.push("/login")
        }
      }, [user_profile])
    
    console.log(user)
    return (
        <Box h="full">
            {loading ? <LoadingSpinner />: 
            <Box h='full'>
                <DashboardLayout>
                    <AccountSettings user_data={user} />
                </DashboardLayout>
            </Box>
            }
        </Box>
    )
}



export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    let user_profile = null

    await axios.post(`${process.env.BASE_URL}/users/profile/${session?.user?.email}`)
        .then((res) => {
           user_profile = Object.assign(res.data, user_profile)
            return {
                props: {
                    user_profile
                },
            }
        })
        .catch((error) => {
            user_profile = Object.assign({email: "invalid"}, user_profile)
        })
    return {
      props: {
          user_profile
      },
    }
  }