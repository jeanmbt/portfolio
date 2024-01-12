import { Box, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from "../../../styles/theme/theme";
import { aboutMeText } from "../../../utility/aboutMeText";

export const Bio = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const paddingValue = isSmallScreen ? 3 : isMediumScreen ? 5 : 7;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        color: theme.palette.text.secondary,
      }}
    >
      <Typography
        variant="h5"
        marginBottom={3}
        sx={{
          fontWeight: "bold",
          color: theme.palette.primary.main,
          fontFamily: "Koulen",
          letterSpacing: "0.1em",
        }}
      >
        Bio
      </Typography>
      <Box sx={{ paddingX: paddingValue }}>
        <Typography sx={{ whiteSpace: "break-spaces" }} variant="body2">
          {aboutMeText}
        </Typography>
      </Box>
    </Box>
  );
};
