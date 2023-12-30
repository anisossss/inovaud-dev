import React from "react";
import Meta from "../../../components/seo/index";
import ServiceDetail from "../../../components/services/GenericServices";
import { IndexLayout } from "../../../layouts/IndexLayout";
const DevMobileService = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Développement Mobile"
        description="INOVAUD"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <ServiceDetail
          serviceName="Développement Mobile"
          description="Une application mobile est un canal de communication et de distribution devenu indispensable. Notre équipe Développement Mobile est à votre service pour concevoir et lancer une nouvelle application – IOS ou Android – ou pour optimiser toute solution existante. La réalité augmentée et la réalité virtuelle peuvent faire partie de la solution afin d'offrir une expérience utilisateur personnalisée et stimulante."
          image="/assets/images/services/mobiledev.svg"
          stepsData={{
            step1title: "Étude de vos besoins",
            step1desc:
              "Nous étudions vos besoins afin de vous offrir une solution qui tienne compte des attentes de vos utilisateurs.",
            step2title: "Conception de l'interface utilisateur",
            step2desc:
              "Nous concevons les interfaces de votre application mobile en accordant un soin particulier à l'expérience utilisateur.",
            step3title: "Développement de l'application",
            step3desc:
              "Nous adoptons les langages de programmation pertinents pour développer une application qui réponde à des très hautes normes de qualité et de sécurité.",
            step4title: "Test de l'application",
            step4desc:
              "Nous testons votre application pour nous assurer qu'elle est conforme à vos attentes et donc prête à être mise en service.",
            step5title: "Publication de l'application",
            step5desc:
              "Nous publions votre application sur les plate-formes les plus pertinentes, comme l'App Store pour iOS ou Google Play Store pour Android.",
            step6title: "Maintenance et mise à jour",
            step6desc:
              "Nous veillons au bon fonctionnement de votre application et procédons à d'éventuelles adaptations.",
          }}
        />
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default DevMobileService;
