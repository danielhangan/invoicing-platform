import React, { useContext, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import {
    FormControl,
    FormHelperText,
    FormLabel,
    Flex,
    Input,
    InputGroup,
    InputLeftAddon
} from '@chakra-ui/react'
import { InvoiceContext } from '../../layouts/InvoiceLayout'

const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Input 
        size="sm" 
        className="example-custom-input" 
        onClick={onClick}
        ref={ref} 
        value={value}
        onChange={() => value}
        placeholder={new Date().toISOString().split("T")[0]}
        />
))
export const DueDatePicker = () => {
    const { duedate, setDuedate } = useContext(InvoiceContext)

    return (
        <Flex>
        <FormControl isRequired>
            <InputGroup size="md" alignItems="center" gap={2}>
            <InputLeftAddon size="md" bg="white" p={1} children="Due Date:" rounded="lg" border='none' />
            <DatePicker 
                selected={duedate}
                onChange={(date) => setDuedate(date)}
                isClearable={true}
                isRequired={true}
                customInput={<ExampleCustomInput />} 
            />
            </InputGroup>
        </FormControl>
        </Flex>
    );
}
