import { Card, Grid, Text, Link, Image } from "@nextui-org/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export const ServicesCards = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card_hover");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play reverse none reverse",
          },
        }
      );
    });
  }, []);
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
      text: "Internet Of Things",
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
      <Grid align="center">
        <Grid>
          <Text h3 size={"$4xl"}>
            Nos services
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
