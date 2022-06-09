import React, { Children, useState } from 'react'
import {
    Grid,
    GridItem,
    Flex,
    IconButton,
    HStack,
    Icon,
    Text,
    Link as ChakraLink,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerBody,
    DrawerHeader,
    DrawerContent,
    useColorModeValue
} from '@chakra-ui/react'
import {
    FiMenu,
    FiGrid,
    FiLayers,
    FiBriefcase,
    FiHeart
} from 'react-icons/fi'
import { HamburgerIcon } from '@chakra-ui/icons'
import NavItem from '../components/SideBar/NavItem'
import { ProfileMenu } from '../components/Header/ProfileMenu'
import { ThemeToggler } from '../components/Header/ThemeToggler'
import Link from 'next/link'

export default function DashboardLayout ({ children }) {
    const [navSize, changeNavSize] = useState("large")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const sidebarbg = useColorModeValue('grey.100', 'grey.600')
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
        // gap='1'
        color='blackAlpha.700'
        minH="100vh"
        m={1}
    >
        <GridItem alignItems="right" ml={[12, 0]} w='auto' area={'header'} bg="grey.50">
            <HStack justify="right" spacing={4} mr={4}>
                <ProfileMenu />
                <ThemeToggler />
            </HStack>
        </GridItem>
        <GridItem 
            area={['header', 'nav']}
            w={navSize == "small" ? "100px" : ['10%', '100%']}
        >
        <Flex
            boxShadow="2xl"
            flexDir="column"
            pos="sticky"
            justifyContent="space-between"
            minH="full"
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
            <IconButton
                    aria-label="Open Menu"
                    mt={4}
                    color="gray.100"
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
        <GridItem area={'main'} bg="grey.50">
            {children}
        </GridItem>
        <GridItem area={'footer'} bg="grey.50">
        <Flex flexDir="row" justify="center">
                <Text>Built with</Text>
                <Icon mx={1} color="grey.900" as={FiHeart} />
                <ChakraLink href="https://github.com/danielhangan" isExternal>
                    <Text>by Daniel Hangan</Text>
                </ChakraLink>
        </Flex>
        </GridItem>
    </Grid>
    )
}
