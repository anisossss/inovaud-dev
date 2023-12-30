import { Grid, Text } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
const Fade = require("react-reveal/Fade");
import Image from "next/image";
export const Solution = () => {
  return (
    <>
      <Grid.Container className="landing_section">
        <Grid>
          <Fade count={2} reverse>
            <Image
              src={"/assets/images/services/lamp.svg"}
              height={300}
              width={300}
            />
          </Fade>
        </Grid>
        <Grid md={6}>
          <Grid>
            <Fade top>
              <Text h3 css={{ textTransform: "uppercase" }}>
                Vous doter d'une solution sur mesure et innovante
              </Text>
            </Fade>

            <Grid className="content">
              <Text span>
                Nos solutions sont inédites pour chacun de nos clients : elles
                sont le fruit d'une collaboration basée sur la consultation,
                l'identification de vos besoins, l'élaboration, le suivi et
                l'amélioration continue
              </Text>
            </Grid>

            <br></br>
            <Grid align="left">
              <Link href="/services">
                <Grid className="row block">
                  <button className="btn cyber">Voir Plus</button>
                </Grid>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid.Container>
    </>
  );
};
