import React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import MainCard from 'components/MainCard';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const AppLink = () => {
  return (
    <Grid>
        <MainCard>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', pb: 1 }}>
        <Typography>App link (Android & iOS App)</Typography>
        </Box>
        </MainCard>
    </Grid>
  );
};

export default AppLink;