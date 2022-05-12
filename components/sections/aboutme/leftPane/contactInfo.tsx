import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { theme } from "../../../../styles/theme/theme";

export const ContactInfo = () => {
  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Jean Michel Battirola
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: "Koulen " }}>
        Web developer
      </Typography>
      <hr />
      <Box>
        <Link href="mailto:dev@jeanbattirola.com">
          <a target="_blank">
            {/* TODO: Make copy to clipboard button */}
            <Typography variant="body1" sx={{ padding: 0.5, bgcolor: theme.palette.primary.dark }}>
              dev@jeanbattirola.com
            </Typography>
          </a>
        </Link>
      </Box>
      <Box>
        <Typography variant="subtitle2">+49 1522 4945 601</Typography>
      </Box>
    </>
  );
};
