import Footer from '@/components/App/Footer';
import Layout from '@/components/App/Layout';
import Navbar from '@/components/App/Navbar';
import PageBanner from '@/components/common/PageBanner';
import TechnologySection from '@/components/TechnologySection';
import Head from 'next/head';
import React from 'react'


const technology = (props) => {
  const metaDetails = props.seo.seoDetails.find((details)=>details.pageName==='technology')
  return (
  <>
  <Head>
        <title>Technology - Cybercom Creation</title>
        <meta name="title" content={metaDetails.metaTitle}/>
        <meta name="description" content={metaDetails.metaDescription}/>
        <meta name="keywords" content={metaDetails.metaKeywords}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout pageName="technology">
      <Navbar/>
      <PageBanner />
      <TechnologySection technologySection={props.technologySection}/>
      <Footer footer={props.footer} />
    </Layout>
  </>
  )
}
export default technology

export async function getServerSideProps() {
    try {
      const seo=  await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}seo`);
      const footer = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
      const technologySection = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}technology`);
        
      return {
        props: {
          seo: await seo.json(),
          footer: await footer.json(),
          technologySection: await technologySection.json()
        },
      };
    } catch (error) {
      return {
        status: 500,
        headers: {},
        props: {},
      };
    }
  }

