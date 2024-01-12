import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { theme } from "../../../../styles/theme/theme";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export const ContactInfo = () => {
  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Jean Michel Battirola
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: "Koulen ", letterSpacing: " 0.05em", marginBottom: "1rem" }}>
        Full Stack Software Engineer
      </Typography>
      <Box>
        <Link href="mailto:jeanbattirola@gmail.com" passHref>
          <a target="_blank">
            {/* TODO: Make copy to clipboard button */}
            <Typography
              variant="body1"
              sx={{
                padding: 0.5,
                bgcolor: theme.palette.primary.dark,
                "&:hover": { bgcolor: theme.palette.secondary.light },
              }}
            >
              jeanbattirola@gmail.com
            </Typography>
          </a>
        </Link>
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginTop={1}>
        <Typography variant="subtitle2" marginTop={1}>
          <LocalPhoneIcon sx={{ fontSize: "1em" }} />
              49 172 8353 516
        </Typography>
        <Typography variant="subtitle2" marginTop={1}>
          Berlin, Germany
        </Typography>
      </Box>
    </>
  );
};
