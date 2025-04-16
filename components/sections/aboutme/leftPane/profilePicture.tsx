import { Box } from "@mui/material";
import profile from "../../../../public/old_profile.png";

export const ProfilePicture = () => {
  return (
    <Box
      borderRadius={"100%"}
      margin="2em"
      padding={15}
      width={"3em"}
      height={"3em"}
      sx={{
        backgroundImage: `url(${profile.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
  );
};
