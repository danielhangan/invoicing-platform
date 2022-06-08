import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerHeader,
    DrawerContent,
    HamburgerIcon,
    useDisclosure,
    Link as ChakraLink
} from '@chakra-ui/react'
import {
    FiMenu,
    FiGrid,
    FiLayers,
    FiBriefcase
} from 'react-icons/fi'
import NavItem from './NavItem'

export default function Sidebar() {

    const [navSize, changeNavSize] = useState("large")
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            rounded="sm"
            flexDir="column"
            justifyContent="space-between"
            bg="grey.100"
            minH="auto"
        >
             <Flex
                px={3}
                flexDir="column"
                h="100%"
                minH="100vh"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
                display={['none', 'flex', 'flex', 'flex']}
            >
                 <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiGrid} title="Dashboard" />
                <NavItem navSize={navSize} icon={FiLayers} title="Projects" />
                <NavItem navSize={navSize} icon={FiBriefcase} title="Companies" />
            </Flex>
        //     <IconButton
                    aria-label="Open Menu"
                    bg="grey.300"
                    icon={<HamburgerIcon />}
                    display={['flex', 'none', 'none', 'none']}
                    onClick={onOpen}
                />
            {/* Mobile */}
            <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
                <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                <DrawerBody>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}