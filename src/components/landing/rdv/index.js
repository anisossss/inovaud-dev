import { Grid, Text } from "@nextui-org/react";
import React, { useState } from "react";
import Link from "next/link";
const Fade = require("react-reveal/Fade");
import Image from "next/image";
export const Rdv = () => {
  return (
    <>
      <Grid.Container className="landing_section">
        <Grid>
          <Fade>
            <Image
              src={"/assets/images/services/contact.svg"}
              height={400}
              width={400}
              objectFit="contain"
            />
          </Fade>
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
              <Fade top>
                <Text span>
                  Vous avez des questions, des attentes, des besoins.
                  <br></br>Une première rencontre vous orientera vers des
                  solutions.
                </Text>
              </Fade>
            </Grid>
            <br></br>
            <Grid>
              <Link href="/contact">
                <Grid className="row block">
                  <button className="btn cyber">Contactez-nous</button>
                </Grid>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid.Container>
    </>
  );
};
