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
              <Text h3>Réserver un rendez-vous</Text>
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
              <Input label="Nom" placeholder=" " fullWidth />
            </Grid>{" "}
            <Grid>
              <Input label="Adresse e-mail" placeholder="" fullWidth />
            </Grid>{" "}
            <Grid>
              <Input label="Numéro de téléphone" placeholder="" fullWidth />
            </Grid>{" "}
            <Grid>
              <Input label="Disponibilité" placeholder="" fullWidth />
            </Grid>{" "}
            <Grid>
              <Textarea label="Message" placeholder="" fullWidth />
            </Grid>
            <br></br>
            <Grid>
              <button style={{ width: "100%" }} className="main-button">
                Envoyer
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
