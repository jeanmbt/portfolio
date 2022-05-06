import { Box, Typography } from "@mui/material";
import { aboutMeText } from "../../utility/aboutMeText";
import profile from "../../public/profile.png";

export const AboutMe = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Box
          borderRadius={"100%"}
          margin="2em"
          padding={10}
          width={"3em"}
          height={"3em"}
          sx={{
            backgroundImage: `url(${profile.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></Box>
        Jean Michel Battirola
        <Box>
          <Box>GH</Box>
          <Box>Linkedin</Box>

          <Box>Phone</Box>
          <Box>Email</Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <Typography variant="h5" marginBottom={3}>
          About me
        </Typography>
        <Box>{aboutMeText}</Box>
      </Box>
    </>
  );
};
