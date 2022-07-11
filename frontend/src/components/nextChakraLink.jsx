/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NextChakraLink(props) {
  return (
    <NextLink href={props.href} passHref>
      <Link
        {...props}
        _active={{ boxShadow: "none" }}
        _focus={{ boxShadow: "none" }}
        _hover={{ textDecoration: "underline" }}
      >
        {props.children}
      </Link>
    </NextLink>
  );
}
