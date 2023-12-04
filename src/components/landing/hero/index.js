import { Grid, Text } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Fade = require("react-reveal/Fade");

export const Hero = () => {
  return (
    <>
      <Grid
        css={{ padding: "10%", margin: "auto", marginTop: "3em" }}
        align="center"
        md={12}
      >
        <Fade top>
          <Text h3>Votre vision, nos solutions</Text>
        </Fade>
        <br></br>

        <Grid className="blue_path">
          <Image
            src={"/assets/landing/path.svg"}
            width={600}
            height={400}
            objectFit="contain"
          />
        </Grid>

        <Grid className="pyramid3">
          <Image
            src={"/assets/landing/pyramid_3.svg"}
            width={300}
            height={200}
            objectFit="contain"
          />
        </Grid>
        <Grid className="content">
          <Text size={"$md"} span>
            Vous avez un projet, une vision.. <br></br>
            Son déploiement requiert un outil, une solution. Sur mesure et
            innovante. <br></br>
            Celle-ci sera le fruit de notre étroite et créative collaboration
          </Text>
        </Grid>

        <Grid className="pyramid1">
          <Image
            src={"/assets/landing/pyramid_2.svg"}
            width={300}
            height={200}
            objectFit="contain"
          />
        </Grid>
        <br></br>
        <Grid className="content">
          <Link href="/discover">
            <button className="main-button">Voir Plus</button>
          </Link>
        </Grid>
      </Grid>

      <Grid className="pyramid4">
        <Image
          src={"/assets/landing/pyramid_2.svg"}
          width={300}
          height={200}
          objectFit="contain"
        />
      </Grid>
    </>
  );
};
