import { Box, Typography, Divider } from "@mui/material";
import { aboutMeText } from "../../utility/aboutMeText";
import { ProfilePicture } from "./aboutme/profilePicture";
import { Links } from "./aboutme/links";

export const AboutMe = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <ProfilePicture />
        <Typography variant="h6">Jean Michel Battirola</Typography>
        <Typography variant="subtitle2">Full-Stack Developer</Typography>

        {/* TODO: Make <Stacked/> */}
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
            <Typography>+49 1522 4945 601</Typography>
          </Box>
          <Box>
            <Typography>dev@jeanbattirola.com</Typography>
          </Box>
          <Links />
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
