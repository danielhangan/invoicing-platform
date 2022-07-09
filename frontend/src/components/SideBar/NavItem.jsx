import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    useColorModeValue
} from '@chakra-ui/react'

export default function NavItem({ icon, title, redirect, active, navSize }) {
    const textColorMode = useColorModeValue('grey.700', 'grey.200')
    return (
        <Flex
            mt={5}
            flexDir="column"
            w="100%"
            h="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
            justifyContent='center'
        >
            <Menu placement='right' alignItems='center'>
                <Link
                    backgroundColor={active && "#cecece"}
                    px={3}
                    py={3}
                    rounded="lg"
                    _hover={{ textDecor: 'none', boxShadow: "sm" ,backgroundColor: "white"}}
                    w={navSize == "large" && "100%"}
                    alignItems='center'
                    display='flex'
                    href={redirect}
                >
                    <MenuButton w="100%" alignItems='center'>
                        <Flex alignItems='center'>
                            <Icon as={icon} fontSize="md" color={active ? "#82AAAD" : "gray.500"} />
                            <Text ml={5} fontSize="sm" textColor={textColorMode} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}