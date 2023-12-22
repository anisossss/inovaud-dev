import { Grid, Text } from "@nextui-org/react";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade"; // Adjust import statement
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const Hero = () => {
  const pyramid1 = useRef(null);
  const pyramid3 = useRef(null);
  const pyramid4 = useRef(null);
  const path = useRef(null);

  useEffect(() => {
    const animatePyramid = (
      pyramidRef,
      start,
      end,
      offsetY,
      offsetX,
      endScale
    ) => {
      gsap.from(pyramidRef.current, {
        scrollTrigger: {
          trigger: pyramidRef.current,
          start: start,
          end: end,
          scrub: 1.5,
        },
        y: offsetY,
        x: offsetX,
        scale: endScale,
      });
    };

    animatePyramid(pyramid1, "top center", "bottom bottom", 50, 1, 1.5);
    animatePyramid(pyramid3, "top center", "bottom bottom", -50, 1, 0.5);
    animatePyramid(pyramid4, "top center", "bottom bottom", 100, 1, 2);
  }, [pyramid1, pyramid3, pyramid4]);

  return (
    <>
      <Grid css={{ padding: "10%", margin: "auto" }} align="center" md={12}>
        <Fade top>
          <Grid>
            <Text h3>Votre vision, nos solutions</Text>
          </Grid>
        </Fade>
        <br></br>
        <div ref={pyramid3}>
          <Grid className="green_path1">
            <Image
              src={"/assets/landing/path_lines_green.svg"}
              width={600}
              height={400}
              objectFit="contain"
            />
          </Grid>
        </div>

        <div ref={pyramid3}>
          <Grid className="pyramid3">
            <Image
              src={"/assets/landing/pyramid_green_2.svg"}
              width={300}
              height={200}
              objectFit="contain"
            />
          </Grid>
        </div>
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
        <div ref={pyramid1}>
          <Grid className="pyramid1">
            <Image
              src={"/assets/landing/pyramid_green_2.svg"}
              width={300}
              height={200}
              objectFit="contain"
            />
          </Grid>
        </div>
        <br></br>
        <Grid className="content">
          <Link href="/discover">
            <button className="main-button">Voir Plus</button>
          </Link>
        </Grid>
      </Grid>

      <div ref={pyramid4}>
        <Grid className="pyramid4">
          <Image
            src={"/assets/landing/pyramid_green_3.svg"}
            width={300}
            height={200}
            objectFit="contain"
          />
        </Grid>
      </div>
    </>
  );
};
