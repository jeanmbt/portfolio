import { Box, Divider, Typography, Paper } from "@mui/material";
import { Stacked } from "../../pages";
import { ProjectCard } from "./projects/projectCard";
import { projectsData } from "../../utility/projectsData";
import { theme } from "../../styles/theme/theme";

export const Projects = () => {
  return (
    <>
      <Stacked>
        <Typography variant="h2" sx={{ fontWeight: "bold", color: theme.palette.primary.dark }}>
          PROJECTS
        </Typography>
        {projectsData.map((project) => {
          return (
            <>
              <ProjectCard key={project.title} project={project} />
              <Divider />
            </>
          );
        })}
      </Stacked>
    </>
  );
};
