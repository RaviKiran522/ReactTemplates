import { useEffect, useState, SyntheticEvent } from 'react';
import { useLocation, Link, Outlet } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

// project-imports
import MainCard from 'components/MainCard';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import { APP_DEFAULT_PATH } from 'config';

// assets
import { DocumentText, Lock, Profile, Profile2User, Setting3, TableDocument } from 'iconsax-react';
import TabPanel from 'pages/common-components/common-tab-panel';
import TabProfile from 'sections/apps/profiles/account/TabProfile';
import Typography from '@mui/material/Typography';


// ==============================|| PROFILE - ACCOUNT ||============================== //

export default function FranchiseProfile() {
  let { pathname } = useLocation();
  

  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };




  return (
    <>
      <Typography>Franchise Details</Typography>
      <MainCard border={false}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="account profile tab">
            <Tab label="View Profile"  icon={<Profile />} iconPosition="start" />
            <Tab label="Edit Profile"  icon={<DocumentText />} iconPosition="start" />
            {/* <Tab label="User Files" icon={<Setting3 />} iconPosition="start" /> */}
            <Tab label="Change Role"  icon={<Profile2User />} iconPosition="start" />
            <Tab label="Permissions"  icon={<Setting3 />} iconPosition="start" />
            <Tab label="Settings"  icon={<Setting3 />} iconPosition="start" />
            <Tab label="Sales History"  icon={<Setting3 />} iconPosition="start" />
          </Tabs>
        </Box>
        <Box>
        <TabPanel value={value} index={0}>
<TabProfile/>
            </TabPanel> 
            <TabPanel value={value} index={1}>
            <div>Edit</div>
</TabPanel> 
<TabPanel value={value} index = {2}>

</TabPanel> 
<TabPanel value={value} index = {3}>
<div>reason</div>
</TabPanel> 
<TabPanel value={value} index = {4}>
<div>Edit</div>
</TabPanel> 
<TabPanel value={value} index = {5}>
<div>Edit</div>
</TabPanel> 
        </Box>
        <Box sx={{ mt: 2.5 }}>
          <Outlet />
        </Box>
      </MainCard>
    </>
  );
}
