import React from "react";
import Meta from "../../../components/seo/index";
import ServiceDetail from "../../../components/services/GenericServices";
import { IndexLayout } from "../../../layouts/IndexLayout";

const BlockchainService = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Digital Marketing"
        description="INOVAUD"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <ServiceDetail
          serviceName="Digital Marketing"
          description="Nous entendons par marketing digital l'utilisation de canaux digitaux pour promouvoir votre projet, votre vision. Passionnés, nos spécialistes travaillerons à votre visibilité, à votre empreinte, à votre recognition."
          image="/assets/images/services/marketing.svg"
          stepsData={{
            step1title: "Étude de vos besoins",
            step1desc:
              "Nous étudions vos besoins afin de vous offrir une solution pertinente et sur mesure.",
            step2title: "Étude de marché",
            step2desc:
              "Nous menons une étude de marché globale en identifiant vos concurrents, les tendances actuelles, vos opportunités et défis.",
            step3title: "Définition du but et des objectifs",
            step3desc:
              "Nous définissons les objectifs de votre entreprise pour votre campagne de promotion, identifions et mesurons vos indicateurs clés de performance (KPI).",
            step4title: "Developpement de stratégie",
            step4desc:
              "Nous élaborons en étroite collaboration avec vous une stratégie de marketing digitale adaptée à vos objectifs, en recourant à différents canaux et techniques.",
            step5title: "Gestion des réseaux sociaux",
            step5desc:
              "Nous accordons aux réseaux sociaux l'importance qui leur est due pour la promotion de votre entreprise.",
            step6title: "Analyse et repoting",
            step6desc:
              "Nous préparons des rapports réguliers de votre campagne de marketing digitale et continuons à affiner votre stratégie en analysant les données recueillies pour obtenir de meilleurs résultats.m",
          }}
        />
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default BlockchainService;
