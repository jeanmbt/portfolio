import { Divider } from "@mui/material";
import { Bio } from "./aboutme/bio";
import { LeftPane } from "./aboutme/leftPane";

export const AboutMe = () => {
  return (
    <>
      <LeftPane />
      <Divider orientation="vertical" flexItem />
      <Bio />
    </>
  );
};
