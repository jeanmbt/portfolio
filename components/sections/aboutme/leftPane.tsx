import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { ContactInfo } from "./leftPane/contactInfo";
import { ProfilePicture } from "./leftPane/profilePicture";

export const LeftPane = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [width, setWidth] = useState('60%'); // Default to large screen size

  useEffect(() => {
    // Adjust width based on the screen size
    if (isSmallScreen) {
      setWidth('100%');
    } else if (isMediumScreen) {
      setWidth('80%');
    } else {
      setWidth('60%');
    }
  }, [isSmallScreen, isMediumScreen]);

  return (
    <Box
      sx={{
        display: "flex",
        width: width,
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
