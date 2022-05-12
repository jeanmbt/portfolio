import { Box, Typography } from "@mui/material";
import { theme } from "../../../styles/theme/theme";
import { aboutMeText } from "../../../utility/aboutMeText";

export const Bio = () => {
  return (
    <>
      {/* TODO: Make <Stacked/> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "50%",
          color: theme.palette.text.secondary,
        }}
      >
        <Typography
          variant="h5"
          marginBottom={3}
          sx={{ fontWeight: "bold", color: theme.palette.primary.main, fontFamily: "Koulen " }}
        >
          Bio
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
