import { Box } from "@mui/material";
import Link from "next/link";

export const Links = () => {
  return (
    <>
      <Box marginY={2}>
        <Box>
          <Link href="http://github.com/jeanmbt">
            <a target="_blank">Github</a>
          </Link>
        </Box>
        <Box>
          <Link href="http://linkedin.com/in/jeanmbt">
            <a target="_blank">LinkedIn</a>
          </Link>
        </Box>
        <Box>CV</Box>
      </Box>
    </>
  );
};
