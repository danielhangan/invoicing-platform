import React, { useState } from 'react'
import {
    Flex,
    VStack,
    Text,
    Button,
    Box,
    Heading,
    Icon,
    useColorModeValue,
    Image,
    Spacer,
    HStack,
    Input,
    InputLeftAddon,
    InputGroup
} from '@chakra-ui/react'
import {
    FiArrowLeft,
    FiEdit,
    FiSave
} from 'react-icons/fi'
import Link from 'next/link'
import { useSession } from 'next-auth/react'


export const AccountSettings = ({ user_data }) => {
    const { data: session } = useSession()
    const [edit, setEdit] = useState(false)
    const textColorMode = useColorModeValue('grey.700', 'grey.200')
    console.log(edit)
    return (
            <Flex m={4}>

            <VStack w="full" spacing={12} align='flex-start'>
            <HStack w="full" pr={3} justifyContent="space-between">
                <Link href="/dashboard">
                <Button color='ghost' variant='link'>
                    <Icon w={5} h={5} color={textColorMode} as={FiArrowLeft} />
                    <Text fontSize="sm" textColor={textColorMode} ml={2}>Dashboard</Text>
                </Button>
                </Link>
                {edit ? 
                <Button onClick={() => setEdit(!edit)} flexDir="row" size="sm" alignItems="center" justifyItems="center" rounded="md">
                    <Icon as={FiEdit} />
                    <Text pl={2}>Edit</Text>
                </Button>
                :
                <Button onClick={() => setEdit(!edit)} color="teal" variant="outline" flexDir="row" size="sm" alignItems="center" justifyItems="center" rounded="md">
                    <Icon as={FiSave} />
                    <Text pl={2}>Save</Text>
                </Button>
            }

            </HStack>
            {!edit ? 
            <HStack minW="100vh" px={7} w="full" justifyContent="space-between">
                <Flex flexDir="column" minH="100vh" justifyContent="start">
                    <Heading size="md" mb={4} textColor={textColorMode}>My Profile</Heading>
                    <Flex flexDir='row'>
                        <Box mr={4}>
                            <Image rounded='lg' w="fit" h="fit" src={session?.user?.image} alt='user image' />
                        </Box>
                        <VStack align='left'>
                            <Heading size="xs" textColor={textColorMode}>{user_data.profile.full_name}</Heading>
                            <Text fontSize="md">Full Name: {user_data.profile.full_name}</Text>
                            <Text fontSize="md">Email: {user_data.profile.email}</Text>
                            <InputGroup size="sm">
                                <InputLeftAddon children="Profession" />
                                <Input size="sm" width="auto" value={user_data.profile.profession} placeholder="profession" />
                            </InputGroup>
                        </VStack>
                    </Flex>
                </Flex>
                <Flex h="full" justifyContent='start' flexDir='column'>
                    <Heading size="md" mb={4} textColor={textColorMode}>Company Profile</Heading>
                    <VStack align='left'>
                        <Heading size="xs" textColor={textColorMode}>{user_data.company.company_name}</Heading>
                        <Text fontSize="md">Homepage: {user_data.company.url}</Text>
                        <Text fontSize="md">Country: {user_data.company.address_city + " " + user_data.company.address_country}</Text>
                        <Text fontSize="md">Address: {user_data.company.address_street + ", " + user_data.company.post_code}</Text>
                        <Text fontSize="md">Vat Number: {user_data.company.vat_number}</Text>
                        <Text fontSize="md">Tax Number: {user_data.company.tax_number}</Text>
                        <Text fontSize="md">Founded On: {user_data.company.founded_on}</Text>
                    </VStack>
                </Flex>

            </HStack>
            : 
            <HStack minW="100vh" px={7} w="full" justifyContent="space-between">
                <Flex flexDir="column" minH="100vh" justifyContent="start">
                    <Heading size="md" mb={4} textColor={textColorMode}>My Profile</Heading>
                    <Flex flexDir='row'>
                        <Box mr={4}>
                            <Image rounded='lg' w="fit" h="fit" src={session?.user?.image} alt='user image' />
                        </Box>
                        <VStack align='left'>
                            <Heading size="xs" textColor={textColorMode}>{user_data.profile.full_name}</Heading>
                            <Text fontSize="md">Full Name: {user_data.profile.full_name}</Text>
                            <Text fontSize="md">Email: {user_data.profile.email}</Text>
                            <Text fontSize="md">Profession: {user_data.profile.profession}</Text>
                        </VStack>
                    </Flex>
                </Flex>
                <Flex h="full" justifyContent='start' flexDir='column'>
                    <Heading size="md" mb={4} textColor={textColorMode}>Company Profile</Heading>
                    <VStack align='left'>
                        <Heading size="xs" textColor={textColorMode}>{user_data.company.company_name}</Heading>
                        <Text fontSize="md">Homepage: {user_data.company.url}</Text>
                        <Text fontSize="md">Country: {user_data.company.address_city + " " + user_data.company.address_country}</Text>
                        <Text fontSize="md">Address: {user_data.company.address_street + ", " + user_data.company.post_code}</Text>
                        <Text fontSize="md">Vat Number: {user_data.company.vat_number}</Text>
                        <Text fontSize="md">Tax Number: {user_data.company.tax_number}</Text>
                        <Text fontSize="md">Founded On: {user_data.company.founded_on}</Text>
                    </VStack>
                </Flex>

            </HStack>
            }

            </VStack>
            </Flex>
  )
}
