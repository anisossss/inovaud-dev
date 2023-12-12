import Image from "next/image";
import React from "react";

const ServiceDetail = ({ serviceName, description, image }) => {
  return (
    <div>
      <h2>{serviceName}</h2>
      <p>{description}</p>
      <Image
        src={"/assets/gifs/iot.gif"}
        alt="Inovaud IOT"
        height={400}
        width={400}
      />
    </div>
  );
};

export default ServiceDetail;
