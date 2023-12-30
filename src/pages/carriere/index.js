import React from "react";
import Meta from "../../components/seo/index";
import { IndexLayout } from "../../layouts/IndexLayout";
import { Career } from "../../components/career";

const Services = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Carrière"
        description="INOVAUD"
        thumbnail=""
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <Career />
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Services;
