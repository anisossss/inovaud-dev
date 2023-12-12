import React from "react";
import Meta from "../../../components/seo/index";
import ServiceDetail from "../../../components/services/GenericServices";

const UxUiDesign = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Internet Of Things"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <ServiceDetail
        serviceName="UX/UI Design"
        description="Lorem ipsum"
        image="/assets/services/.png"
      />
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default UxUiDesign;
