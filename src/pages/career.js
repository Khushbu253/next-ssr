import Footer from "@/components/App/Footer";
import Layout from "@/components/App/Layout";
import Navbar from "@/components/App/Navbar";
import CurrentOpening from "@/components/career/CurrentOpening";
import Feedback from "@/components/career/Feedback";
import HiringProcess from "@/components/career/HiringProcess";
import OurIntro from "@/components/career/OurIntro";
import OurServices from "@/components/career/OurServices";
import PhotoGallery from "@/components/career/PhotoGallery";
import PageBanner from "@/components/common/PageBanner";
import Head from "next/head";
import React from "react";


const career = (props) => {
  const metaDetails = props.seo.seoDetails.find((details)=>details.pageName==='career')
  return (
    <>
    <Head>
        <title>Career - Cybercom Creation</title>
        <meta name="title" content={metaDetails.metaTitle}/>
        <meta name="description" content={metaDetails.metaDescription}/>
        <meta name="keywords" content={metaDetails.metaKeywords}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.cybercom.co.in/wp-content/uploads/2013/04/favicon.ico" type="image/x-icon" as="fetch" crossorigin="anonymous"/>
    </Head>
    <Layout pageName="career">
      <Navbar/>
      <PageBanner />
      <OurServices OurServices={props.OurServices} />
      <OurIntro OurIntro={props.OurIntro} />
      <HiringProcess HiringProcess={props.HiringProcess} />
      <CurrentOpening CurrentOpening={props.CurrentOpening} />
      <PhotoGallery PhotoGallery={props.PhotoGallery}/>
      <Feedback Feedback={props.Feedback}/>
      <Footer footer={props.footer} />
    </Layout >
  </>
  );
};
export default career;

export async function getServerSideProps() {
  try {
    const seo=  await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}seo`);
    const footer = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
    const OurServices = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}career-section-1`
    );
    const OurIntro = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}career-section-2`
    );
    const HiringProcess = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}career-section-3`
    );
    const CurrentOpening = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}job-Openings`
    );
    const PhotoGallery = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}career-photo-gallary`
    );
    const Feedback = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}career-employe-feedback`
    );
    return {
      props: {
        seo: await seo.json(),
        footer: await footer.json(),
        OurServices: await OurServices.json(),
        OurIntro: await OurIntro.json(),
        HiringProcess: await HiringProcess.json(),
        CurrentOpening: await CurrentOpening.json(),
        PhotoGallery:await PhotoGallery.json(),
        Feedback:await Feedback.json()
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

