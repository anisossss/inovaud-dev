import { Grid, Text } from "@nextui-org/react";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade"; // Adjust import statement
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <Grid className="green_path1">
        <Image
          src={"/assets/landing/path_lines_green.svg"}
          width={600}
          height={500}
          objectFit="contain"
        />
      </Grid>{" "}
      <Grid css={{ padding: "10%", margin: "auto" }} align="center" md={12}>
        <Fade top>
          <Grid>
            <Text h3 css={{ textTransform: "uppercase" }} className="gradtitle">
              Votre vision, nos solutions
            </Text>
          </Grid>
        </Fade>
        <br></br>

        <Fade bottom>
          <Grid className="content">
            <Text size={"$md"} span>
              Vous avez un projet, une vision.. <br></br>
              Son déploiement requiert un outil, une solution. Sur mesure et
              innovante. <br></br>
              Celle-ci sera le fruit de notre étroite et créative collaboration
            </Text>
          </Grid>
        </Fade>
        <br></br>

        <Grid className="content">
          <Link href="/discover">
            <Grid className="row block">
              <button className="btn cyber">Voir Plus</button>
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
