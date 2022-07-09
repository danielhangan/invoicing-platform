import React from 'react'
import { InvoiceLayout } from '../../../layouts/InvoiceLayout'


export default function EditInvoice ({ invoice_info }) {

  return (
    <InvoiceLayout invoice_mode='edit' invoice_info={invoice_info} />
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