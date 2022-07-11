import React from 'react'
import {
  Flex,
  Text,
  Button
} from '@chakra-ui/react'
import DashboardLayout from './DashboardLayout'
import { getSession } from 'next-auth/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { InvoiceTable } from '../components/Dashboard/InvoiceTable'


export const InvoicesTableLayout = ({ user_data, children }) => {
  const router = useRouter()

  const CreateNewInvoice = async () => {
    await axios.post("/api/invoices/create/", 
    {
      created_by_user: user_data.profile.email
    },
    {
      headers: {
          Authorization: `Bearer ${process.env.AUTH_SECRET}`
      }
    }).then((data) => {
      if (data.status == 201) {
        router.push(`/invoices/edit/${data.data.invoice_created}`)

      }
    }).catch((err) => {
      console.log(err)
    })
}
  return (
    <DashboardLayout>
      <Flex flexDir="column" gap={2}>
        <Flex flexDir="row" justify="space-between" align="center" my={4} mx={12}>
          <Flex align="center">
            <Text fontSize="2xl" fontWeight="semibold">Invoices</Text>
          </Flex>
          <Flex>
            <Button onClick={() => CreateNewInvoice()} size="sm" colorScheme="blue">New Invoice</Button>
          </Flex>
        </Flex>

        <Flex>
          <InvoiceTable invoices={user_data['invoices']} status='all' />
        </Flex>
      </Flex>
      {children}
    </DashboardLayout>
  )
}