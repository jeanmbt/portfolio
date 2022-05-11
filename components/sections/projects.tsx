import { Box, Typography } from "@mui/material";
import { Stacked } from "../../pages";
import { ProjectCard } from "../projectCard";
import { projectsData } from "../../utility/projectsData";

export const Projects = () => {
  return (
    <>
      <Typography variant="h4">Projects</Typography>
      <Stacked>
        {projectsData.map((project) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </Stacked>
    </>
  );
};
