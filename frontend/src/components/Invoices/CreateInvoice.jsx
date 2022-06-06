import React from 'react'
import {
  Box,
  Text,
  HStack,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'

export const CreateInvoice = () => {
  const boxColor = useColorModeValue('grey.100', 'grey.600')
  const color = useColorModeValue('white', 'gray.800')
  return (
    <VStack
      bg={boxColor}
      h='full'
      mx={12}
    >
      <Box
        key="new_invoice_sender_address"
        alignItems='flex-start'
        m={4}
      >
        <Text>invoice</Text>
      </Box>
    </VStack>
  )
}
