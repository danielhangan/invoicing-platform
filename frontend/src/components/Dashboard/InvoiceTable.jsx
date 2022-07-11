import React, { useMemo, useState, useEffect } from 'react'
import { useTable, useSortBy } from 'react-table'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Flex,
    Button,
    Icon,
    chakra
} from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { FiMoreVertical } from 'react-icons/fi'
import { TableStatusButton } from './TableStatusButton'

export const InvoiceTable = ({ invoices, status }) => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        const processedInvoice = []
        invoices.map((invoice) => {
            const invoice_total = 0
            const tempInvoice = {
                customer: invoice.billed_company_name,
                invoice_number: invoice.invoice_code,
                service_period: `${invoice.service_date_from} - ${invoice.service_date_to}`,
                due_date: invoice.due_date,
                created_at: invoice.created_at,
                status: invoice.status.name,
            }
            invoice.items.map((item) => {
                invoice_total += (item.quantity * item.price)
            })
            tempInvoice.total_amount = invoice_total * (1 - invoice.vat_rate / 100)
            processedInvoice.push(tempInvoice)
        })
        setTableData(processedInvoice)

    }, [invoices])

    const data = useMemo(() => [...tableData], [tableData])
    const columns = useMemo(
        () => [
            {
                Header: 'Customer',
                accessor: 'customer'
            },
            {
                Header: 'Invoice #',
                accessor: 'invoice_number'
            },
            {
                Header: 'Service Period',
                accessor: 'service_period'
            },
            {
                Header: 'Due Date',
                accessor: 'due_date'
            },
            {
                Header: 'Created At',
                accessor: 'created_at'
            },
            {
                Header: 'Status',
                accessor: 'status'
            },
            {
                Header: 'Amount',
                accessor: 'total_amount'
            },
        ],
        []
    )

    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: 'Action',
                Header: 'Action',
                Cell: ({ row }) => (
                    <Button size="sm">
                        <Icon as={FiMoreVertical} />
                    </Button>
                )

            }
        ])
    }
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        } = useTable({ columns, data }, useSortBy, tableHooks)


    return (
    <Table {...getTableProps()} size="md" mx={6}>
        <Thead>
        {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, idx) => (
                <Th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
                key={idx}
                >
                {column.render('Header')}
                <chakra.span pl='4'>
                    {column.isSorted ? (
                    column.isSortedDesc ? (
                        <TriangleDownIcon aria-label='sorted descending' />
                    ) : (
                        <TriangleUpIcon aria-label='sorted ascending' />
                    )
                    ) : null}
                </chakra.span>
                </Th>
            ))}
            </Tr>
        ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
            prepareRow(row)
            return (
            <Tr {...row.getRowProps()} h="3rem">
                {row.cells.map((cell, idx) => (
                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                    {cell.column.id === 'status' ? <TableStatusButton status_value={cell.render('Cell')} /> : cell.render('Cell')}
                </Td>
                ))}
            </Tr>
            )
        })}
        </Tbody>
    </Table>
    )
}
