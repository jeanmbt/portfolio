import { Box, Button, ButtonGroup, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";
import { useRouter } from "next/router";
import PersonIcon from "@mui/icons-material/Person";
import { theme } from "../styles/theme/theme";
// TODO: Make list, use icons
export const StickyLinks = () => {
  const router = useRouter();

  return (
    <Box
      marginY={2}
      padding={1}
      sx={{position: "sticky", right: "100%", top: "35%", paddingX: 1}}
    >
      <ButtonGroup orientation="vertical">
        {router.route==="/cv" && (
          <Tooltip title="Back to my profile">
            <Button
              variant="contained"
              href="/"
              sx={{
                width: 0,
                value: `Back to my profile`,
                ariaLabel: `Back to my profile`,
                fontWeight: "bold",
                bgcolor: theme.palette.secondary.main,
                "&:hover": {bgcolor: theme.palette.secondary.dark},
              }}
            >
              <PersonIcon/>
            </Button>
          </Tooltip>
        )}
        <Tooltip title="GitHub">
          <Button
            target="_blank"
            variant="contained"
            sx={{
              width: 0,
              value: `GitHub`,
              ariaLabel: `GitHub`,
            }}
            href="http://github.com/jeanmbt"
          >
            <GitHubIcon/>
          </Button>
        </Tooltip>
        <Tooltip title="Email">
          <Button
            sx={{
              width: 0,
              value: `Send Jean Michel Battirola a Email`,
              ariaLabel: `Send Jean Michel Battirola a Email`,
            }}
            target="_blank"
            size="small"
            variant="contained"
            href="mailto:dev@jeanbattirola.com"
          >
            <EmailIcon/>
          </Button>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <Button
            sx={{
              width: 0,
              value: `LinkedIn`,
              ariaLabel: `LinkedIn`,
            }}
            target="_blank"
            variant="contained"
            href="http://linkedin.com/in/jeanmbt"
          >
            <LinkedInIcon/>
          </Button>
        </Tooltip>
        {router.route==="/" && (
          <Tooltip title="Resume">
            <Button
              variant="contained"
              href="/cv"
              sx={{
                width: 0,
                value: `CV`,
                ariaLabel: `CV`,
                fontWeight: "bold",
              }}
            >
              CV
            </Button>
          </Tooltip>
        )}

        <Tooltip title="Meet Me">
          <Button
            sx={{
              value: `Meet Me`,
              ariaLabel: `Meet Me`,
              fontWeight: "bold",
              width: 0,
            }}
            target="_blank"
            variant="contained"
            href="https://calendly.com/jeanbattirola/30min"
          >
            <GroupsIcon/>
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Box>
  );
}
