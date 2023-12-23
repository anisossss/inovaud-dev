import React from "react";
import Meta from "../../../components/seo/index";
import ServiceDetail from "../../../components/services/GenericServices";
import { IndexLayout } from "../../../layouts/IndexLayout";
import animationData from "../../../../public/assets/lotties/ai.json";

const AiService = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Intelligence Artificielle"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <ServiceDetail
          serviceName="Intelligence Artificielle"
          description="L'intelligence artificielle (IA) est la simulation de l'intelligence humaine dans des machines programmées pour penser et agir comme des humains. Inovaud fournit à la fois une expertise technique et un soutien réglementaire pour développer des algorithmes de compréhension du langage naturel, de reconnaissance d'images, d'apprentissage par l'expérience et de prise de décision."
          animationData={animationData} // Pass your animation data here
          stepsData={{
            step1title: "Définition de la problématique",
            step1desc:
              "Nous étudions vos enjeux et les bénéfices d'un recours à l'IA ou à l'apprentissage automatique.",
            step2title: "Collecte Et Préparation Des Données",
            step2desc:
              "Nous collectons et trions des données provenant de différentes sources.",
            step3title: "Développement et formation du modèle",
            step3desc:
              "Nous développons et entraînons le modèle d'IA au moyen d'un algorithme pertinent.",
            step4title: "Évaluation et validation du modèle",
            step4desc:
              "Nous évaluons la performance du modèle pour garantir sa fiabilité et sa précision.",
            step5title: "Déploiement",
            step5desc:
              "Nous déployons le modèle d'IA dans un environnement de production.",
            step6title: "Surveillance et maintenance",
            step6desc:
              "Nous surveillons la performance du modèle et nous engageons à l'ajuster et à le perfectionner continuellement.",
          }}
        />
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}
export default AiService;
