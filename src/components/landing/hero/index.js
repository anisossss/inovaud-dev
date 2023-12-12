import { Grid, Text } from "@nextui-org/react";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
const Fade = require("react-reveal/Fade");
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const Hero = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null); // Assuming this is another text reference

  useEffect(() => {
    const textAnimations = gsap.timeline({
      scrollTrigger: {
        trigger: [textRef1.current, textRef2.current], // Array of trigger elements
        start: "top 80%", // Adjust the start position as needed
        end: "bottom 60%", // Adjust the end position as needed
        toggleActions: "play none none reverse",
        // Add more ScrollTrigger configurations as needed
      },
    });

    textAnimations
      .fromTo(
        textRef1.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(
        textRef2.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5" // Adjust timing to stagger the animation if needed
      );
  }, []);
  return (
    <>
      <Grid css={{ padding: "10%", margin: "auto" }} align="center" md={12}>
        <Grid ref={textRef1}>
          <Text h3>Votre vision, nos solutions</Text>
        </Grid>
        <br></br>

        <Grid className="green_path1">
          <Image
            src={"/assets/landing/path_lines_green.svg"}
            width={600}
            height={400}
            objectFit="contain"
          />
        </Grid>

        <Grid className="pyramid3">
          <Image
            src={"/assets/landing/pyramid_green_2.svg"}
            width={300}
            height={200}
            objectFit="contain"
          />
        </Grid>
        <Grid className="content" ref={textRef2}>
          <Text size={"$md"} span>
            Vous avez un projet, une vision.. <br></br>
            Son déploiement requiert un outil, une solution. Sur mesure et
            innovante. <br></br>
            Celle-ci sera le fruit de notre étroite et créative collaboration
          </Text>
        </Grid>

        <Grid className="pyramid1">
          <Image
            src={"/assets/landing/pyramid_green_2.svg"}
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
          src={"/assets/landing/pyramid_green_3.svg"}
          width={300}
          height={200}
          objectFit="contain"
        />
      </Grid>
    </>
  );
};
