import Footer from "@/components/App/Footer";
import Layout from "@/components/App/Layout";
import Navbar from "@/components/App/Navbar";
import React from "react"
import PageNotFound from "../components/pageNotFound"


const Page404 = (props) => {
      console.log(props,"props")
    return(
        <Layout pageName="page404" >
            <Navbar />
            
            <PageNotFound  data={props.pageNotFound}/>
            
            <Footer footer={props.footer}/>
            
     </Layout>
    )
  }

export default Page404;

export async function getStaticProps() {
  try {
    
    const pageNotFound = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}page-not-found`);
    const footer = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
    return {
      props: {
        pageNotFound: await pageNotFound.json(),
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