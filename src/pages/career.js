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
import React from "react";


const career = (props) => {
  return (
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
  );
};
export default career;

export async function getServerSideProps() {
  try {
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

