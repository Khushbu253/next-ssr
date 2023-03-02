import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import { ApolloProvider } from "@apollo/react-hooks";
import client from 'ApolloClient/client'
import Layout from '@/components/App/Layout'
import Navbar from '@/components/App/Navbar'
import Banner from '@/components/index/Banner'

function Home(props) {
  console.log(props.footer,"footer data")
  return (
    <ApolloProvider client={client}>
    <Layout pageName="home">
      <Navbar />
      <Banner data={props.banner}/>
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
  console.log(process.env.NEXT_PUBLIC_GRAPHQL_API_URL,"env variable")
  try{
    const footer = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
    const banner = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}default-banner`);

    return{
      props:{
        footer: await footer.json(),
        banner: await banner.json(),
      }
    }
  }catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}

