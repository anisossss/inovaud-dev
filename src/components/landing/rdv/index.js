import { Grid, Text } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Fade = require("react-reveal/Fade");

export const Rdv = () => {
  return (
    <>
      <Grid.Container className="landing_section">
        <Grid className="">
          <Image
            src={"/assets/icons/blockchain.svg"}
            width={240}
            height={240}
            objectFit="contain"
          />
        </Grid>
        <Grid md={6}>
          <Grid>
            <Fade top>
              <Text h3>Fixer un premier rendez-vous</Text>
            </Fade>

            <Grid className="content">
              <Text size={"$sm"} span>
                Vous avez des questions, des attentes, des besoins.
                <br></br>Une première rencontre vous orientera vers des
                solutions.
              </Text>
            </Grid>

            <br></br>
            <Grid className="content">
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
