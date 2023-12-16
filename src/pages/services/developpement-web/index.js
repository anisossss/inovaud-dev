import React from "react";
import Meta from "../../../components/seo/index";
import ServiceDetail from "../../../components/services/GenericServices";
import { IndexLayout } from "../../../layouts/IndexLayout";

const DevWebService = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Développement Web"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <ServiceDetail
          serviceName="Développement Web"
          description="Qui peut se passer d'un site web de nos jours ? C'est un canal de communication et de distribution qui vous assure visibilité, confiance et recognition. Concevoir votre site sur la base de vos attentes puis le mettre en service est le travail de nos développeurs web qui assureront ensuite sa maintenance et sa responsivité (adaptation à différents appareils et tailles d'écran). Nos experts s'engagent à répondre à vos besoins soit en site web personnalisé soit en développement sur CMS."
          image="/assets/images/services/devweb.png"
          stepsData={{
            step1title: "Étude de vos besoins",
            step1desc:
              "Nous étudions vos besoins afin de vous offrir une solution pertinente et sur mesure.",
            step2title: "Conception",
            step2desc:
              "Nous concevons l'aspect visuel du site en créant des maquettes et des wireframes pour la mise en page du contenu.",
            step3title: "Développement front-end",
            step3desc:
              "Nous exploitons des langages de programmation pour la construction de la partie visible du site.",
            step4title: "Développement back-end",
            step4desc:
              "Nous adoptons des langages de programmation pour la construction des fonctionnalités du site.",
            step5title: "Tests et lancement",
            step5desc:
              "Nous testons votre site pour nous assurer qu'il est conforme à vos attentes et prêt à être mis en service.",
            step6title: "Maintenance et mise à jour",
            step6desc:
              "Nous veillons au bon fonctionnement de votre site et procédons à d'éventuelles adaptations.",
          }}
        />
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}
export default DevWebService;
