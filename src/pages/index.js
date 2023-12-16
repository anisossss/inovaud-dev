import { useState, useEffect } from "react";
import React from "react";
import Meta from "../components/seo/index";
import { IndexLayout } from "../layouts/IndexLayout";
import Cursor from "../components/cursor/Cursor";
import { Hero } from "../components/landing/hero";
import { Solution } from "../components/landing/solution";
import { ServicesCards } from "../components/landing/services";
import { Rdv } from "../components/landing/rdv";
import { Workflow } from "../components/landing/workflow";
import { Values } from "../components/landing/values";

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  return (
    <>
      <Meta
        title="INOVAUD - Acceuil"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <Cursor isDesktop={isDesktop} />
        <Hero />
        <ServicesCards />
        <Solution />
        <Workflow />
        <Values />
        <Rdv />
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Home;
