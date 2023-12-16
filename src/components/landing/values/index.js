import { Grid, Text } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

import "swiper/css";

export const Values = () => {
  const values = [
    {
      text: "Innovation",
      desc: "Nous recourrons aux savoirs technologiques les plus pointus, les plus récents et les plus pertinents",
      image: "/assets/images/services/devweb2.png",
    },
    {
      text: "Collaboration",
      desc: "Nous cherchons à comprendre vos besoins et à élaborer avec vous les meilleures solutions",
      image: "/assets/images/services/data.png",
    },
    {
      text: "Perfectionnement",
      desc: "Nous cherchons systématiquement à améliorer l'existant et à obtenir de meilleurs résultats",
      image: "/assets/images/services/ai2.png",
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
                <Image
                  src={image}
                  width={150}
                  height={150}
                  objectFit="contain"
                />
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
