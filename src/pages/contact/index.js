import React from "react";
import Meta from "../../components/seo/index.js";
import { ContactForm } from "../../components/contact/index.js";
import { IndexLayout } from "../../layouts/IndexLayout.js";

export default function Contact() {
  return (
    <>
      <Meta
        title="Contactez-nous - INOVAUD"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <ContactForm />
      </IndexLayout>
    </>
  );
}
