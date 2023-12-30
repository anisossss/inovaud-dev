import React from "react";
import Meta from "../../../components/seo/index";
import ServiceDetail from "../../../components/services/GenericServices";
import { IndexLayout } from "../../../layouts/IndexLayout";

const BlockchainService = () => {
  return (
    <>
      <Meta
        title="INOVAUD - Développement Blockchain"
        description="INOVAUD"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <ServiceDetail
          serviceName="Développement Blockchain"
          description="La blockchain est un registre de base de données décentralisé, immuable et transparent. Nos experts en blockchain s'engagent à vous fournir une DApp (application décentralisée) au service de votre vision. Ils vous aideront à identifier les possibilités d'utilisation de cette technologie avancée pour optimiser vos transactions, réduire vos coûts et créer de nouveaux modèles d'affaires."
          image="/assets/images/services/blockchain.svg"
          stepsData={{
            step1title: "1. Étude de vos besoins",
            step1desc:
              "Nous étudions vos besoins afin de vous offrir une solution pertinente et sur mesure en blockchain.",
            step2title: "2. Conception De L'architecture",
            step2desc:
              "Pour garantir la bonne architecture de votre solution, nous choisissons avec soin la plate-forme blockchain appropriée, les protocoles de consensus, les langages de programmation ainsi que les outils nécessaires.",
            step3title: "3. Développement du smart contract",
            step3desc:
              "Nous écrivons le code de smart contract en utilisant les langages de programmation appropriés.",
            step4title: "4. Développement de l'application client",
            step4desc:
              "Nous développons l'application client qui interagit avec le smart contract.",
            step5title: "5. Test et déploiement",
            step5desc:
              "Nous réalisons des tests pour assurer le bon fonctionnement et la conformité de la solution blockchain. Celle-ci peut ensuite être déployée sur le réseau de blockchain approprié.            ",
            step6title: "6. Maintenance et mise à jour",
            step6desc:
              "Nous assurons la maintenance de votre solution blockchain et procédons aux adaptations nécessaires.            ",
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
