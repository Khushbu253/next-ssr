import Footer from '@/components/App/Footer';
import Layout from '@/components/App/Layout';
import Navbar from '@/components/App/Navbar';
import PageBanner from '@/components/common/PageBanner';
import RelatedServices from '@/components/ServiceDetails/RelatedServices';
import ServiceDetailsContent from '@/components/ServiceDetails/ServiceDetailsContent';
import React from 'react'

const Details = (props) => {
    return (
        <Layout>
            <Navbar />

            <PageBanner
                // pageTitle="Service Details" 
                // homePageText="Home" 
                // homePageUrl="/" 
                // activePageText="Service Details" 
            />

            <ServiceDetailsContent />

            <RelatedServices />
            
            <Footer footer={props.footer}/>
        </Layout>
    );
}

export default Details
export async function getServerSideProps(context) {
    try {
      const footer = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
    
      return {
        props: {
          footer: await footer.json(),
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