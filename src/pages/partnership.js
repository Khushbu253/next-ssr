import Footer from '@/components/App/Footer';
import Layout from '@/components/App/Layout';
import Navbar from '@/components/App/Navbar';
import PageBanner from '@/components/common/PageBanner';
import ProjectStartArea from '@/components/index/ProjectStartArea';
import PartnershipContent from '@/components/partnership/PartnershipContent';
import PartnershipFeatures from '@/components/partnership/PartnershipFeatures';
import PartnershipGrowth from '@/components/partnership/PartnershipGrowth';
import PartnershipModal from '@/components/partnership/PartnershipModal';
import Head from 'next/head';
import React from 'react'


const partnership = (props) => {
  const metaDetails = props.seo.seoDetails.find((details)=>details.pageName==='partnership')
  return (
    <>
    <Head>
        <title>Partnership - Cybercom Creation</title>
        <meta name="title" content={metaDetails.metaTitle}/>
        <meta name="description" content={metaDetails.metaDescription}/>
        <meta name="keywords" content={metaDetails.metaKeywords}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.cybercom.co.in/wp-content/uploads/2013/04/favicon.ico" type="image/x-icon" as="fetch" crossorigin="anonymous"/>
    </Head>
    <Layout pageName="partnership">
      <Navbar/>
      <PageBanner />
      <PartnershipGrowth partnershipGrowth={props.partnershipGrowth}/>
      <PartnershipContent partnershipGrowth={props.partnershipGrowth}/>
      <PartnershipModal partnershipModal={props.partnershipModal}/>
      <PartnershipFeatures partnershipFeatures={props.partnershipFeatures}/>
      <ProjectStartArea ProjectStartArea={props.ProjectStartArea} />
      <Footer footer={props.footer} />
    </Layout>
    </>
  )
}
export default partnership

export async function getServerSideProps() {
    try {
      const seo=  await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}seo`);
      const footer = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
      const partnershipGrowth = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}partnership-section-1`
      );
      const partnershipModal = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}partnership-section-2`
      );
      const partnershipFeatures = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}partnership-section-3`
      );
      const ProjectStartArea = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}start-your-project`
      );
      
        
      return {
        props: {
          seo: await seo.json(),
          footer: await footer.json(),
          partnershipGrowth: await partnershipGrowth.json(),
          partnershipModal: await partnershipModal.json(),
          partnershipFeatures: await partnershipFeatures.json(),
          ProjectStartArea: await ProjectStartArea.json(),
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

