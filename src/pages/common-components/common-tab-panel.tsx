import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function TabPanel({ children, value, index, ...other }: any) {
    return (
      <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }