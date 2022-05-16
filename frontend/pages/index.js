import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  return (
    <div>
      Invoice Platform
      {data.map((user) => (
        <div>
          {user.first_name}
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://127.0.0.1:8000/api/users`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
