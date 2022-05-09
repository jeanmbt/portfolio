import { Box, Typography } from "@mui/material";
import { aboutMeText } from "../../utility/aboutMeText";
import profile from "../../public/profile.png";
import Link from "next/link";

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
        <Typography variant="h6">Jean Michel Battirola</Typography>
        <Typography variant="subtitle2">Full-Stack Developer</Typography>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", margin: "1em" }}>
          <Box>
            <Link href="github.com/jeanmbt">Github</Link>
          </Box>
          <Box>
            <Link href="linkedin.com/in/jeanmbt">LinkedIn</Link>
          </Box>
          <Box>
            <Box>+49 1522 4945 601</Box>
          </Box>
          <Box>
            <Box>jeanbattirola@gmail.com</Box>
          </Box>
          <Box>CV</Box>
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
        <Box>
          <Typography sx={{ whiteSpace: "break-spaces" }} variant="body2">
            {aboutMeText}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
