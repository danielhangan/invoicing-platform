import React from 'react'
import {
    Flex,
    Spinner
} from '@chakra-ui/react'

export const LoadingSpinner = () => {
  return (
    <Flex 
        justifyContent='center'
        alignItems='center'
        minH="100vh"
        w="full"
    >
        <Spinner size="lg" />
    </Flex>
  )
}
