import React, { useContext, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import {
    FormControl,
    FormHelperText,
    FormLabel,
    Flex,
    InputLeftAddon,
    InputGroup,
    InputRightElement,
    Input,
    Button
} from '@chakra-ui/react'
import { InvoiceContext } from '../../pages/invoices/edit/[id]'

export const ServiceDateRangePicker = () => {
    const { servicedate, setServicedate } = useContext(InvoiceContext)
    const [startDate, endDate] = servicedate

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <Input 
            size="sm" 
            fontSize="sm"
            className="example-custom-input" 
            onClick={onClick}
            ref={ref} 
            value={value}
            onChange={() => value}
            placeholder={new Date().toISOString().split("T")[0]}
            />
    ))
    return (
        <Flex>
        <FormControl isRequired>
            <InputGroup size="sm" alignItems="center" gap={2}>
            <InputLeftAddon size="sm" bg="white" p={1} children="Service Date:" rounded="lg" border='none' />
                <DatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {setServicedate(update)}} 
                    isClearable={true}
                    isRequired={true}
                    customInput={<ExampleCustomInput />}
                />
            </InputGroup>
        </FormControl>
        </Flex>
    );
}
