import { Box, Typography } from "@mui/material";
import { ContactInfo } from "./leftPane/contactInfo";
import { Links } from "./leftPane/links";
import { ProfilePicture } from "./leftPane/profilePicture";

export const LeftPane = () => {
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
          <ContactInfo />
          <Links />
        </Box>
      </Box>
    </>
  );
};
