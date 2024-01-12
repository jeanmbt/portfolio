import { Box, useTheme, useMediaQuery } from "@mui/material";
import { ContactInfo } from "./leftPane/contactInfo";
import { ProfilePicture } from "./leftPane/profilePicture";

export const LeftPane = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
        color: theme.palette.text.secondary,
      }}
    >
      <ProfilePicture />
      <ContactInfo />
    </Box>
  );
};
