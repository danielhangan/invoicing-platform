import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import { getSession } from 'next-auth/react'
import axios from 'axios'

export default function Dashboard ({ user_data }) {
  return (
      <DashboardLayout>
        <h1>{user_data.profile.full_name}</h1>
        <div>dashboard</div>
      </DashboardLayout>
      
  )
}


export async function getServerSideProps (ctx) {
    const session = await getSession(ctx)

    const user_data = {}
    await fetch(`http://localhost:3000/api/users/register/${session?.user?.email}`)
      .then(async (res) => {

        // Creating new User
        if (res.status === 400) {
          const new_user = axios.post(`${process.env.BASE_URL}/users/`, 
          {
            "email": session?.user?.email,
            "full_name": session?.user?.name
          },
          {
            headers: {
                Authorization: `Bearer ${process.env.AUTH_SECRET}`
            }
          }
          ).then((data) => {
            return {
              redirect: {
                permanent: false,
                destination: "/dashboard"
              }
            }
          }).catch((err) => {
            console.log(err)
          })
        }

        if (res.status === 200) {
          Object.assign(user_data, await res.json())
        }
      })
      .catch((err) => {
        console.log("err in /dashboard ssr", err)
      })

  return {
    props: {
      user_data: user_data
    }
  }
}
