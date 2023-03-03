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
import React from "react";

const AboutUs = (props) => {

  return (
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
  );
};
export default AboutUs;

export async function getServerSideProps()  {
  try {
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

