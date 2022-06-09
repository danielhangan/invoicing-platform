import { 
  Flex,
  Text,
  Icon,
  Link as ChakraLink 
} from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import NextChakraLink from "./nextChakraLink";

export default function Footer() {
  return (
        <Flex flexDir="row" justify="center">
                <Text>Built with</Text>
                <Icon mx={1} color="grey.900" as={FiHeart} />
                  <NextChakraLink href="https://github.com/danielhangan" isExternal>
                    <Text>by Daniel Hangan</Text>
                  </NextChakraLink>
        </Flex>
  )
}
