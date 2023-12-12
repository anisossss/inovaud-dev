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
  ];
  return (
    <>
      <Grid align="center">
        <Grid>
          <Text h3>Notre Workflow</Text>
        </Grid>
        <Grid.Container
          gap={3}
          css={{
            width: "80%",
            justifyContent: "center",
            margin: "auto",
            marginTop: "5%",
          }}
        >
          {cards.map(({ text, desc }) => (
            <Grid xs={12} sm={12} md={3} key={text} justify="center">
              <Card
                className="card_hover"
                isHoverable
                css={{
                  padding: 3,
                  borderRadius: 0,
                }}
              >
                <Card.Body>
                  <Grid css={{ height: "6em" }}>
                    <Text b>{text}</Text>
                  </Grid>
                  <Grid>
                    <Text span size={"$sm"}>
                      {desc}
                    </Text>
                  </Grid>
                </Card.Body>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Grid>
    </>
  );
};
