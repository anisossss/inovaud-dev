import React from "react";
import Meta from "../../../components/seo/index";
import ServiceDetail from "../../../components/services/GenericServices";
import { IndexLayout } from "../../../layouts/IndexLayout";
import animationData from "../../../../public/assets/lotties/brainstorming.json";

const IotService = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Internet Des Objets"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <ServiceDetail
          serviceName="Internet Des Objets"
          description="L'internet des objets (Internet of Things – IoT) désigne le réseau interconnecté de dispositifs physiques – objets, lieux, environnements – dotés de capteurs, de logiciels et d'une connectivité réseau permettant d'échanger et de collecter toutes données utiles à l'analyse puis à l'optimisation d'une activité. De nombreux agriculteurs connaissent déjà en temps réel l'état de santé de leurs vaches ou le besoin en irrigation de leurs cultures. Avez vous aussi besoin d'indicateurs qui vous permettraient d'anticiper et de prendre des décisions pertinentes ?"
          animationData={animationData} // Pass your animation data here
          stepsData={{
            step1title: "Étude de vos besoins",
            step1desc:
              "Nous étudions vos besoins afin de vous offrir une solution pertinente en IoT.",
            step2title: "Conception Du Système",
            step2desc:
              "Nous fournissons une architecture de système IoT qui analyse les capteurs, les dispositifs et les plate-formes nécessaires au projet.",
            step3title: "Sélection des capteurs et des dispositifs",
            step3desc:
              "Nous choisissons les capteurs et les dispositifs qui répondent aux besoins spécifiques de l'application.",
            step4title: "Développement des logiciels",
            step4desc:
              "Nous développons les logiciels nécessaires à l'acquisition, la communication et l'analyse des données.",
            step5title: "Intégration des données",
            step5desc:
              "Nous utilisons des protocoles de communication standards afin d'intégrer les données collectées à partir des différents capteurs et dispositifs.",
            step6title: "Déploiement, surveillance et maintenance",
            step6desc:
              "La performance de votre système est assurée par une surveillance et une maintenance continue.",
          }}
        />
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default IotService;
