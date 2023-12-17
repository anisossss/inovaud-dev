import { Grid, Text } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import Lottie from "react-lottie";
import animationData1 from "../../../../public/assets/lotties/brainstorming.json";
import animationData2 from "../../../../public/assets/lotties/team.json";
import animationData3 from "../../../../public/assets/lotties/training.json";

export const Values = () => {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const values = [
    {
      text: "Innovation",
      desc: "Nous recourrons aux savoirs technologiques les plus pointus, les plus récents et les plus pertinents",
      image: defaultOptions1,
    },
    {
      text: "Collaboration",
      desc: "Nous cherchons à comprendre vos besoins et à élaborer avec vous les meilleures solutions",
      image: defaultOptions2,
    },
    {
      text: "Perfectionnement",
      desc: "Nous cherchons systématiquement à améliorer l'existant et à obtenir de meilleurs résultats",
      image: defaultOptions3,
    },
  ];

  return (
    <Grid align="center" css={{ marginTop: "10%" }}>
      <Text h3>NOS VALEURS FONDAMENTALES</Text>
      <br></br>
      <Grid.Container>
        {values.map(({ text, desc, image }) => (
          <Grid css={{ cursor: "pointer" }} key={text} md={4}>
            <Grid>
              <Grid>
                <Lottie options={image} height={200} width={200} />
              </Grid>
              <Grid md={6}>
                <Grid>
                  <Text b size="$xl">
                    {text}
                  </Text>
                </Grid>
                <br></br>
                <Grid>
                  <Text span size="$md">
                    {desc}
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid.Container>
    </Grid>
  );
};
