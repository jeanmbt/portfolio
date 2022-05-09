import { Box, Typography, Paper, Button } from "@mui/material";
import Image from "next/image";
import { Stacked } from "../pages";
import { Project } from "../types/projects";
import whichhours from "../public/projectImg/whichhours.gif";
interface ProjectCard {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCard) => {
  const img = project.img;
  return (
    <>
      <Stacked component={Paper} sx={{ margin: "2em" }}>
        <Box
          margin="2em"
          paddingX={40}
          paddingY={20}
          sx={{
            backgroundImage: `url(${project.img})`,
            backgroundSize: "cover",
          }}
        >
          {/* <Image layout="fill" alt={`${project.title} screenshot`} src={}></Image> */}
        </Box>
        <Typography variant="h6">{project.title}</Typography>
        <Box sx={{ margin: 3, display: "flex", justifyContent: "space-between" }}>
          {project.techs.map((tech) => {
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
          <Button>repo</Button>
          <Button>page</Button>
        </Box>
      </Stacked>
    </>
  );
};
