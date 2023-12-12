import React from "react";
import Meta from "../../../components/seo/index";
import ServiceDetail from "../../../components/services/GenericServices";

const MotionService = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Motion Design"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <ServiceDetail
        serviceName="Motion Design"
        description="Lorem ipsum"
        image="/assets/services/motion.png"
      />
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default MotionService;
