import { Box, Button, Divider, Typography, Paper } from "@mui/material";
import { Stacked } from "../../pages";
import { ProjectCard } from "./projects/projectCard";
import { projectsData } from "../../utility/projectsData";
import { theme } from "../../styles/theme/theme";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";

export const Projects = () => {
  return (
    <>
      <Stacked>
        <Typography
          variant="h2"
          sx={{
            width: "75.2%",
            fontWeight: "bold",
            color: theme.palette.primary.main,
            bgcolor: theme.palette.secondary.main,
            paddingLeft: "0.5em",
          }}
        >
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
        <Button>
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <Link passHref={false} href={"/"}>
            <ArrowUpwardIcon />
          </Link>
        </Button>
      </Stacked>
    </>
  );
};
