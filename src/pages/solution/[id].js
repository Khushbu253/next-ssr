import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/App/Layout";
import PageBanner from "@/components/common/PageBanner";
import Footer from "@/components/App/Footer";
import ServiceSidebar from "@/components/ServiceDetails/ServiceSidebar";
import RelatedServices from "@/components/ServiceDetails/RelatedServices";
import Navbar from "@/components/App/Navbar";

const SolutionDetails = (props) => {
  let { title, longText } = props.OurSolutions;
  console.log(props,"check solution");
  return (
    <Layout pageName="blog Details">
      <Navbar/>
      <PageBanner
        pageTitle="Blog Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText={title}
      />
      <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <ReactMarkdown children={longText} />
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </section>

            <RelatedServices />
      <Footer footer={props.footer} />
    </Layout>
  );
};
export default SolutionDetails;

export async function getServerSideProps(context) {
  // try {
    console.log(context.params.id,"solution id")
    const footer = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
    const OurSolutions = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}service-solutions/${context.params.id}`
    );
    return {
      props: {
        footer: await footer.json(),
        OurSolutions: await OurSolutions.json(),
      },
    };
  // } catch (error) {
  //   return {
  //     props: {},
  //     // status: 500,
  //     // headers: {},
     
  //   };
  // }
}
