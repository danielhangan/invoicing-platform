import React, { useEffect, useContext, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import {
    FormControl,
    FormHelperText,
    FormLabel,
    Flex,
    Input,
    InputGroup,
    InputLeftAddon,
    Text
} from '@chakra-ui/react'
import { InvoiceContext } from '../../layouts/InvoiceLayout'

const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Input 
        size="sm" 
        w={48}
        className="example-custom-input" 
        onClick={onClick}
        ref={ref} 
        value={value}
        onChange={() => value}
        placeholder={new Date().toISOString().split("T")[0]}
    />
))
export const DueDatePicker = ( { view_mode } ) => {
    const { duedate, setDuedate } = useContext(InvoiceContext)

    return (
        <Flex>
        {view_mode === 'edit' ? 
        <FormControl isRequired>
            <InputGroup size="md" alignItems="center" gap={2}>
            <InputLeftAddon size="md" bg="white" p={1} children="Due Date:" fontWeight="semibold" rounded="lg" border='none' />
            <DatePicker 
                selected={duedate}
                onChange={(date) => setDuedate(date)}
                isClearable={true}
                isRequired={true}
                customInput={<ExampleCustomInput />} 
            />
            </InputGroup>
        </FormControl>
        :
        <Flex flexDir="row" gap={2}>
            <Text fontWeight="semibold">Due Date:</Text>
            <Text>{duedate.toISOString().split("T")[0]}</Text>
        </Flex>
        }
        </Flex>
    );
}
