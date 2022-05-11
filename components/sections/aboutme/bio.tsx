import { Box, Typography } from "@mui/material";
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
        }}
      >
        <Typography variant="h5" marginBottom={3} sx={{ fontWeight: "bold" }}>
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
