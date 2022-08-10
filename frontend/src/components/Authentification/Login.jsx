import React, {useState, useEffect} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import {
  Flex,
  VStack,
  Text,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { useRouter } from "next/router"

export default function LoginProviders({ providers }) {
  const [useremail, setUseremail] = useState('')
  const { data: session } = useSession()
  const router = useRouter()

  if (session) {
    router.push("/dashboard")
  }
  return (
    <Flex
      minH="100vh"
      w="full"
      justifyContent="center"
      alignItems="center"
    >
    <Flex
      h="400px"
      w="500px"
      alignItems="center"
      justifyContent="center"
      boxShadow="md"
      bg="gray.50"
    >
    <VStack spacing={4}>
    <Heading mb={6}>Welcome to Open Invoice</Heading>
    <Flex flexDir="column" gap={2}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input value={useremail} onChange={(e) => setUseremail(e.target.value)} type='email' />
      </FormControl>
      <Flex flexDir="row" w="100%" gap={2} justify="center">
        <Button type="submit" size="md" px={9}>Login</Button>
        <Button type="submit" size="md" px={9}>Sign up</Button>
      </Flex>
    </Flex>
    <Text>Or using one of our auth providers</Text>
    {Object.values(providers).map((provider) => (
      <Flex key={provider.name} alignItems="center">
        <Button px={14} onClick={() => signIn(provider.id)}>Sign in with {provider.name}</Button>
      </Flex>
    ))}
    </VStack>
    </Flex>
    </Flex>
  )
}