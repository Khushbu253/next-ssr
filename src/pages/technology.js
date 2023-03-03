import Footer from '@/components/App/Footer';
import Layout from '@/components/App/Layout';
import Navbar from '@/components/App/Navbar';
import PageBanner from '@/components/common/PageBanner';
import TechnologySection from '@/components/TechnologySection';
import React from 'react'


const technology = (props) => {
  return (
    <Layout pageName="technology">
      <Navbar/>
      <PageBanner />
      <TechnologySection technologySection={props.technologySection}/>
      <Footer footer={props.footer} />
    </Layout>
  )
}
export default technology

export async function getServerSideProps() {
    try {
      const footer = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
      const technologySection = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}technology`);
        
      return {
        props: {
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

