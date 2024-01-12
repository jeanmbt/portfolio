import { Button, Grid, Typography } from "@mui/material";
import { ProjectCard } from "./projects/projectCard";
import { projectsData } from "../../utility/projectsData";
import { useTheme } from "@mui/material/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import useMediaQuery from '@mui/material/useMediaQuery';
export const Projects = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction="column" alignItems="center">
      <Typography
        variant={isSmallScreen ? 'h3' : 'h2'} // Smaller variant on small screens
        sx={{
          marginY: theme.spacing(3),
          width: isSmallScreen ? '100%' : '80%',
          fontWeight: "bold",
          color: theme.palette.background.default,
          bgcolor: theme.palette.secondary.main,
          py: theme.spacing(1), // Use py for vertical padding
          px: theme.spacing(2), // Use px for horizontal padding
          fontFamily: "Koulen",
          letterSpacing: "0.05em",
          textAlign: 'center', // Center text on all screen sizes for consistency
        }}
      >
        PROJECTS
      </Typography>
      {projectsData.map((project) => (
        <Grid item xs={12} key={project.title} sx={{ marginY: theme.spacing(10) }}>
          {/* Add marginY to each ProjectCard */}
          <ProjectCard project={project} />
        </Grid>
      ))}
      <Grid item xs={12} sx={{ marginTop: theme.spacing(2) }}>
        {/* Add marginTop to the button */}
        <Button
          href={"/"}
          sx={{
            ariaLabel: "Back to the top",
          }}
        >
          <ArrowUpwardIcon />
        </Button>
      </Grid>
    </Grid>
  );
};
