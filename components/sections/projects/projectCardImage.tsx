import { Box, Paper, Typography } from "@mui/material";

export const ProjectCardImage = ({ image }: { image?: string }) => {
  const paddingBottomValue = image ? "56.25%" : "30%"; // for example, 30% to make it shorter

  return (
    <Box
      component={Paper}
      sx={{
        position: 'relative',
        width: '87.1%',
        paddingBottom: paddingBottomValue, // 16:9
        overflow: 'hidden', // Ensure the image doesn't exceed the container
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
        backgroundColor: image ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)', // Semi-transparent black for both cases
      }}
    >
      {image ? (
        <img
          src={image}
          alt="Project Image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain', // Makes sure the whole image is visible
            position: 'absolute',
            top: '0',
            left: '0',
          }}
        />
      ) : (
        <Typography
          variant="h6"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: "Koulen",
            letterSpacing: "0.05em",
            color: "white", // Changed to white for visibility
            textAlign: 'center',
            width: '100%', // Ensure the text is centered
          }}
        >
          Image not available for Private Projects
        </Typography>
      )}
    </Box>
  );
};
