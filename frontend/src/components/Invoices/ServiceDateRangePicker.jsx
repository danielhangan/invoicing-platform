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
    Button,
    Text
} from '@chakra-ui/react'
import { InvoiceContext } from '../../layouts/InvoiceLayout'

export const ServiceDateRangePicker = ({ view_mode }) => {
    const { servicedate, setServicedate } = useContext(InvoiceContext)
    const [startDate, endDate] = servicedate

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <Input 
            size="sm" 
            w={48}
            fontSize="sm"
            className="example-custom-input" 
            onClick={onClick}
            ref={ref} 
            value={value}
            onChange={() => value}
            placeholder='2022-01-01 - 2022-02-01'
            rounded="sm"
            />
    ))
    return (
        <Flex>
        {view_mode === 'edit' ? 
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
        :
        <Flex flexDir="row" gap={2}>
            <Text fontWeight="semibold">Service Date:</Text>
            {startDate && endDate ?
            <Text>{startDate.toISOString().split("T")[0]} - {endDate.toISOString().split("T")[0]}</Text>
            :
            <Text></Text>
            }
        </Flex>
        }
        </Flex>
    );
}
