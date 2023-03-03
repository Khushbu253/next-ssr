import Footer from '@/components/App/Footer';
import Layout from '@/components/App/Layout';
import Navbar from '@/components/App/Navbar';
import PageBanner from '@/components/common/PageBanner';
import ProjectStartArea from '@/components/index/ProjectStartArea';
import PartnershipContent from '@/components/partnership/PartnershipContent';
import PartnershipFeatures from '@/components/partnership/PartnershipFeatures';
import PartnershipGrowth from '@/components/partnership/PartnershipGrowth';
import PartnershipModal from '@/components/partnership/PartnershipModal';
import React from 'react'


const partnership = (props) => {
  return (
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
  )
}
export default partnership

export async function getServerSideProps() {
    try {
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

