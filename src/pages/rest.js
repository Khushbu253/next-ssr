import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })


const Rest=({data})=>{
    console.log(data,"test dynamic data")
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
      }
    return (
        <>
          <Head>
            <title>Rest</title>
            <meta name="description" content="rest page create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            test about with getServerSideProps
           <p>{data.description}</p>
           <img src={data.images[0]} alt="demo image"/>
          </main>
        </>
      )
  }

export default Rest;
export async function getServerSideProps() { 
  const res = await fetch(`https://dummyjson.com/products/1`)
     const data = await res.json()
  
    // Pass data to the page via props
   return { props: {data} }
}

  