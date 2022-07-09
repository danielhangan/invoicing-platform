import { ChakraProvider } from "@chakra-ui/react";
import theme from '../styles/theme'
import { pageview } from '../lib/gtag'
import { META } from '../config'
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SessionProvider } from 'next-auth/react'
import "react-datepicker/dist/react-datepicker.css";


export default function MyApp({ Component, pageProps: { session, ...pageProps }}) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{META.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>

    </>
  );
}