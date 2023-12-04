import React from "react";
import Link from "next/link";
import Meta from "../components/seo/index";
import { Grid, Text } from "@nextui-org/react";
export default function Error404() {
  return (
    <>
      <Meta
        title="Page Not Found 404 - INOVAUD"
        description="INOVAUD"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
      ></Meta>
      <Grid.Container css={{ padding: "5%", width: "100%", margin: "auto" }}>
        <Grid css={{ marginBottom: "2em" }}>
          <Grid className="terminal">
            <Text h4 className="output">
              Please try to <Link href="/">go back</Link> or
              <Link href="/">return to the homepage</Link>.
            </Text>
          </Grid>
        </Grid>
      </Grid.Container>
    </>
  );
}
