import Footer from '@/components/App/Footer';
import Layout from '@/components/App/Layout';
import Navbar from '@/components/App/Navbar';
import PageBanner from '@/components/common/PageBanner';
import ContactForm from '@/components/Contact/ContactForm';
import ContactInfo from '@/components/Contact/ContactInfo';
import React from 'react'


const contact = (props) => {
  return (
    <Layout pageName="contact" seoData={props?.seoDetails}>
      <Navbar/>
      <PageBanner pageTitle="Work" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Work" />
            <ContactInfo address={props.address}/>
            <ContactForm />
                      <Footer footer={props.footer} />
    </Layout>
  )
}

export async function getServerSideProps() {
    try {
      const seoDetails = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}seo`);
      const footer = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
      const address = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
      return {
        props: {
          seoDetails: await seoDetails.json(),
          footer: await footer.json(),
          address: await address.json(),
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
  // export const Head = () => <title>Contact Page</title>;

export default contact