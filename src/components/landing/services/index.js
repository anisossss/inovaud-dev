import { Card, Grid, Text, Link, Image } from "@nextui-org/react";
export const Services = () => {
  const cards = [
    {
      text: "Développement Web",
    },
    {
      text: "Développement Mobile",
    },
    {
      text: "Développement Blockchain",
    },
    {
      text: "Intelligence Artficielle",
    },
    {
      text: "Internet Of Things",
    },
    {
      text: "UX/UI Design",
    },
    {
      text: "Motion Design",
    },
  ];

  return (
    <>
      <Grid align="center">
        <Grid>
          <Text h3 size={"$4xl"}>
            Nos services
          </Text>
        </Grid>
        <Grid.Container
          gap={2}
          css={{
            width: "80%",
            justifyContent: "center",
            margin: "auto",
            marginTop: "5%",
          }}
        >
          {cards.map(({ text }) => (
            <Grid xs={12} sm={4} md={4} key={text} justify="center">
              <Card
                className="card_hover"
                isHoverable
                css={{
                  w: "290px",
                  h: "200px",
                }}
              >
                <Card.Body
                  css={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text span css={{ textAlign: "center" }}>
                    {text}{" "}
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
        <Grid className="blue_path">
          <Image
            src={"/assets/landing/path.svg"}
            width={200}
            height={200}
            objectFit="contain"
          />
        </Grid>{" "}
        <Grid className="blue_path">
          <Image
            src={"/assets/landing/path.svg"}
            width={600}
            height={400}
            objectFit="contain"
          />
        </Grid>
      </Grid>
    </>
  );
};
