import React from "react";
import Meta from "../components/seo/index";
import { IndexLayout } from "../layouts/IndexLayout";
import { Hero } from "../components/landing/hero";

const Services = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Services"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <Hero />
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Services;
