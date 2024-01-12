import { Box, Button, ButtonGroup, Tooltip, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";
import { theme } from "../styles/theme/theme";
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';

export const StickyLinks = () => {
  const router = useRouter();
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const buttonData = [
    {
      title: "Back to my profile",
      icon: <PersonIcon />,
      href: "/",
      condition: router.route === "/cv",
      sx: {
        width: 0,
        value: `Back to my profile`,
        ariaLabel: `Back to my profile`,
        fontWeight: "bold",
        bgcolor: theme.palette.secondary.main,
        "&:hover": { bgcolor: theme.palette.secondary.dark },
      },
    },
    {
      title: "GitHub",
      icon: <GitHubIcon />,
      href: "http://github.com/jeanmbt",
      sx: {
        width: 0,
        value: `GitHub`,
        ariaLabel: `GitHub`,
      },
    },
    {
      title: "Email",
      icon: <EmailIcon />,
      href: "mailto:jeanbattirola@gmail.com",
      sx: {
        width: 0,
        value: `Send Jean Michel Battirola an Email`,
        ariaLabel: `Send Jean Michel Battirola an Email`,
      },
    },
    {
      title: "LinkedIn",
      icon: <LinkedInIcon />,
      href: "http://linkedin.com/in/jeanmbt",
      sx: {
        width: 0,
        value: `LinkedIn`,
        ariaLabel: `LinkedIn`,
      },
    },
    {
      title: "CV",
      icon: "CV",
      href: "/cv",
      condition: router.route === "/",
      sx: {
        width: 0,
        value: `CV`,
        ariaLabel: `CV`,
        fontWeight: "bold",
      },
    },
    {
      title: "Meet Me",
      icon: <GroupsIcon />,
      href: "https://calendly.com/jeanbattirola/30min",
      sx: {
        value: `Meet Me`,
        ariaLabel: `Meet Me`,
        fontWeight: "bold",
        width: 0,
      },
    },
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  return (
    <Box
      marginY={2}
      padding={1}
      sx={{ position: "sticky", right: "100%", top: "35%", paddingX: 1 }}
    >
      {isSmallScreen 
        ? (
          <Tooltip title="Menu">
            <IconButton onClick={handleMenuClick}>
              <MenuIcon sx={{ 
                color: theme.palette.secondary,
                fontSize: "2rem",
                backgroundColor: theme.palette.primary,
                borderRadius: "100%"
              }} /> 
            </IconButton>
          </Tooltip> 
        ) 
        : (
          <ButtonGroup orientation="vertical">
            {buttonData.map((button, index) => (
              button.condition === undefined || button.condition ? (
                <Tooltip key={index} title={button.title}>
                  <Button
                    variant="contained"
                    href={button.href}
                    sx={button.sx}
                  >
                    {button.icon}
                  </Button>
                </Tooltip>
              ) : null
            ))}
         </ButtonGroup>
       )}

      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClose}
      >
        {buttonData.map((button, index) => (
          button.condition === undefined || button.condition ? (
            <MenuItem key={index} onClick={handleClose}>
              <a href={button.href} style={{ textDecoration: "none", color: "inherit" }}>
                {button.title}
              </a>
            </MenuItem>
          ) : null
        ))}
      </Menu>
    </Box>
  );
};
