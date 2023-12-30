import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { Grid, Text } from "@nextui-org/react";
import React from "react";
const ServiceDetail = ({ serviceName, description, image, stepsData }) => {
  const steps = [
    {
      title: stepsData.step1title,
      desc: stepsData.step1desc,
      icon: "/assets/icons/1.svg",
    },
    {
      title: stepsData.step2title,
      desc: stepsData.step2desc,
      icon: "/assets/icons/2.svg",
    },
    {
      title: stepsData.step3title,
      desc: stepsData.step3desc,
      icon: "/assets/icons/3.svg",
    },
    {
      title: stepsData.step4title,
      desc: stepsData.step4desc,
      icon: "/assets/icons/4.svg",
    },
    {
      title: stepsData.step5title,
      desc: stepsData.step5desc,
      icon: "/assets/icons/5.svg",
    },
    {
      title: stepsData.step6title,
      desc: stepsData.step6desc,
      icon: "/assets/icons/6.svg",
    },
  ];
  const StepCard = ({ step }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{ background: "#4a4a4a53", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #fff" }}
        date={
          <Grid>
            <Text span css={{ color: "#fff" }}>
              {step.title}
            </Text>
          </Grid>
        }
        iconStyle={{ background: step.iconBg }}
        icon={
          <Grid className="flex justify-center items-center w-full h-full">
            <Image src={step.icon} width={80} height={80} objectFit="contain" />
          </Grid>
        }
      >
        <Grid>
          <Text span size={"$sm"}>
            {step.desc}
          </Text>
        </Grid>
      </VerticalTimelineElement>
    );
  };
  return (
    <>
      <Grid className="service_section">
        <Grid.Container alignItems="center" gap={2}>
          <Grid md={7}>
            <Grid>
              <Text h3>{serviceName}</Text>
              <br></br>
              <Text span size={"$md"}>
                {description}
              </Text>
            </Grid>
          </Grid>
          <Grid>
            <Image src={image} height={350} width={350} />
          </Grid>
        </Grid.Container>
        <Grid className="timeline">
          <VerticalTimeline>
            {steps.map((step, index) => (
              <StepCard key={index} step={step} />
            ))}
          </VerticalTimeline>
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceDetail;
