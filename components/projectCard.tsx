import { Box, Typography, Paper, Button } from "@mui/material";
import Image from "next/image";
import { Stacked } from "../pages";

import whichhours from "../public/projectImg/whichhours.gif";
import { Project } from "../utility/projectsData";
interface ProjectCard {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCard) => {
  return (
    <>
      <Typography variant="h6" marginTop={5}>
        {project.title}
      </Typography>
      <Stacked component={Paper} sx={{ margin: "2em" }}>
        <Box
          margin="2em"
          paddingX={40}
          paddingY={20}
          sx={{
            backgroundImage: `url(${project.img})`,
            backgroundSize: "cover",
          }}
        />

        <Box sx={{ margin: 3, display: "flex", justifyContent: "space-between" }}>
          {project.techs.map((tech: any) => {
            return (
              <Button sx={{ cursor: "default" }} key={`${tech}${project}`}>
                {tech}
              </Button>
            );
          })}
        </Box>
        <Box padding={2} margin={2}>
          {project.description}
        </Box>
        <Box sx={{ width: "80%", display: "flex", justifyContent: "space-around", margin: "1em" }}>
          <Button variant="outlined">repository</Button>
          <Button variant="contained">Visit page</Button>
        </Box>
      </Stacked>
    </>
  );
};
