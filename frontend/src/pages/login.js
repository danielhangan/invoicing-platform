import React from 'react'
import { getProviders, getSession } from 'next-auth/react'
import LoginProviders from '../components/Authentification/Login'
import axios from 'axios'

export default function Login ({ providers }) {
    return (
      <LoginProviders providers={providers} />
    )
}


export async function getServerSideProps(ctx) {
  const session = await getSession()
  console.log(session)
  await axios.get(`${process.env.BASE_URL}/users/profile/${session?.user?.email}`)
    .then((data) => {
      console.log(data.text)
    })
  return { props: { providers: await getProviders()}}
}