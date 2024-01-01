import { Grid, Text } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
export const Values = () => {
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
    <Grid
      align="center"
      css={{ marginTop: "10%", "@smMax": { marginTop: "6em" } }}
    >
      <Text h3 css={{ textTransform: "uppercase" }}>
        NOS VALEURS FONDAMENTALES
      </Text>
      <br></br>
      <br></br>
      <Grid.Container justify="center" gap={1} css={{ width: "80%" }}>
        <Grid md={4}>
          <Fade left>
            <Image
              src={"/assets/images/services/value1.svg"}
              height={300}
              width={400}
            />
          </Fade>
        </Grid>
        <Grid align="left">
          {values.map(({ text, desc }, index) => (
            <Fade top delay={index * 200} key={text}>
              <Grid css={{ cursor: "pointer" }} data-cursor="link" md={10}>
                <Grid>
                  <Text
                    span
                    size="$2xl"
                    css={{ fontWeight: "bold", marginBottom: "1em" }}
                  >
                    {text}
                  </Text>
                </Grid>

                <Grid>
                  <Text span>{desc}</Text>
                </Grid>
              </Grid>
            </Fade>
          ))}
        </Grid>
      </Grid.Container>
    </Grid>
  );
};
