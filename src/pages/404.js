import React from "react";
import Link from "next/link";
import Meta from "../components/seo/index";
import { Grid, Text } from "@nextui-org/react";
import { IndexLayout } from "../layouts/IndexLayout";
export default function Error404() {
  return (
    <>
      <Meta
        title="Page 404 - INOVAUD"
        description="INOVAUD"
        thumbnail=""
      ></Meta>
      <IndexLayout>
        <Grid className="notfound">
          <Text h3>
            Page introuvable 404...
            <br></br>
            <br></br>
            <Link href="/">Retour à l'acceuil</Link>
          </Text>
        </Grid>
      </IndexLayout>
    </>
  );
}
