import { Box, Typography, Paper, Button, Toolbar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Stacked } from "../../../pages";
import { theme } from "../../../styles/theme/theme";
import { Project } from "../../../utility/projectsData";
import { ProjectCardImage } from "./projectCardImage";
interface ProjectCard {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCard) => {
  return (
    <>
      <Stacked component={Paper} sx={{ margin: 10, width: 0.78, padding: 10 }}>
        <ProjectCardImage image={project.image} />

        <Box
          component={Paper}
          sx={{
            width: 0.87,
            bgcolor: theme.palette.primary.light,
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
          }}
        >
          <Toolbar
            sx={{
              background: `linear-gradient(360deg, rgba(255,255,255,0.0020278375021883788) 60%, ${theme.palette.primary.dark} 450%)`,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {project.techs.map((tech: any) => {
              return (
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.secondary.main, fontWeight: "bold" }}
                  key={`${tech}${project}`}
                >
                  {tech.toUpperCase()}
                </Typography>
              );
            })}
          </Toolbar>
          <Box padding={2} margin={4}>
            <Typography variant="h6" marginBottom={1}>
              {project.title}
            </Typography>
            <Typography>
              <Typography>{project.description}</Typography>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around", margin: 3 }}>
            <Button target="_blank" href={`${project.repoUrl}`} variant="outlined">
              repository
            </Button>
            <Button target="_blank" href={`${project.url}`} variant="contained">
              Visit page
            </Button>
          </Box>
        </Box>
      </Stacked>
    </>
  );
};
