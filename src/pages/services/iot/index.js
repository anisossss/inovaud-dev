import React from "react";
import Meta from "../../../components/seo/index";
import ServiceDetail from "../../../components/services/GenericServices";

const IotService = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Internet Of Things"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <ServiceDetail
        serviceName="Internet Of Things"
        description="INTERNET OF THINGS"
        image="/assets/gifs/iot.gif"
      />
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default IotService;
