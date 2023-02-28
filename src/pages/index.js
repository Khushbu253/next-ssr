import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


function Home({data}) {
  console.log(data,"dataaaa")
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        welcome
        <h2>{data.email}</h2>
      </main>
    </>
  )
}
export default Home;
export async function getServerSideProps() { 
  const res = await fetch(`https://api.cybercomcreation.com/address`)
     const data = await res.json()
  
    // Pass data to the page via props
   return { props: {data} }
}

