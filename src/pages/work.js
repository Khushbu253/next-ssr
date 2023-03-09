import Footer from '@/components/App/Footer';
import Layout from '@/components/App/Layout';
import Navbar from '@/components/App/Navbar';
import PageBanner from '@/components/common/PageBanner';
import Portfolio from '@/components/Work/Portfolio';
import Process from '@/components/Work/Process';
import Project from '@/components/Work/Project';
import StartProject from '@/components/Work/StartProject';
import Testimonials from '@/components/Work/Testimonials';
import Head from 'next/head';
import React from 'react'


const work = (props) => {
  const metaDetails = props.seoDetails.seoDetails.find((details)=>details.pageName==='work')
  return (
    <>
    <Head>
        <title>Work - Cybercom Creation</title>
        <meta name="title" content={metaDetails.metaTitle}/>
        <meta name="description" content={metaDetails.metaDescription}/>
        <meta name="keywords" content={metaDetails.metaKeywords}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.cybercom.co.in/wp-content/uploads/2013/04/favicon.ico" type="image/x-icon" as="fetch" crossorigin="anonymous"/>
    </Head>
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
    </>
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