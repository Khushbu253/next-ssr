import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { ApolloProvider } from "@apollo/react-hooks";
import client from 'ApolloClient/client'
import Layout from '@/components/App/Layout'
import Navbar from '@/components/App/Navbar'
import Banner from '@/components/index/Banner'
import OurSolutions from '@/components/index/OurSolutions'
import OurServices from '@/components/index/OurServices'
import OurFeatures from '@/components/index/OurFeatures'
import RecentProjects from '@/components/index/RecentProjects'
import Pricing from '@/components/index/Pricing'
import Testimonials from '@/components/index/Testimonials'
import Partner from '@/components/index/Partner'
import Footer from '@/components/App/Footer'
import ProjectStartArea from '@/components/index/ProjectStartArea'
import OurBlog from '@/components/index/OurBlog'

function Home(props) {
  console.log(props.seo,"footer data")
  const metaDetails = props.seo.seoDetails.find((details)=>details.pageName==='home')
  console.log(metaDetails,"current meta details")
  return (
     <>
      <Head>
        <title>Home - Cybercom Creation</title>
        <meta name="title" content={metaDetails.metaTitle}/>
        <meta name="description" content={metaDetails.metaDescription}/>
        <meta name="keywords" content={metaDetails.metaKeywords}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
    
    <ApolloProvider client={client}>
    <Layout pageName="home">
      <Navbar />
      <Banner data={props.banner}/>
      <OurSolutions
          data={props.solution}
          serviceSolutions={props.serviceSolutions}
        />
      {/* <OurServices
          servicesOne={props.servicesOne}
          servicesTwo={props.servicesTwo}
      /> */}
       <OurFeatures data={props.features} />
       {/* <RecentProjects
          recentProjects={props.recentProjects}
          projects={props.projects}
        /> */}
        <Pricing />
        <Testimonials Testimonials={props.Testimonials} />
        <Partner Partner={props.Partner} />
        {/* <OurBlog OurBlog={props.OurBlog} /> */}
        <ProjectStartArea ProjectStartArea={props.ProjectStartArea} />
        <Footer footer={props.footer} />
    </Layout>
  </ApolloProvider>
  </>
  )
}
export default Home;
export async function getServerSideProps() {
  console.log(process.env.NEXT_PUBLIC_GRAPHQL_API_URL,"env variable")
  try{
    const seo=  await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}seo`);
    const footer = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
    const banner = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}default-banner`);
    const solution = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}solution`);
    const serviceSolutions = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}service-solutions`
    );
    const servicesOne = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}services-one`
    );
    const servicesTwo = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}services-two`
    );
    const features = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}our-features`);
    const RecentProjects = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}recent-projects`
    );
    const Testimonials = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}testimonials`
    );
    const Partner = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}partner`);
    const OurBlog = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}blogs`);
    const ProjectStartArea = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}start-your-project`
    );
    return{
      props:{
        seo: await seo.json(),
        footer: await footer.json(),
        banner: await banner.json(),
        solution: await solution.json(),
        serviceSolutions: await serviceSolutions.json(),
        servicesOne: await servicesOne.json(),
        servicesTwo: await servicesTwo.json(),
        features: await features.json(),
        recentProjects: await RecentProjects.json(),
        Testimonials: await Testimonials.json(),
        Partner: await Partner.json(),
        OurBlog: await OurBlog.json(),
        ProjectStartArea: await ProjectStartArea.json(),
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

