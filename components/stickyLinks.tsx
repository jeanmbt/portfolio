import { Box, Button, ButtonGroup } from "@mui/material";
import Link from "next/link";
import { theme } from "../styles/theme/theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";

export const StickyLinks = () => {
  return (
    <>
      {/* TODO: Make list, use icons */}
      <Box
        marginY={2}
        padding={1}
        sx={{ position: "sticky", right: "100%", top: "40%", paddingX: 1 }}
      >
        <ButtonGroup orientation="vertical">
          <Button
            target="_blank"
            variant="contained"
            sx={{
              width: 0,
              value: `Jean Michel Battirola's GitHub`,
              ariaLabel: `Jean Michel Battirola's GitHub`,
            }}
            href="http://github.com/jeanmbt"
          >
            <GitHubIcon />
          </Button>

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
            <EmailIcon />
          </Button>
          <Button
            sx={{
              width: 0,
              value: `Jean Michel Battirola's LinkedIn`,
              ariaLabel: `Jean Michel Battirola's LinkedIn`,
            }}
            target="_blank"
            variant="contained"
            href="http://linkedin.com/in/jeanmbt"
          >
            <LinkedInIcon />
          </Button>
          <Button
            target="_blank"
            variant="contained"
            href="https://drive.google.com/file/d/1NEtpQDZWAJxut1Ir7rFHurKxxj_fg5RX/view?usp=sharing"
            sx={{
              width: 0,
              value: `Jean Michel Battirola's CV`,
              ariaLabel: `Jean Michel Battirola's CV`,
              fontWeight: "bold",
            }}
          >
            CV
          </Button>

          <Button
            sx={{
              value: `30 Minutes meeting with Jean Michel Battirola`,
              ariaLabel: `30 Minutes meeting with Jean Michel Battirola`,
              fontWeight: "bold",
              width: 0,
            }}
            target="_blank"
            variant="contained"
            href="https://calendly.com/jeanbattirola/30min"
          >
            <GroupsIcon />
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
};
