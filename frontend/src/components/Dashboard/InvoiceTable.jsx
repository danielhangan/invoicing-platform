import React, { useMemo, useState, useEffect } from 'react'
import { useTable, useSortBy, usePagination,  useAbsoluteLayout } from 'react-table'
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
    chakra,
    Box,
    Tfoot,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    EditIcon,
    IconButton,
    Cell
} from '@chakra-ui/react'
import { DeleteIcon, TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { FiMoreVertical } from 'react-icons/fi'
import { TableStatusButton } from './TableStatusButton'
import { useRouter } from 'next/router'

export const InvoiceTable = ({ invoices }) => {
    const [tableData, setTableData] = useState([])
    const router = useRouter()

    useEffect(() => {
        const processedInvoice = []
        invoices.map((invoice) => {
            const invoice_total = 0
            const tempInvoice = {
                invoice_id: invoice.invoice_id,
                customer: invoice.billed_company_name,
                invoice_number: invoice.invoice_code,
                service_period: `${invoice.service_date_from} - ${invoice.service_date_to}`,
                due_date: invoice.due_date,
                created_at: `${invoice.created_at.split("T")[0]}`,
                status: invoice.status.name,
                
            }
            invoice.items.map((item) => {
                invoice_total += (item.quantity * item.price)
            })
            tempInvoice.total_amount = `$ ${(invoice_total * (1 - invoice.vat_rate / 100)).toLocaleString('en-US')}`
            processedInvoice.push(tempInvoice)
        })
        setTableData(processedInvoice)

    }, [invoices])

    const DeleteInvoice = async (invoice_id) => {
        await fetch(`api/invoices/${invoice_id}`, {
            method: 'DELETE'
        }).then((res) => {
            console.log(res)
            router.replace(router.asPath)
        }).catch((err) => {
            console.log(err)
        })

    }

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
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<FiMoreVertical />}
                            variant="outline"
                        />
                        <MenuList>
                            <MenuItem Icon={<EditIcon />} onClick={() => router.push(`/invoices/edit/${row.original.invoice_id}`)}>Edit</MenuItem>
                            <MenuItem Icon={<DeleteIcon />} onClick={() => {DeleteInvoice(row.original.invoice_id)}}>Delete</MenuItem>
                        </MenuList>
                    </Menu>
                )

            }
        ])
    }

    const defaultColumn = React.useMemo(
        () => ({
            width: 150,
        }),
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
        } = useTable({ 
            columns,
            data,
            defaultColumn,
            initialState: { pageIndex: 0, pageSize: 5 }
         }, useSortBy, tableHooks, usePagination)


    return (
    <>
    <Table {...getTableProps()}>
        <Thead>
        {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, idx) => (
                <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                    key={idx}
                    fontWeight="bold"
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
        {page.map((row, i) => {
            prepareRow(row)
            return (
            <Tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell, idx) => (
                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric} key={idx}>
                    {cell.column.id === 'status' ? <TableStatusButton status_value={cell.render('Cell')} /> : cell.render('Cell')}
                </Td>
                ))}
            </Tr>
            )
        })}
        </Tbody>
    <Tfoot w="100%">
        <Tr>
            <Th></Th>
            <Th></Th>
            <Th></Th>
            <Th></Th>
            <Th></Th>
            <Th>
                <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </Button>
                <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
                </Button>{' '}
            </Th>
            <Th>
                <chakra.span px={2}>
                <Box fontWeight='bold'>
                    Page{' '}
                    {pageIndex + 1} of {pageOptions.length}
                </Box>{' '}
                </chakra.span>
            </Th>
            <Th>
                <Button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
                </Button>{' '}
                <Button onClick={() => gotoPage(pageCount -1)} disabled={!canNextPage}>
                    {'>>'}
                </Button>
            </Th>
        </Tr>
    </Tfoot>
    </Table>
    </>
    )
}
