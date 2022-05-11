import { Box, Button, ButtonGroup } from "@mui/material";
import Link from "next/link";

export const Links = () => {
  return (
    <>
      {/* TODO: Make list, use icons */}
      <Box marginY={2}>
        <ButtonGroup size="small">
          <Button
            target="_blank"
            size="small"
            variant="outlined"
            href="https://calendly.com/jeanbattirola/30min"
          >
            Meet Me
          </Button>

          <Button
            target="_blank"
            variant="contained"
            href="https://drive.google.com/file/d/1NEtpQDZWAJxut1Ir7rFHurKxxj_fg5RX/view?usp=sharing"
          >
            resume
          </Button>
          <Button
            target="_blank"
            variant="contained"
            sx={{ paddingX: "1em" }}
            href="http://github.com/jeanmbt"
          >
            GITHUB
          </Button>
          <Button target="_blank" variant="contained" href="http://linkedin.com/in/jeanmbt">
            linkedin
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
};
