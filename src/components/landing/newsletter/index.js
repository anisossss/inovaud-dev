import { Grid, Text } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Fade = require("react-reveal/Fade");

export const Newsletter = () => {
  return (
    <>
      <Grid.Container className="landing_section">
        <Grid className="">
          <Image
            src={"/assets/landing/light.svg"}
            width={240}
            height={240}
            objectFit="contain"
          />
        </Grid>
        <Grid md={6}>
          <Grid>
            <Fade top>
              <Text h3> solution sur mesure et innovante</Text>
            </Fade>

            <br></br>
            <Grid className="content">
              <Link href="/discover">
                <button className="main-button">S'abonner</button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid.Container>
    </>
  );
};
