import React from "react";
import Link from "next/link";
import Meta from "../components/seo/index";
import { Grid, Text } from "@nextui-org/react";
export default function Error404() {
  return (
    <>
      <Meta
        title="Page 404 - INOVAUD"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
      ></Meta>
      <Grid.Container css={{ padding: "5%", width: "100%", margin: "auto" }}>
        <Grid css={{ marginBottom: "2em" }}>
          <Grid className="terminal">
            <Text h4 className="output">
              404...
              <br></br>
              <br></br>
              <Link href="/">Retour à l'acceuil</Link>
            </Text>
          </Grid>
        </Grid>
      </Grid.Container>
    </>
  );
}
