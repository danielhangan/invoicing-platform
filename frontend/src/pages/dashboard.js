import React from 'react'
import {
  Button,
  Flex,
  Text,
} from '@chakra-ui/react'
import { InvoicesTableLayout } from '../layouts/InvoicesTableLayout'
import { getSession } from 'next-auth/react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Dashboard ({ user_data }) {
  const router = useRouter()
  
  const CreateNewInvoice = async () => {
    const new_invoice = await fetch("/api/invoices/create/", {
      method: 'POST',
      body: JSON.stringify({
        created_by_user: user_data.profile.email
      })
    }).then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
      <InvoicesTableLayout user_data={user_data} />
  )
}


export async function getServerSideProps (ctx) {
    const session = await getSession(ctx)

    const user_data = {}
    await fetch(`http://localhost:3000/api/users/register/${session?.user?.email}`)
      .then(async (res) => {

        // Creating new User
        if (res.status === 400) {
          const new_user = axios.post(`${process.env.BASE_URL}/users/`, 
          {
            "email": session?.user?.email,
            "full_name": session?.user?.name
          },
          {
            headers: {
                Authorization: `Bearer ${process.env.AUTH_SECRET}`
            }
          }
          ).then((data) => {
            return {
              redirect: {
                permanent: false,
                destination: "/dashboard"
              }
            }
          }).catch((err) => {
            console.log(err)
          })
        }

        if (res.status === 200) {
          Object.assign(user_data, await res.json())
          await axios.get(`${process.env.BASE_URL}/invoices/${session?.user?.email}`, {
            headers: {
                Authorization: `Bearer ${process.env.AUTH_SECRET}`
            }
          }
          ).then((data) => user_data['invoices'] = data.data)
        }
      })
      .catch((err) => {
        console.log("err in /dashboard ssr", err)
      })

  return {
    props: {
      user_data: user_data
    }
  }
}
