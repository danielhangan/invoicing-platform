import { Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { ThemeToggler } from "./ThemeToggler";


export default function Header() {
	return (
		// <HStack
		// 	borderTop="5px #000000 solid"
		// 	justify="space-between"
		// 	px="50px"
		// 	py="10px"
		// 	as="header"
		// >
		// 	<Heading>Invocing Platform</Heading>
		// 	<Spacer />
		// </HStack>
		<Flex
			flexDir="row"
			justifyContent='right'
			// w="100%"
			alignItems='right'
		>
		 	<ThemeToggler />
		</Flex>
	);
}
