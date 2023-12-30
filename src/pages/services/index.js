import React from "react";
import { Card, Grid, Text, Link, Image } from "@nextui-org/react";
import Meta from "../../components/seo/index";
import { ServicesCards } from "../../components/landing/services";
import { IndexLayout } from "../../layouts/IndexLayout";

const Services = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Nos Services"
        description="INOVAUD"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <Grid className="wrapper">
          <Grid align="center">
            <Grid>
              <Text h3 size={"$4xl"}>
                NOS SERVICES
              </Text>
            </Grid>
            <br></br>
            <Grid md={8}>
              <Text span>
                Nous mettons à votre disposition les fruits de notre expertise
                et savoir-faire.
                <br></br> Inovaud vous offre un ensemble de services basés sur
                les technologies de pointe.
              </Text>
            </Grid>
          </Grid>
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
