import React from "react";
import Meta from "../../../components/seo/index";
import ServiceDetail from "../../../components/services/GenericServices";

const DevMobileService = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Développement Mobile"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <ServiceDetail
        serviceName="Développement Mobile"
        description="Lorem ipsum"
        image="/assets/services/.png"
      />
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default DevMobileService;
