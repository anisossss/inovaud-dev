import { Grid, Text } from "@nextui-org/react";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <Fade>
        <Grid
          css={{
            position: "absolute",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            left: "22%",
          }}
        >
          <Image
            src={"/assets/images/squaresbg.svg"}
            width={850}
            height={850}
            objectFit="contain"
          />
        </Grid>
      </Fade>

      <Grid css={{ padding: "10%", margin: "auto" }} align="center">
        <Fade top>
          <Grid>
            <Text
              h3
              css={{ textTransform: "uppercase" }}
              size={"$3xl"}
              className="gradtitle"
            >
              Votre vision, nos solutions
            </Text>
          </Grid>
        </Fade>
        <br></br>
        <Fade bottom>
          <Grid className="content">
            <Text span>
              Vous avez un projet, une vision.. <br></br>
              Son déploiement requiert un outil, une solution. Sur mesure et
              innovante. <br></br>
              Celle-ci sera le fruit de notre étroite et créative collaboration
            </Text>
          </Grid>
        </Fade>
        <br></br>
        <Grid>
          <Link href="/services">
            <Grid className="row block">
              <button className="btn cyber">Voir Plus</button>
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
