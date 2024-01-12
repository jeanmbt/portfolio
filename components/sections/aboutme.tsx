import { Divider, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import { Bio } from "./aboutme/bio";
import { LeftPane } from "./aboutme/leftPane";


export const AboutMe = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container spacing={2} direction={isSmallScreen ? 'column' : 'row'}>
      
      <Grid item xs={12} md={6}>
        <LeftPane />
      </Grid>
      
      <Grid 
        item xs={12} md={6} 
        sx={{
          marginTop: isSmallScreen 
            ? 10
            : 7
        }}
      >
        <Bio/>  
      </Grid>
    </Grid>
  );
};
