import React from "react";
import Meta from "../components/seo/index";
import { IndexLayout } from "../layouts/IndexLayout";

import { Hero } from "../components/landing/hero";
import { Solution } from "../components/landing/solution";
import { Services } from "../components/landing/services";
import { Rdv } from "../components/landing/rdv";
import Newsletter from "../components/landing/newsletter";

const Home = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Home"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <Hero />
        <Services />
        <Solution />
        <Rdv />
        {/* <Newsletter /> */}
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Home;
