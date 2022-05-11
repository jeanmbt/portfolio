import { Box, Typography, Divider } from "@mui/material";
import { aboutMeText } from "../../utility/aboutMeText";
import profile from "../../public/profile.png";
import Link from "next/link";
import { ProfilePicture } from "./aboutme/profilePicture";

export const AboutMe = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <ProfilePicture />
        <Typography variant="h6">Jean Michel Battirola</Typography>
        <Typography variant="subtitle2">Full-Stack Developer</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginY: 1,
          }}
        >
          <Box>
            <Box>+49 1522 4945 601</Box>
          </Box>
          <Box>
            <Box>dev@jeanbattirola.com</Box>
          </Box>

          {/* LINKS */}
          <Box marginY={2}>
            <Box>
              <Link href="http://github.com/jeanmbt">
                <a target="_blank">Github</a>
              </Link>
            </Box>
            <Box>
              <Link href="http://linkedin.com/in/jeanmbt">LinkedIn</Link>
            </Box>
            <Box>CV</Box>
          </Box>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem />
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
