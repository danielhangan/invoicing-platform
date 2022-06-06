import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton
} from '@chakra-ui/react'

export default function NavItem({ icon, title, active, navSize }) {
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
                    p={2}
                    rounded="sm"
                    _hover={{ textDecor: 'none', backgroundColor: "gray.200" }}
                    w={navSize == "large" && "100%"}
                    alignItems='center'
                    display='flex'
                >
                    <MenuButton w="100%" alignItems='center'>
                        <Flex alignItems='center'>
                            <Icon as={icon} fontSize="md" color={active ? "#82AAAD" : "gray.500"} />
                            <Text ml={5} fontSize="sm" display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}