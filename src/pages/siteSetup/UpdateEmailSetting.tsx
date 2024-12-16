import React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import MainCard from 'components/MainCard';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const UpdateEmailSetting = () => {
  return (
    <Grid>
        <MainCard>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', pb: 1 }}>
        <Typography>Update email setting</Typography>
        </Box>
        </MainCard>
    </Grid>
  );
};

export default UpdateEmailSetting;