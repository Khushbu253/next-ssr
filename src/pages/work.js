import Footer from '@/components/App/Footer';
import Layout from '@/components/App/Layout';
import Navbar from '@/components/App/Navbar';
import PageBanner from '@/components/common/PageBanner';
import Portfolio from '@/components/Work/Portfolio';
import Process from '@/components/Work/Process';
import Project from '@/components/Work/Project';
import StartProject from '@/components/Work/StartProject';
import Testimonials from '@/components/Work/Testimonials';
import React from 'react'


const work = (props) => {
  return (
    <Layout pageName="work" seoData={props?.seoDetails}>
      <Navbar/>
      <PageBanner pageTitle="Work" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Work" />

      <Project projects={props.projects}/>
      <Portfolio portfolio={props.portfolio} portfolioProjects={props.portfolioProjects}/>
      <Testimonials testimonial={props.testimonial} />
      <StartProject startYourProject={props.startYourProject}/>
      
      {/* <Process howItWork={props.howItWork}/> */}
      
      <Footer footer={props.footer} />
    </Layout>
  )
}

export async function getServerSideProps() {
    try {
      const seoDetails = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}seo`);
      const footer = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
      const projects = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}work-section-1`);
      const portfolio = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}recent-projects`);
      const portfolioProjects = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}projects`);
      const startYourProject= await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}start-your-project`);
      const howItWork= await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}how-it-work`);
      const testimonial= await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}testimonials`);
      return {
        props: {
          seoDetails: await seoDetails.json(),
          footer: await footer.json(),
          projects: await projects.json(),
          portfolio:await portfolio.json(),
          portfolioProjects:await portfolioProjects.json(),
          startYourProject:await startYourProject.json(),
          howItWork:await howItWork.json(),
          testimonial: await testimonial.json()
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
  // export const Head = () => <title>Work Page</title>;

export default work