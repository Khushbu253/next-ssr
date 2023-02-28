import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })


const About=({data})=>{
    console.log(data,"test dynamic data")
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
      }
    return (
        <>
          <Head>
            <title>about</title>
            <meta name="description" content=" about page create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            test about with getServerSideProps
             {/* <p>{data.addressLine1}</p>
            <p>{data.addressLine2}</p>  */}
          <p>{data.footerText}</p>
    
          </main>
        </>
      )
  }

export default About;
export async function getServerSideProps() { 
  const res = await fetch(`https://api.cybercomcreation.com/address`)
     const data = await res.json()
  
    // Pass data to the page via props
   return { props: {data} }
}

  