import { Grid, Text } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Fade = require("react-reveal/Fade");
import Lottie from "react-lottie";
export const Solution = () => {
  return (
    <>
      <Grid.Container className="landing_section">
        <Grid className=""></Grid>
        <Grid md={6}>
          <Grid>
            <Fade top>
              <Text h3>Vous doter d'une solution sur mesure et innovante</Text>
            </Fade>

            <Grid className="content">
              <Text size={"$sm"} span>
                Nos solutions sont inédites pour chacun de nos clients : elles
                sont le fruit d'une collaboration basée sur la consultation,
                l'identification de vos besoins, l'élaboration, le suivi et
                l'amélioration continue
              </Text>
            </Grid>

            <br></br>
            <Grid className="content">
              <Link href="/discover">
                <button className="main-button">Voir Plus</button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid.Container>
    </>
  );
};
