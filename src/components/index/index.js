import * as React from "react";
import Layout from "../components/App/Layout";
import Banner from "../components/Index/Banner";
import OurSolutions from "../components/Index/OurSolutions";
import OurFeatures from "../components/Index/OurFeatures";
import OurServices from "../components/Index/OurServices";
import RecentProjects from "../components/Index/RecentProjects";
import Testimonials from "../components/Index/Testimonials";
import Pricing from "../components/Index/Pricing";
import Partner from "../components/Index/Partner";
import OurBlog from "../components/Index/OurBlog";
import ProjectStartArea from "../components/Index/ProjectStartArea";
import Footer from "../components/App/Footer";

const IndexPage = ({ serverData }) => {
  return (
      <Layout pageName="home">
        <Banner data={serverData?.banner} />
        <OurSolutions
          data={serverData.solution}
          serviceSolutions={serverData.serviceSolutions}
        />
        <OurServices
          servicesOne={serverData.servicesOne}
          servicesTwo={serverData.servicesTwo}
        />
        <OurFeatures data={serverData.features} />
        <RecentProjects
          recentProjects={serverData.recentProjects}
          projects={serverData.projects}
        />
        <Pricing />
        <Testimonials Testimonials={serverData.Testimonials} />
        <Partner Partner={serverData.Partner} />

        <OurBlog OurBlog={serverData.OurBlog} />
        <ProjectStartArea ProjectStartArea={serverData.ProjectStartArea} />
        <Footer footer={serverData.footer} />
      </Layout>
  );
};

export async function getServerData() {
  try {
    const footer = await fetch(`${process.env.GATSBY_API_URL}address`);
    const banner = await fetch(`${process.env.GATSBY_API_URL}default-banner`);
    const solution = await fetch(`${process.env.GATSBY_API_URL}solution`);
    const serviceSolutions = await fetch(
      `${process.env.GATSBY_API_URL}service-solutions`
    );
    const servicesOne = await fetch(
      `${process.env.GATSBY_API_URL}services-one`
    );
    const servicesTwo = await fetch(
      `${process.env.GATSBY_API_URL}services-two`
    );
    const features = await fetch(`${process.env.GATSBY_API_URL}our-features`);
    const RecentProjects = await fetch(
      `${process.env.GATSBY_API_URL}recent-projects`
    );
    const projects = await fetch(`${process.env.GATSBY_API_URL}projects`);
    const Testimonials = await fetch(
      `${process.env.GATSBY_API_URL}testimonials`
    );
    const Partner = await fetch(`${process.env.GATSBY_API_URL}partner`);
    const OurBlog = await fetch(`${process.env.GATSBY_API_URL}blogs`);
    const ProjectStartArea = await fetch(
      `${process.env.GATSBY_API_URL}start-your-project`
    );
    // if (!res.ok) {
    //   throw new Error(`Response failed`)
    // }

    // console.log(servicesOne, servicesTwo);
    return {
      props: {
        footer: await footer.json(),
        banner: await banner.json(),
        solution: await solution.json(),
        serviceSolutions: await serviceSolutions.json(),
        features: await features.json(),
        servicesOne: await servicesOne.json(),
        servicesTwo: await servicesTwo.json(),
        recentProjects: await RecentProjects.json(),
        projects: await projects.json(),
        Testimonials: await Testimonials.json(),
        Partner: await Partner.json(),
        OurBlog: await OurBlog.json(),
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
export const Head = () => <title>Home Page</title>;

export default IndexPage;
