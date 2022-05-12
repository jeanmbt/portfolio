import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import { NextPage } from "next";

const Art: NextPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        flexDirection: "column",
      }}
    >
      <Typography variant="h1">ART </Typography>
      <Typography
        padding={8}
      >{`I'm glad you're here but this part is still under construction! :(`}</Typography>
      But you can check my links:
      <hr />
      <ButtonGroup>
        <Button target="_blank" href="http://instagram.com/jeanhmua">
          Beauty
        </Button>
        <Button target="_blank" href="">
          Visual
        </Button>
        <Button target="_blank" href="https://soundcloud.com/eunl">
          Music
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Art;
