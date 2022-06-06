import React, { useState } from 'react'
import {
    Grid,
    GridItem,
    Flex,
    IconButton,
    Collapse,
    Button,
    Text,
    Link as ChakraLink,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerBody,
    DrawerHeader,
    DrawerContent
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCopy,
    FiSettings,
    FiGrid,
    FiLayers,
    FiBriefcase
} from 'react-icons/fi'
import { HamburgerIcon } from '@chakra-ui/icons'
import NavItem from '../components/SideBar/NavItem'

export default function withSideBarLayout () {
    const [navSize, changeNavSize] = useState("large")
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    <Grid
        templateAreas={
            `"nav header"
            "nav main"
            "nav footer"`
        }
        gridTemplateRows={'80px 1fr 40px'}
        gridTemplateColumns={['0 1fr', navSize =="small" ? "100px 1fr" : '300px 1fr']}
        transition="all 0.1s"
        gap='1'
        color='blackAlpha.700'
        minH="100vh"
        m={1}
    >
        <GridItem bg='orange.300' ml={[12, 0]} w='auto' area={'header'}>
            <Flex h="full" justifyContent='flex-end' alignItems='center'>
                Header
            </Flex>
        </GridItem>
        <GridItem 
            area={['header', 'nav']}
            bg='grey.50' 
            w={navSize == "small" ? "100px" : ['10%', '100%']}
        >
        <Flex
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            rounded="sm"
            flexDir="column"
            justifyContent="space-between"
            bg="grey.100"
            minH="auto"

        >
            <Flex
                // pl="10px"
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
            <IconButton
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
        </GridItem>
        <GridItem bg='green.300' area={'main'}>
        Main
        </GridItem>
        <GridItem bg='blue.300' area={'footer'}>
        Footer
        </GridItem>
    </Grid>
    )
}
