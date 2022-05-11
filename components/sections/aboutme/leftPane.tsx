import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { ContactInfo } from "./leftPane/contactInfo";
import { Links } from "./leftPane/links";
import { ProfilePicture } from "./leftPane/profilePicture";

export const LeftPane = () => {
  return (
    <>
      {/* TODO: Make <Stack/> from mui */}
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <ProfilePicture />
        <ContactInfo />
        <hr />
        <Links />
      </Box>
    </>
  );
};
