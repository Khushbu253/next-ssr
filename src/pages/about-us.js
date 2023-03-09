import AboutBenefits from "@/components/AboutUs/AboutBenefits";
import AboutServices from "@/components/AboutUs/AboutServices";
import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import Features from "@/components/AboutUs/Features";
import Partner from "@/components/AboutUs/Partner";
import QualityPolicy from "@/components/AboutUs/QualityPolicy";
import TeamMember from "@/components/AboutUs/TeamMembers";
import Footer from "@/components/App/Footer";
import Layout from "@/components/App/Layout";
import Navbar from "@/components/App/Navbar";
import PageBanner from "@/components/common/PageBanner";
import Head from "next/head";
import React from "react";

const AboutUs = (props) => {
  const metaDetails = props.seo.seoDetails.find((details)=>details.pageName==='about')
  return (
    <>
    <Head>
        <title>About Us - Cybercom Creation </title>
        <meta name="title" content={metaDetails.metaTitle}/>
        <meta name="description" content={metaDetails.metaDescription}/>
        <meta name="keywords" content={metaDetails.metaKeywords}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.cybercom.co.in/wp-content/uploads/2013/04/favicon.ico" type="image/x-icon" as="fetch" crossorigin="anonymous"/>
    </Head>
    <Layout pageName="about-us">
      <Navbar />
      <PageBanner />
      <AboutServices
        servicesOne={props.servicesOne}
        servicesTwo={props.servicesTwo}
      />
      <AboutUsContent aboutContent={props.aboutContent}/>
      <Features/>
      <AboutBenefits />
      <QualityPolicy aboutUsPage={props.aboutUsPage} />
      {/* <TeamMember teamMembers={props.teamMembers}/>
      <Partner partner={props.partner} /> */}
      <Footer footer={props.footer} />
    </Layout>
    </>
  );
};
export default AboutUs;

export async function getServerSideProps()  {
  try {
    const seo=  await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}seo`);
    const footer = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
    const servicesOne = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}about-us-page`
    );
    const servicesTwo = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}services-two`
    );
    const aboutContent = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}aboutpagesectionone`
      );
      const aboutUsPage = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}about-us-page`
      );
      const teamMembers = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}team-style-1`
      );
      const partner = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}team-style-1`
      );

      
    return {
      props: {
        seo: await seo.json(),
        footer: await footer.json(),
        servicesOne: await servicesOne.json(),
        servicesTwo: await servicesTwo.json(),
        aboutContent:await aboutContent.json(),
        aboutUsPage:await aboutUsPage.json(),
        teamMembers:await teamMembers.json(),
        partner:await partner.json(),
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

