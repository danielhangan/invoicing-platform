import { useSession, signIn, signOut } from "next-auth/react"
import {
  Box,
  Flex,
  VStack,
  Text,
  Heading,
  Button,
  Spacer
} from '@chakra-ui/react'
import { useRouter } from "next/router"

export default function LoginProviders({ providers }) {
  const { data: session } = useSession()
  const router = useRouter()

  if (session) {
    router.push("/user/profile")
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
    {Object.values(providers).map((provider) => (
      <Box key={provider.name} alignItems="center">
        <Button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</Button>
      </Box>
    ))}
    </VStack>
    </Flex>
    </Flex>
  )
}