import React from "react";
import Meta from "../../../components/seo/index";
import ServiceDetail from "../../../components/services/GenericServices";
import { IndexLayout } from "../../../layouts/IndexLayout";

const UxUiDesign = () => {
  return (
    <>
      <Meta
        title="INOVAUD - UX/UI Design"
        description="INOVAUD"
        thumbnail=""
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <ServiceDetail
          serviceName="UX/UI Design"
          description="Nos UX/UI designers œuvrent à l'amélioration continuelle de l'expérience utilisateur, de ce que l'usager de votre site ou de votre application perçoit et ressent. En concevant des interfaces sensoriellement attrayantes, faciles à utiliser et au contenu pertinent, nous vous garantissons des solutions efficaces qui répondent à l'ensemble de vos attentes."
          image="/assets/images/services/uxui.svg"
          stepsData={{
            step1title: "Étude de vos besoins",
            step1desc:
              "Nous étudions vos besoins afin de vous offrir une solution pertinente et sur mesure.",
            step2title: "Benchmarking",
            step2desc:
              "Nous analysons et référençons votre marché pour vous créer un avantage concurrentiel.",
            step3title: "Création du userflow (UX)s",
            step3desc:
              "Nous créons un visuel qui décrit comment un utilisateur interagit avec un site web ou une application pour atteindre un objectif spécifique.",
            step4title: "Création de wireframes",
            step4desc:
              "Nous réalisons une représentation visuelle basse-fidélité de l'interface utilisateur.",
            step5title: "Création des interfaces (UI)",
            step5desc:
              "Nous utilisons des outils de conception pour créer une interface utilisateur attrayante et fonctionnelle.",
            step6title: "Prototypage",
            step6desc:
              "Nous créons des prototypes interactifs d'interfaces utilisateur.",
          }}
        />
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}
export default UxUiDesign;
