import { Box, Paper } from "@mui/material";

export const ProjectCardImage = (image: any) => {
  return (
    // TODO: make responsive
    <Box
      margin=""
      paddingX="43.6%"
      paddingY="20%"
      component={Paper}
      sx={{
        backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.0020278375021883788) 74%, #c3c4b040 100%),url(${image.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
      }}
    />
  );
};
