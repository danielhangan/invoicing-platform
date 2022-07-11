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
import NextChakraLink from '../components/nextChakraLink'
import { ServiceDateRangePicker } from '../components/Invoices/ServiceDateRangePicker'
import { DueDatePicker } from '../components/Invoices/DueDatePicker'
import { LoadingSpinner } from '../components/Spinner'
import { FiUpload } from 'react-icons/fi'
import { IssuerAddress } from '../components/Invoices/IssuerAddress'
import { BilledAddress } from '../components/Invoices/BilledAddress'
import { InvoiceItems } from '../components/Invoices/Items'
import { FiArrowLeft, FiSend, FiChevronDown } from 'react-icons/fi'
import { useRouter } from 'next/router'

export const InvoiceContext = createContext(null)

export const InvoiceLayout = ({ invoice_mode, invoice_info }) => {
  const router = useRouter()

  const [invoice_view_mode, setInvoice_view_mode] = useState('')
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

  useEffect(() => {setInvoice_view_mode(invoice_mode)}, [invoice_mode])

  useEffect(() => {
    setServicedate([new Date(invoice_info.data.service_date_from), new Date(invoice_info.data.service_date_to)])
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
      <Flex bg="grey.100" flexDir="column" position="fixed" w="100%" h="100%" justify="center" align="center">
        <Text fontSize="xl" fontWeight="semibold">Invoice Not Found</Text>
        <NextChakraLink href="/dashboard">
          <Flex flexDir="row" gap={1}>
            <Icon as={FiArrowLeft}/>
            <Text>Go Back</Text>
          </Flex>
        </NextChakraLink>
      </Flex>
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
      <GridItem minW="100vh" minH="100vh" colSpan={invoice_view_mode === 'edit' ? 3 : 4} rounded="lg" p={6} bg="white">
        <Flex flexDir={['column', 'row']} justify="space-between" align="center">
          <ServiceDateRangePicker view_mode={invoice_view_mode} />
          <Flex flexDir="column" justify="center" align="center" gap={4} mb={4}>
            <Icon w={12} h={12} color="grey.500" boxShadow="lg" p={2} mt={0} rounded="xl" as={FiUpload} />
            <Flex flexDir="row" fontSize="2xl" fontWeight="semibold" alignItems="center" justifyContent="center">
              <Text>Invoice #</Text>
              {invoice_view_mode === 'edit' ?
              <>
              {editInvoiceCode ? 
              <Input 
                value={invoicecode}
                onChange={(e) => setInvoicecode(e.target.value)}
                onBlur={() => setEditInvoiceCode(false)}
                size="sm"
                htmlSize={2}
                w='auto'
                type="text"
                placeholder="001"
                bg="grey.100"
                fontWeight="normal"
                fontSize="2xl"
                rounded="sm"
              />
              :
              <Text onClick={() => setEditInvoiceCode(true)} color="grey.400">{invoicecode ? invoicecode : setInvoicecode("001")}</Text>
            }
              </>
              :
              <Text color="grey.400">{invoicecode}</Text>
            }
            </Flex>
          </Flex>
          <DueDatePicker view_mode={invoice_view_mode} />
        </Flex>
        <Divider />
        <Grid templateColumns='repeat(2, 1fr)' minH="30vh" gap={6} mt={8} mb={4}>
          <GridItem colSpan={1} h="100%">
            <IssuerAddress view_mode={invoice_view_mode} />
          </GridItem>
          <GridItem colSpan={1}>
            <BilledAddress view_mode={invoice_view_mode} />
          </GridItem>
        </Grid>
        <Divider />
        <InvoiceItems view_mode={invoice_view_mode} />
      </GridItem>
      {invoice_view_mode === 'edit' ?
      <GridItem colSpan={1} w="100%">
        <Flex flexDir="column" w="100%">
        <Button colorScheme='blue' w="100%" size="sm" py={5}>
          <Icon mr={1} as={FiSend}/>
          Send Invoice
        </Button>
        <Flex flexDir="row" justifyContent="space-between" my={2}>
          <Button onClick={() => setInvoice_view_mode('preview')} bg="white" w="48%" size="sm" py={5}>Preview</Button>
          <Button bg="white" w="48%" size="sm" py={5}>Save</Button>
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
        </Flex>
      </GridItem>
      :
      null
      }
    </Grid>
    </Box>
    </InvoiceContext.Provider>
  )
}
