import { Grid, Input, Text, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";

export const ContactForm = () => {
  return (
    <>
      <Grid
        css={{
          padding: "3%",
          margin: "auto",
          marginTop: "8%",
        }}
      >
        <Grid className="candidate_wrapper">
          <Grid align="center">
            <Grid>
              <Text h3 css={{ textTransform: "uppercase" }}>
                Réserver un rendez-vous
              </Text>
            </Grid>
            <br></br>
            <Grid>
              <Text size={"$md"} span>
                Vous pouvez contacter l'un de nos experts, nous serons toujours
                heureux de vous aider. <br></br>Demandez un rendez-vous en
                remplissant ce formulaire. Nous vous reviendrons dans les plus
                brefs délais.
              </Text>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <Grid className="green_path1">
            <Image
              src={"/assets/landing/path_lines_green.svg"}
              width={600}
              height={400}
              objectFit="contain"
            />
          </Grid>
          <Grid className="candidate_form">
            <Grid css={{ width: "100%" }}>
              <Input
                label={<span style={{ fontSize: "18px" }}>Nom</span>}
                placeholder=" "
                fullWidth
              />
            </Grid>
            <Grid>
              <Input
                label={<span style={{ fontSize: "18px" }}>Prénom</span>}
                placeholder=""
                fullWidth
              />
            </Grid>
            <Grid>
              <Input
                label={<span style={{ fontSize: "18px" }}>Email</span>}
                placeholder=""
                fullWidth
              />
            </Grid>

            <Grid>
              <Textarea
                label={<span style={{ fontSize: "18px" }}>Message</span>}
                placeholder=""
                fullWidth
              />
            </Grid>
            <br></br>
            <Grid className="row block">
              <button className="btn cyber">Envoyer</button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
