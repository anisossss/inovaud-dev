import React from "react";
import Meta from "../../../components/seo/index";
import ServiceDetail from "../../../components/services/GenericServices";
import { IndexLayout } from "../../../layouts/IndexLayout";
import animationData from "../../../../public/assets/lotties/brainstorming.json";

const MotionService = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Motion Design"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <ServiceDetail
          serviceName="Motion Design"
          description="Imaginez-vous l'identité visuelle de votre entreprise au travers d'animations ? Si tel est le cas, notre équipe de Motion Design se mettra avec enthousiasme à votre service pour imaginer et créer des vidéos promotionnelles ou explicatives, animer votre logo ou concevoir des expériences de réalité virtuelle et augmentée. L'ensemble de ces contenus – visuels et sonores – travaillerons à la mémoire de votre nom, à votre recognition."
          animationData={animationData} // Pass your animation data here
          stepsData={{
            step1title: "Étude de vos besoins",
            step1desc:
              "Nous étudions vos besoins afin de vous offrir une solution pertinente et sur mesure.",
            step2title: "Conceptualisation",
            step2desc:
              "Nous imaginons et vous proposons une identité visuelle générale.",
            step3title: "Design",
            step3desc:
              "Nous transmettons vos idées et votre vision au travers d'animations attrayantes et pertinentes. ",
            step4title: "Animation",
            step4desc:
              "Nous donnons vie à la conception par le mouvement et la synchronisation.",
            step5title: "Conception sonore",
            step5desc:
              "Nous ajoutons des éléments audio pour améliorer l'animation et optimiser la transmission de votre message.",
            step6title: "Itération et rétroaction",
            step6desc:
              "Nous accueillons votre feedback et procédons à des ajustements.",
          }}
        />
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default MotionService;
