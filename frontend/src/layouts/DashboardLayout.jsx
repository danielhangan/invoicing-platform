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
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { LoadingSpinner } from '../components/Spinner'
import Footer from '../components/Footer'

export default function DashboardLayout ({ children }) {
    const router = useRouter()
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/login")
        }
    })
    const [navSize, changeNavSize] = useState("large")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const bgcolor = useColorModeValue("grey.50", "grey.50")

    if (status === 'loading') {
        return <LoadingSpinner />
    }

    return (
    <Grid
        templateAreas={
            `"nav header"
            "nav main"
            "nav footer"`
        }
        gridTemplateRows={'80px 1fr 40px'}
        gridTemplateColumns={['0 1fr', navSize === "small" ? "100px 1fr" : "200px 1fr", navSize =="small" ? "100px 1fr" : '300px 1fr']}
        transition="all 0.1s"
        minH="100vh"
        m={1}
    >
        <GridItem alignItems="right" ml={[12, 0]} area={'header'} bg="grey.50">
            <HStack justify="flex-end" w="-moz-available" position="fixed" spacing={4} mr={4}>
                    <ProfileMenu />
                    <ThemeToggler />
            </HStack>
        </GridItem>
        <GridItem 
            area={['header', 'nav']}
            w={navSize == "small" ? "10px" : ["100px", "200px", "300px"]}
            bg={bgcolor}
        >
        <Flex
            flexDir="column"
            position="fixed"
            justifyContent="space-between"
            // minH={["10px","full"]}
            minH="full"
            w={["10px", navSize === "small" ? "100px" : ["100px", "200px", "300px"]]}
            boxShadow={["", "2xl"]}
        >
            <Flex
                px={3}
                flexDir="column"
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
                <NavItem navSize={navSize} icon={FiGrid} redirect="/dashboard" title="Dashboard" />
                {/* <NavItem navSize={navSize} icon={FiLayers} redirect="/projects" title="Projects" /> */}
                <NavItem navSize={navSize} icon={FiBriefcase} redirect="/companies" title="Companies" />
            </Flex>
            <IconButton
                    aria-label="Open Menu"
                    mt={4}
                    ml={4}
                    size="md"
                    color="gray.500"
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
            <Footer />
        </GridItem>
    </Grid>
    )
}
