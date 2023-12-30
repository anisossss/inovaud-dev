import { Grid, Text, Card } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Fade = require("react-reveal/Fade");
import animationData from "../../../public/assets/lotties/colab.json";
import Lottie from "react-lottie";

export const Career = () => {
  const defaultOptions = {
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const cards = [
    {
      text: "Développeur web fullstack",
      desc: "Pour postuler au poste de Développeur Web, soumettez une copie de votre CV et lettre de motivation.",
    },
    {
      text: "Développeur mobile",
      desc: "Pour postuler au poste de Développeur mobile, soumettez une copie de votre CV et lettre de motivation.",
    },
    {
      text: "DevOps",
      desc: "Pour postuler au poste de DevOps, soumettez une copie de votre CV et lettre de motivation.",
    },
    {
      text: "Développeur blockchain",
      desc: "Pour postuler au poste de Développeur blockchain, soumettez une copie de votre CV et lettre de motivation.",
    },
  ];
  return (
    <>
      <Grid
        css={{ padding: "3%", margin: "auto", marginTop: "10%" }}
        align="center"
      >
        <Grid>
          <Text h3 css={{ textTransform: "uppercase" }}>
            Carrière
          </Text>
        </Grid>
        <br></br>
        <Grid className="green_path1">
          <Image
            src={"/assets/landing/path_lines_green.svg"}
            width={600}
            height={400}
            objectFit="contain"
          />
        </Grid>

        <Grid className="content">
          <Text span>
            L’équipe Inovaud est toujours impatiente d’accueillir des membres
            talentueux et ouverts d’esprit.
          </Text>
        </Grid>
        <Grid>
          <Text span>
            Postulez pour faire partie de l’équipe où vous serez en mesure
            d’apprendre en continu et de relever des défis
          </Text>
        </Grid>
        <Grid className="pyramid1">
          <Image
            src={"/assets/landing/pyramid_green_2.svg"}
            width={300}
            height={200}
            objectFit="contain"
          />
        </Grid>

        <Grid align="center" className="section_wrapper">
          <Grid>
            <Text h3 css={{ textTransform: "uppercase" }}>
              Nos Offres
            </Text>
          </Grid>
          <Grid.Container
            gap={2}
            css={{
              width: "80%",
              justifyContent: "center",
              margin: "auto",
              marginTop: "5%",
            }}
          >
            {cards.map(({ text, desc }) => (
              <Grid xs={12} sm={4} md={3} key={text} justify="center">
                <Card
                  className="card_hover"
                  isHoverable
                  css={{
                    h: "250px",
                    borderRadius: 0,
                  }}
                >
                  <Card.Body>
                    <Grid>
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
        <Grid.Container className="section_wrapper">
          <Grid>
            <Image
              src={"/assets/images/services/contact.svg"}
              height={400}
              width={400}
              objectFit="contain"
            />
          </Grid>
          <Grid className="content" md={6} css={{ textAlign: "left" }}>
            <Grid css={{ width: "80%" }}>
              <Text h3 css={{ textTransform: "uppercase" }}>
                Candidature Spontanée
              </Text>
              <br></br>
              <Text span>
                Candidature spontanée ou à un poste ouvert, n'hésitez pas à nous
                faire part de vos motivations en vue d'une future collaboration.
              </Text>
              <br></br>
              <br></br>
              <Grid>
                <Link href="/carriere/candidature">
                  <Grid className="row block">
                    <button className="btn cyber">Postuler</button>
                  </Grid>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid.Container>
      </Grid>
    </>
  );
};
