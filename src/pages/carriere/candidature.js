import React from "react";
import Meta from "../../components/seo/index";
import { Hero } from "../../components/landing/hero";

const Candidate = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Tous nos Services"
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

export default Candidate;
