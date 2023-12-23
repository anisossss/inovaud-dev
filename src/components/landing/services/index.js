import { Card, Grid, Text, Link, Image } from "@nextui-org/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
export const ServicesCards = () => {
  const cards = [
    {
      text: "Développement Web",
      link: "/developpement-web",
    },
    {
      text: "Développement Mobile",
      link: "/developpement-mobile",
    },
    {
      text: "Développement Blockchain",
      link: "/developpement-blockchain",
    },
    {
      text: "Intelligence Artficielle",
      link: "/intelligence-artificielle",
    },
    {
      text: "Internet Des Objets",
      link: "/iot",
    },
    {
      text: "UX/UI Design",
      link: "/ux-ui-design",
    },
    {
      text: "Motion Design",
      link: "/motion-design",
    },
    {
      text: "Digital Marketing",
      link: "/digital-marketing",
    },
  ];

  return (
    <>
      <Grid className="pyramid4">
        <Image
          src={"/assets/landing/pyramid_green_2.svg"}
          width={300}
          height={300}
          objectFit="contain"
        />
      </Grid>
      <Grid align="center">
        <Grid>
          <Text h3 size={"$4xl"}>
            NOS SERVICES
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
          {cards.map(({ text, link }) => (
            <Grid xs={12} sm={4} md={4} key={text} justify="center">
              <Link href={`/services/${link}`}>
                <Card
                  className="card_hover"
                  isHoverable
                  css={{
                    w: "290px",
                    h: "200px",
                    borderRadius: 0,
                  }}
                >
                  <Card.Body
                    css={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text span css={{ textAlign: "center" }}>
                      {text}{" "}
                    </Text>
                  </Card.Body>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid.Container>
      </Grid>
    </>
  );
};
