import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import { ApolloProvider } from "@apollo/react-hooks";
import client from 'ApolloClient/client'
import Layout from '@/components/App/Layout'
import Navbar from '@/components/App/Navbar'

function Home(props) {
  console.log(props.data,"dataaaa")
  const metaDetails=props.seo
  return (
    <ApolloProvider client={client}>
    <Layout pageName="home">
      <Navbar />
    </Layout>
  </ApolloProvider>
    // <>
    //   <Head>
    //     <title>{metaDetails.title}</title>
    //     <meta name="description" content={metaDetails.meta_description}/>
    //     <meta name="keywords" content={metaDetails.meta_keyword}/>
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
     
    //  <main className={styles.main}>
    //    <h1> welcome</h1>
    //      <h2>{props.data.email}</h2> 
    //   </main> 
  )
}
export default Home;
export async function getServerSideProps() {
  const res = await fetch(`https://api.cybercomcreation.com/address`)
  // const seo =await fetch(`http://192.168.0.204:1330/seo-rest`)
  // const seoData = await fetch('http://192.168.0.204:1330/seo-rest');
  
    // Pass data to the page via props
   return { props: {
                      data :await res.json(),
                      // seo :await seoData.json()
                    } 
          }
}

