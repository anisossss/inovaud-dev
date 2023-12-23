import { Grid, Text, Card } from "@nextui-org/react";
import React from "react";

export const Workflow = () => {
  const cards = [
    {
      text: "Contact avec l'un de nos experts et identification de vos besoins",
      desc: "L'équipe Inovaud adopte une approche collaborative pour identifier vos besoins et vos objectifs personnels.",
    },
    {
      text: "Signature d'un accord de confidentialité",
      desc: "Notre engagement à protéger vos données sensibles et vos secrets commerciaux est absolu.",
    },
    {
      text: "Étude de faisabilité",
      desc: "Nous vous assistons dans la prise de décisions pertinentes quant à l’opportunité d’aller de l’avant avec votre projet, de l'ajuster ou de le réorienter.",
    },
    {
      text: "Proposition de solutions optimisées en terme de coûts et délais",
      desc: "Nous élaborons un plan détaillé qui décrit chaque phase du projet, y compris les jalons et les produits livrables.",
    },
    {
      text: "Planification et fixation des milestones",
      desc: "Nous élaborons un plan détaillé qui décrit chaque phase du projet, y compris les jalons et les produits livrables.",
    },
    {
      text: "Implémentation des solutions proposées",
      desc: "Nous vous assurons une implémentation efficace et un traitement de tous les défis en temps opportun.",
    },
    {
      text: "Test, validation et recueil de feedback",
      desc: "Nous évaluons votre solution afin de garantir sa haute qualité et ainsi la satisfaction de vos clients.",
    },
    {
      text: "Maintenance, adaptation et amélioration",
      desc: "Nous améliorons continuellement votre solution en l'adaptant à un contexte en évolution.",
    },
  ];
  return (
    <>
      <Grid align="center">
        <Grid>
          <Text h3 css={{ textTransform: "uppercase" }}>
            Notre Workflow
          </Text>
        </Grid>
        <Grid.Container
          gap={2}
          css={{
            width: "80%",
            justifyContent: "center",
            margin: "auto",
            marginTop: "5%",
            perspective: "1000px",
          }}
        >
          {cards.map(({ text, desc }) => (
            <Grid xs={12} sm={4} md={4} key={text} justify="center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <Card
                    className="flip-card-front card_hover"
                    isHoverable
                    css={{ p: "2em", borderRadius: 0 }}
                  >
                    <Text span css={{ textAlign: "center" }}>
                      {text}
                    </Text>
                  </Card>
                  <Card
                    className="flip-card-back"
                    css={{ p: "2em", borderRadius: 0 }}
                  >
                    <Text span size={"$sm"} css={{ textAlign: "center" }}>
                      {desc}
                    </Text>
                  </Card>
                </div>
              </div>
            </Grid>
          ))}
        </Grid.Container>
      </Grid>
    </>
  );
};
