import React from 'react'
import { Box, Text, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const ThemeToggler = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            textAlign="right"
            py={4}
            mr={12}
        >
            <IconButton 
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant='ghost'
            />
        </Box>
    )
}
