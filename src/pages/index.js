import React, { useEffect, useRef, useState } from "react";
import Meta from "../components/seo/index";
import { IndexLayout } from "../layouts/IndexLayout";
import Cursor from "../components/cursor/Cursor";
import { Hero } from "../components/landing/hero";
import { Solution } from "../components/landing/solution";
import { ServicesCards } from "../components/landing/services";
import { Rdv } from "../components/landing/rdv";
import { Workflow } from "../components/landing/workflow";
import { Values } from "../components/landing/values";
import { gsap } from "gsap";
import { Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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
      endScale,
      rotation,
      duration = 4,
      ease = "power2.inOut"
    ) => {
      gsap.to(pyramidRef.current, {
        scrollTrigger: {
          trigger: pyramidRef.current,
          start: start,
          end: end,
          scrub: duration,
          toggleActions: "play reverse play reverse",
        },
        rotation: rotation,
        y: offsetY,
        x: offsetX,
        scale: endScale,
        ease: ease,
      });
    };
    const animatePath = (
      pathRef,
      start,
      end,
      offsetY,
      offsetX,
      duration = 3,
      ease = "power2.inOut"
    ) => {
      gsap.to(pathRef.current, {
        scrollTrigger: {
          trigger: pathRef.current,
          start: start,
          end: end,
          scrub: duration,
          toggleActions: "play reverse play reverse",
        },
        y: offsetY,
        x: offsetX,
        ease: ease,
      });
    };
    animatePath(path, "top center", "bottom bottom", 500, 200);

    animatePyramid(pyramid1, "top center", "bottom bottom", -80, 2, 2, 60);
    animatePyramid(pyramid3, "top center", "bottom bottom", 80, 2, 2, 60);
    animatePyramid(pyramid4, "top center", "bottom bottom", 80, 2, 2, 60);
  }, []);

  return (
    <>
      <Meta
        title="INOVAUD - Acceuil"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="INOVAUD"
      ></Meta>
      <IndexLayout>
        <div ref={path}>
          <Grid className="green_path1">
            <Image
              src={"/assets/landing/path_lines_green.svg"}
              width={600}
              height={500}
              objectFit="contain"
            />
          </Grid>
        </div>
        <div ref={path}>
          <Grid className="green_path2">
            <Image
              src={"/assets/landing/path_lines_green.svg"}
              width={600}
              height={500}
              objectFit="contain"
            />
          </Grid>
        </div>
        <div ref={pyramid4}>
          <Grid className="pyramid4">
            <Image
              src={"/assets/landing/pyramid_green_2.svg"}
              width={300}
              height={200}
              objectFit="contain"
            />
          </Grid>
        </div>{" "}
        <div ref={pyramid4}>
          <Grid className="pyramid4">
            <Image
              src={"/assets/landing/pyramid_green_2.svg"}
              width={300}
              height={200}
              objectFit="contain"
            />
          </Grid>
        </div>
        <Hero />
        <div ref={pyramid4}>
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
        <ServicesCards />
        <Solution />
        <Workflow />{" "}
        <div ref={pyramid4}>
          <Grid className="pyramid1">
            <Image
              src={"/assets/landing/pyramid_green_2.svg"}
              width={300}
              height={200}
              objectFit="contain"
            />
          </Grid>
        </div>
        <Values />
        <Rdv />
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Home;
