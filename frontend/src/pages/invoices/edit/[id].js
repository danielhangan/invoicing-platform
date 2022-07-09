import React, { useState, createContext, useEffect } from 'react'
import { 
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  Icon,
  Divider,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { ServiceDateRangePicker } from '../../../components/Invoices/ServiceDateRangePicker'
import { DueDatePicker } from '../../../components/Invoices/DueDatePicker'
import { LoadingSpinner } from '../../../components/Spinner'
import { FiUpload } from 'react-icons/fi'
import { IssuerAddress } from '../../../components/Invoices/IssuerAddress'
import { BilledAddress } from '../../../components/Invoices/BilledAddress'
import { InvoiceItems } from '../../../components/Invoices/Items'
import { FiArrowLeft, FiSend, FiChevronDown } from 'react-icons/fi'
import { useRouter } from 'next/router'

export const InvoiceContext = createContext(null)

export default function EditInvoice ({ invoice_info }) {
  const router = useRouter()
  console.log(invoice_info)
  const [servicedate, setServicedate] = useState([null, null])
  const [duedate, setDuedate] = useState(new Date())
  const [issuer_email, setIssuer_email] = useState('')
  const [invoicecode, setInvoicecode] = useState('')
  const [invoice_id, setInvoice_id] = useState(0);
  const [issuer_address_city, setIssuer_address_city] = useState('')
  const [issuer_address_country, setIssuer_address_country] = useState('')
  const [issuer_address_post_code, setIssuer_address_post_code] = useState('')
  const [issuer_address_street, setIssuer_address_street] = useState('')
  const [issuer_company_name, setIssuer_company_name] = useState('')
  const [issuer_tax_number, setIssuer_tax_number] = useState('')
  const [issuer_vat_number, setIssuer_vat_number] = useState('')
  const [billed_email, setBilled_email] = useState('')
  const [billed_address_city, setBilled_address_city] = useState('')
  const [billed_address_country, setBilled_address_country] = useState('')
  const [billed_address_post_code, setBilled_address_post_code] = useState('')
  const [billed_address_street, setBilled_address_street] = useState('')
  const [billed_company_name, setBilled_company_name] = useState('')
  const [billed_tax_number, setBilled_tax_number] = useState('')
  const [billed_vat_number, setBilled_vat_number] = useState('')
  const [items, setItems] = useState([])
  const [editInvoiceCode, setEditInvoiceCode] = useState(false)
  const [vatrate, setVatrate] = useState(0)

  useEffect(() => {
    console.log(invoice_info.data)
    // setServicedate(new Date(invoice_info.data.service_date_from), new Date(invoice_info.data.service_date_to))
    setDuedate(new Date(invoice_info.data.due_date))
    setInvoice_id(invoice_info.data.invoice_id)
    setInvoicecode(invoice_info.data.invoice_code)
    setIssuer_email(invoice_info.data.issuer_email)
    setIssuer_address_city(invoice_info.data.issuer_address_city)
    setIssuer_address_country(invoice_info.data.issuer_address_country)
    setIssuer_address_post_code(invoice_info.data.issuer_address_post_code)
    setIssuer_address_street(invoice_info.data.issuer_address_street)
    setIssuer_company_name(invoice_info.data.issuer_company_name)
    setIssuer_tax_number(invoice_info.data.issuer_tax_number)
    setIssuer_vat_number(invoice_info.data.issuer_vat_number)
    setBilled_email(invoice_info.data.billed_email)
    setBilled_address_city(invoice_info.data.billed_address_city)
    setBilled_address_country(invoice_info.data.billed_address_country)
    setBilled_address_post_code(invoice_info.data.billed_address_post_code)
    setBilled_address_street(invoice_info.data.billed_address_street)
    setBilled_company_name(invoice_info.data.billed_company_name)
    setBilled_tax_number(invoice_info.data.billed_tax_number)
    setBilled_vat_number(invoice_info.data.billed_vat_number)
    setItems(invoice_info.data.items)
    setVatrate(invoice_info.data.vat_rate)

  }, [invoice_info])

  if (invoice_info.data === "not found") {
    return (
      <Box bg="grey.100">
        <LoadingSpinner />
      </Box>
    )
  }

  return (
    <InvoiceContext.Provider value={{
      servicedate,
      setServicedate,
      duedate,
      setDuedate,
      issuer_address_city,
      setIssuer_address_city,
      issuer_address_country,
      setIssuer_address_country,
      issuer_address_post_code,
      setIssuer_address_post_code,
      issuer_address_street,
      setIssuer_address_street,
      issuer_company_name,
      setIssuer_company_name,
      issuer_tax_number,
      setIssuer_tax_number,
      issuer_vat_number,
      setIssuer_vat_number,
      billed_address_city,
      setBilled_address_city,
      billed_address_country,
      setBilled_address_country,
      billed_address_post_code,
      setBilled_address_post_code,
      billed_address_street,
      setBilled_address_street,
      billed_company_name,
      setBilled_company_name,
      billed_tax_number,
      setBilled_tax_number,
      billed_vat_number,
      setBilled_vat_number,
      issuer_email,
      setIssuer_email,
      billed_email,
      setBilled_email,
      invoice_id,
      items,
      setItems,
      vatrate,
      setVatrate
    }}>
    <Box bg="grey.100">
    <Box p={4}>
      <Icon 
        as={FiArrowLeft} 
        w={6} 
        h={6}
        _hover={{w: 7, h: 7}}
        onClick={() => router.push("/dashboard")}
      /> 
    </Box>
    <Grid templateColumns='repeat(4, 1fr)' gap={6} p={12}>
      <GridItem minW="100vh" minH="100vh" colSpan={3} rounded="lg" p={6} bg="white">
        <Flex flexDir={['column', 'row']} justify="space-between" align="center">
          <ServiceDateRangePicker />
          <Flex flexDir="column" justify="center" align="center" gap={4} mb={4}>
            <Icon w={12} h={12} color="grey.500" boxShadow="lg" p={2} mt={0} rounded="xl" as={FiUpload} />
            <Flex flexDir="row" fontSize="2xl" fontWeight="semibold" alignItems="center" justifyContent="center">
              <Text>Invoice #</Text>
              {editInvoiceCode ? 
              <Input 
                value={invoicecode}
                onChange={(e) => setInvoicecode(e.target.value)}
                onBlur={() => setEditInvoiceCode(false)}
                size="sm"
                w="20%"
                type="text"
                placeholder="001"
                bg="grey.100"
                fontWeight="normal"
                fontSize="2xl"
              />
              :
              <Text onClick={() => setEditInvoiceCode(true)} color="grey.400">{invoicecode ? invoicecode : setInvoicecode("001")}</Text>
            }
            </Flex>
          </Flex>
          <DueDatePicker />
        </Flex>
        <Divider />
        <Grid templateColumns='repeat(2, 1fr)' minH="30vh" gap={6} mt={8} mb={4}>
          <GridItem colSpan={1} h="100%">
            <IssuerAddress />
          </GridItem>
          <GridItem colSpan={1}>
            <BilledAddress />
          </GridItem>
        </Grid>
        <Divider />
        <InvoiceItems />
      </GridItem>
      <GridItem colSpan={1} w="70%">
        <Button colorScheme='blue' w="100%" size="sm" py={5}>
          <Icon mr={1} as={FiSend}/>
          Send Invoice
        </Button>
        <Flex flexDir="row" justifyContent="space-between" my={2}>
          <Button bg="white" w="48%" size="sm" py={5}>Preview</Button>
          <Button bg="white" w="48%" size="sm" py={5}>Download</Button>
        </Flex>
        <Divider />
        <Flex flexDir="column" my={2}>
          <Text>Currency</Text>
          <Menu>
            <MenuButton as={Button} bg="white" w="100%" size="sm" py={5} rightIcon={<FiChevronDown />}>
              USD
            </MenuButton>
            <MenuList w="100%">
              <MenuItem w="100%">USD</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </GridItem>
    </Grid>
    </Box>
    </InvoiceContext.Provider>
  )
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/invoices/${params.id}`,{method: "GET"})
  const invoice_info = {}
  if (res.status === 200) {
    Object.assign(invoice_info, {data: await res.json()})
  } else {
    Object.assign(invoice_info, {data: "not found"})
  }

  return {
    props: {
      invoice_info,
    },
    revalidate: 60 * 60,
  }
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/invoices/',{method: "GET"})
  const invoices = await res.json()

  const paths = invoices.map((invoice) => ({
    params: { id: invoice.invoice_id.toString() }
  }))

  return { paths, fallback: 'blocking'}
}