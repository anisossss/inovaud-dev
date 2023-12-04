import React from "react";
import Meta from "../../components/seo/index.js";
import Contact from "../../components/contact/index.js";
import Auth from "../../layouts/Auth.js";

export default function SupportPage() {
  return (
    <>
      <Meta
        title="Contact us - INOVAUD"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <Contact />
    </>
  );
}

SupportPage.layout = Auth;
