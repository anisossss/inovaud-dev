import { Card, Grid, Text, Link, Image } from "@nextui-org/react";
import React, { useEffect, useRef } from "react";
const Fade = require("react-reveal/Fade");
export const ServicesCards = () => {
  const cards = [
    {
      text: "Développement Web",
      link: "/developpement-web",
      icon: "/assets/icons/services/devweb.svg",
    },
    {
      text: "Développement Mobile",
      link: "/developpement-mobile",
      icon: "/assets/icons/services/devmobile.svg",
    },
    {
      text: "Développement Blockchain",
      link: "/developpement-blockchain",
      icon: "/assets/icons/services/blockchain.svg",
    },
    {
      text: "Intelligence Artficielle",
      link: "/intelligence-artificielle",
      icon: "/assets/icons/services/ai.svg",
    },
    {
      text: "Internet Des Objets",
      link: "/iot",
      icon: "/assets/icons/services/iot.svg",
    },
    {
      text: "UX/UI Design",
      link: "/ux-ui-design",
      icon: "/assets/icons/services/uxui.svg",
    },
    {
      text: "Motion Design",
      link: "/motion-design",
      icon: "/assets/icons/services/motion.svg",
    },
    {
      text: "Digital Marketing",
      link: "/digital-marketing",
      icon: "/assets/icons/services/marketing.svg",
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
      <Grid.Container
        gap={2}
        css={{
          width: "90%",
          justifyContent: "center",
          margin: "auto",
          marginTop: "5%",
        }}
      >
        {cards.map(({ text, link, icon }) => (
          <Grid xs={12} sm={3} md={3} key={text} justify="center">
            <Link href={`/services/${link}`}>
              <Card
                className="card_hover "
                isHoverable
                css={{
                  w: "280px",
                  h: "200px",
                  borderRadius: 0,
                }}
              >
                <Fade>
                  <Grid
                    css={{
                      position: "absolute",
                      top: 20,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      opacity: 0.1,
                    }}
                  >
                    <Image
                      src={icon}
                      objectFit="contain"
                      layout="fill"
                      width={120}
                      height={120}
                    />
                  </Grid>
                </Fade>

                <Card.Body
                  css={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    span
                    css={{ textAlign: "center", width: "50%" }}
                    size={"$xl"}
                  >
                    {text}{" "}
                  </Text>
                </Card.Body>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};
