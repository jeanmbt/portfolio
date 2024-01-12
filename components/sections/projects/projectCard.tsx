import { Box, Tooltip, Typography, Paper, Button, Toolbar, ButtonGroup } from "@mui/material";
import { Stacked } from "../../../pages";
import { theme } from "../../../styles/theme/theme";
import { Project } from "../../../utility/projectsData";
import { ProjectCardImage } from "./projectCardImage";
import GitHubIcon from "@mui/icons-material/GitHub";
import TabIcon from "@mui/icons-material/Tab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

interface ProjectCard {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCard) => {

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const tagsFontSize = isSmallScreen ? '0.7em' : '1em';

  return (
    <Stacked key={`${project.title}`} sx={{ margin: 1, width: 1}}>
      
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
                sx={{ color: theme.palette.primary.dark, fontWeight: "bold", fontSize: tagsFontSize }}
                key={`${tech}${project}`}
              >
                {tech.toUpperCase()}
              </Typography>
            );
          })}
        </Toolbar>
        <Box padding={2} margin={4}>
          <Typography
            variant="h6"
            marginBottom={1}
            sx={{
              fontFamily: "Koulen ",
              letterSpacing: " 0.05em",
            }}
          >
            {project.title}
          </Typography>
          <Typography>
            <Typography>{project.description}</Typography>
          </Typography>
        </Box>
        <ButtonGroup sx={{ display: "flex", justifyContent: "flex-end", margin: 3 }}>
            <Tooltip title={`Visit ${project.title}'s GitHub repository`}>
              <Button
                target="_blank"
                href={`${project.repoUrl}`}
                variant="outlined"
                disabled={!project.repoUrl}
                sx={{
                  value: `${project.title} GitHub Repository`,
                  ariaLabel: `${project.title} GitHub Repository`,
                  color: theme.palette.secondary.main,
                  border: ` 1px solid ${theme.palette.secondary.main} !important`,
                  "&:hover": {
                    border: `1px solid ${theme.palette.primary.main} !important`,
                    color: theme.palette.text.secondary,
                    bgcolor: theme.palette.primary.dark,
                  },
                }}
              >
                <GitHubIcon />
              </Button>
            </Tooltip>
          )
          <Tooltip title={`Visit ${project.title}`}>
            <Button
              target="_blank"
              href={`${project.url}`}
              variant="contained"
              disabled={!project.url}
              sx={{
                value: `Visit ${project.title}`,
                ariaLabel: `Visit ${project.title} `,
                bgcolor: theme.palette.secondary.main,
                color: theme.palette.text.secondary,
                boxShadow: "none",
                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
            >
              <TabIcon />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </Box>
    </Stacked>
  );
};
