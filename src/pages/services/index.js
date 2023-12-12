import React from "react";
import { Card, Grid, Text, Link, Image } from "@nextui-org/react";
import Meta from "../../components/seo/index";
import { ServicesCards } from "../../components/landing/services";
import { IndexLayout } from "../../layouts/IndexLayout";

const Services = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Tous nos Services"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <Grid className="wrapper">
          <ServicesCards />
        </Grid>
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Services;
