import React from "react";
import Meta from "../../components/seo/index";
import { IndexLayout } from "../../layouts/IndexLayout";
import { CandidateForm } from "../../components/career/candidate";

const Candidate = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Postuler votre candidature"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <CandidateForm />
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Candidate;
