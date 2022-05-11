import { Box, Typography } from "@mui/material";
import { Stacked } from "../../pages";
import { Project } from "../../types/projects";
import { ProjectCard } from "../projectCard";
import { projects } from "../../utility/projects";

export const Projects = () => {
  return (
    <>
      <Stacked>
        <Typography variant="h4">Projects</Typography>
        {/* project placeholder */}
        {projects.map((project) => {
          return <ProjectCard key={project.title} project={project} />;
          console.log(project);
        })}
      </Stacked>
    </>
  );
};
