import { Box, Typography, Paper, Button, Toolbar, ButtonGroup } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Stacked } from "../../../pages";
import { theme } from "../../../styles/theme/theme";
import { Project } from "../../../utility/projectsData";
import { ProjectCardImage } from "./projectCardImage";
import GitHubIcon from "@mui/icons-material/GitHub";
import TabIcon from "@mui/icons-material/Tab";
interface ProjectCard {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCard) => {
  return (
    <>
      <Stacked sx={{ margin: 10, width: 1, padding: 10 }}>
        <ProjectCardImage image={project.image} />

        <Box
          component={Paper}
          sx={{
            width: 0.871,
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
          <ButtonGroup sx={{ display: "flex", justifyContent: "flex-end", margin: 3 }}>
            <Button
              target="_blank"
              href={`${project.repoUrl}`}
              variant="outlined"
              sx={{
                value: `${project.title} GitHub Repository`,
                ariaLabel: `${project.title} GitHub Repository`,
                color: theme.palette.secondary.main,
                border: ` 1px solid ${theme.palette.secondary.main} !important`,
                "&:hover": {
                  border: `1px solid ${theme.palette.primary.dark} !important`,
                  color: theme.palette.primary.dark,
                },
              }}
            >
              <GitHubIcon />
            </Button>
            <Button
              target="_blank"
              href={`${project.url}`}
              variant="contained"
              sx={{
                value: `Visit ${project.title}`,
                ariaLabel: `Visit ${project.title} `,
                bgcolor: theme.palette.secondary.main,
                color: theme.palette.text.secondary,
              }}
            >
              <TabIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Stacked>
    </>
  );
};
