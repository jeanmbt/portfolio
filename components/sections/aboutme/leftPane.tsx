import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { theme } from "../../../styles/theme/theme";
import { ContactInfo } from "./leftPane/contactInfo";

import { ProfilePicture } from "./leftPane/profilePicture";

export const LeftPane = () => {
  return (
    <>
      {/* TODO: Make <Stack/> from mui */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: theme.palette.text.secondary,
        }}
      >
        <ProfilePicture />
        <ContactInfo />
      </Box>
    </>
  );
};
