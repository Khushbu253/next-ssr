import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


function Home(props) {
  console.log(props.data,props.seo,"dataaaa")
  const metaDetails=props.seo
  // const metaDetails=props.seo.seoDetails.find((detail)=>detail.pageName==='home')
  // console.log(metaDetails,"meta")
  return (
    <>
      <Head>
        <title>{metaDetails.title}</title>
        <meta name="description" content={metaDetails.meta_description}/>
        <meta name="keywords" content={metaDetails.meta_keyword}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        welcome
        <h2>{props.data.email}</h2>
      </main>
    </>
  )
}
export default Home;
export async function getServerSideProps() { 
  const res = await fetch(`https://api.cybercomcreation.com/address`)
  const seo =await fetch(`http://192.168.0.204:1330/seo-rest`)
    // Pass data to the page via props
   return { props: {
                      data :await res.json(),
                      seo: await seo.json()
                    } 
          }
}

