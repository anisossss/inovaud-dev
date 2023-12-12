import React from "react";
import Meta from "../../../components/seo/index";
import ServiceDetail from "../../../components/services/GenericServices";

const BlockchainService = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Digital Marketing"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <ServiceDetail
        serviceName="Digital Marketing"
        description="Lorem ipsum"
        image="/assets/services/.png"
      />
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default BlockchainService;
