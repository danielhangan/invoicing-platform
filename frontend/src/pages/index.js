import React from 'react'
import { getProviders } from 'next-auth/react'
import LoginProviders from '../components/Authentification/Login'

export default function Home({ providers }) {

  return (
    <LoginProviders providers={providers}/>
  )
}


export async function getServerSideProps(ctx) {
  return { props: { providers: await getProviders()}}
}