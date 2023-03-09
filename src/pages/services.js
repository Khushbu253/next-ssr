import Footer from '@/components/App/Footer';
import Layout from '@/components/App/Layout';
import Navbar from '@/components/App/Navbar';
import PageBanner from '@/components/common/PageBanner';
import AboutProject from '@/components/Services/AboutProject';
import AboutServices from '@/components/Services/AboutServices';
import Consulting from '@/components/Services/Consulting';
import Data from '@/components/Services/Data';
import Design from '@/components/Services/Design';
import Development from '@/components/Services/Development';
import Features from '@/components/Services/Features';
import Management from '@/components/Services/Management';
import OurFeatures from '@/components/Services/OurFeatures';
import ServicesTab from '@/components/Services/ServicesTab';
import Head from 'next/head';
import React from 'react'


const services = (props) => {
  const metaDetails = props.seoDetails.seoDetails.find((details)=>details.pageName==='services')
  return (
    <>
    <Head>
        <title>Services - Cybercom Creation</title>
        <meta name="title" content={metaDetails.metaTitle}/>
        <meta name="description" content={metaDetails.metaDescription}/>
        <meta name="keywords" content={metaDetails.metaKeywords}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout pageName="services" seoData={props?.seoDetails}>
      <Navbar/>
      <PageBanner />
      <Features features={props.features}/>
      <AboutServices features={props.features}/>
      <OurFeatures ourFeatures={props.ourFeatures}/>
      <Consulting serviceConsulting={props.serviceConsulting}/>
      <Design design={props.design}/>
      <Development serviceDevelopment={props.serviceDevelopment}/>
      <Data serviceDataSection={props.serviceDataSection}/>
      <Management serviceManagement={props.serviceManagement}/>
      {/* <ServicesTab/> */}
      <AboutProject startYourProject={props.startYourProject} />

      <Footer footer={props.footer} />
    </Layout>
    </>
  )
}
export async function getServerSideProps() {
    try {
      const seoDetails = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}seo`);
      const footer = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
      const features = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}service-page-section-1-and-2`
      );
      const ourFeatures = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}our-features`
      );
      const serviceConsulting = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}service-consulting`
      );
      const design = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}service-design`
      );
      const serviceDevelopment = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}service-development`
      );
      const serviceDataSection = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}service-data-section`
      );
      const serviceManagement = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}service-management`
      );
      const startYourProject = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}start-your-project`
      );
      
        
      return {
        props: {
          seoDetails: await seoDetails.json(),
          footer: await footer.json(),
          features:await features.json(),
          ourFeatures:await ourFeatures.json(),
          serviceConsulting: await serviceConsulting.json(),
          design: await design.json(),
          serviceDevelopment: await serviceDevelopment.json(),
          serviceDataSection: await serviceDataSection.json(),
          serviceManagement:await serviceManagement.json(),
          startYourProject:await startYourProject.json()

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
  // export const Head = () => <title>Services Page</title>;
export default services