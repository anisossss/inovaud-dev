import { Grid, Text } from "@nextui-org/react";
import React, { useState } from "react";
import Link from "next/link";
const Fade = require("react-reveal/Fade");
import Lottie from "react-lottie";
import animationData from "../../../../public/assets/lotties/team_com.json";

export const Rdv = () => {
  const defaultOptions = {
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Grid.Container className="landing_section">
        <Grid className="">
          <Lottie options={defaultOptions} height={300} width={300} />
        </Grid>
        <Grid md={6}>
          <Grid>
            <Fade top>
              <Text h3 css={{ textTransform: "uppercase" }}>
                Fixer un premier rendez-vous
              </Text>
            </Fade>
            <br></br>
            <Grid className="content">
              <Text size={"$sm"} span>
                Vous avez des questions, des attentes, des besoins.
                <br></br>Une première rencontre vous orientera vers des
                solutions.
              </Text>
            </Grid>
            <br></br>
            <Grid>
              <Link href="/discover">
                <button className="main-button">Contactez-nous</button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid.Container>
    </>
  );
};
