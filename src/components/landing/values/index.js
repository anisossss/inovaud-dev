import { Grid, Text } from "@nextui-org/react";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../../public/assets/lotties/brainstorming.json";
import Fade from "react-reveal/Fade";
export const Values = () => {
  const defaultOptions = {
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const values = [
    {
      text: "Innovation",
      desc: "Nous recourrons aux savoirs technologiques les plus pointus, les plus récents et les plus pertinents",
    },
    {
      text: "Collaboration",
      desc: "Nous cherchons à comprendre vos besoins et à élaborer avec vous les meilleures solutions",
    },
    {
      text: "Perfectionnement",
      desc: "Nous cherchons systématiquement à améliorer l'existant et à obtenir de meilleurs résultats",
    },
  ];

  return (
    <Grid align="center" css={{ marginTop: "10%" }}>
      <Text h3 css={{ textTransform: "uppercase" }}>
        NOS VALEURS FONDAMENTALES
      </Text>
      <br></br>
      <br></br>
      <Grid.Container justify="center" gap={4}>
        <Grid>
          <Lottie options={defaultOptions} height={300} width={300} />
        </Grid>
        <Grid align="left" md={6}>
          {values.map(({ text, desc }, index) => (
            <Fade top delay={index * 200} key={text}>
              <Grid css={{ cursor: "pointer" }} data-cursor="link">
                <Text b size="$xl">
                  {text}
                </Text>
                <br></br>
                <br></br>
                <Text span size="$md">
                  {desc}
                </Text>
              </Grid>
            </Fade>
          ))}
        </Grid>
      </Grid.Container>
    </Grid>
  );
};
