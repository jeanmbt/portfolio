import { Box, Typography } from "@mui/material";
import { Stacked } from "../pages";
import { Project } from "../types/projects";

interface ProjectCard {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCard) => {
  return (
    <>
      {console.log(project)}
      <Stacked>
        <Box margin="2em" padding={10} border={2}>
          image
        </Box>
        <Typography variant="h6">Title</Typography>
        <Box>used techs</Box>
      </Stacked>
    </>
  );
};
