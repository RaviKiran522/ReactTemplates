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
import BranchViewProfile from 'pages/user-management/branches/ViewBranchProfile';
import ChnageBranchRole from 'pages/user-management/branches/ChangeBranchRole';
import PermissionsTable from 'pages/common-components/common-permissions-table';
import CreateBranch from 'pages/user-management/branches/CreateBranch';
import UserHistory from 'pages/user-management/UserHistory';
import ViewProfile from './view-profile';

// ==============================|| PROFILE - ACCOUNT ||============================== //

export default function CustomerViewProfile() {
  const [value, setValue] = useState(0);
  var user = sessionStorage.getItem('branchUser');
  console.log('usr: ', user);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const actions = [{ action: 'View' }, { action: 'Create' }, { action: 'Edit' }, { action: 'Delete' }];

  const [roles, setRoles] = useState([
    {
      id: 1,
      name: 'Administrator',
      permissions: { view: true, create: true, edit: false, delete: false }
    },
    {
      id: 2,
      name: 'Branch Admin',
      permissions: { view: true, create: false, edit: false, delete: false }
    },
    {
      id: 3,
      name: 'Staff',
      permissions: { view: false, create: false, edit: false, delete: false }
    }
  ]);

  const handleCheckboxChange = (updatedRoles: any) => {
    console.log('Updated roles:', updatedRoles);
    setRoles(updatedRoles);
  };

  return (
    <>
      {/* <Typography style={{ margin: '5px' }}>Branch Details</Typography> */}
      <MainCard border={false}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="account profile tab">
            <Tab label="Profile Details" icon={<Profile />} iconPosition="start" />
            
          </Tabs>
        </Box>
        <Box>
          <TabPanel value={value} index={0}>
            <ViewProfile />
          </TabPanel>
        </Box>
        <Box sx={{ mt: 2.5 }}>
          <Outlet />
        </Box>
      </MainCard>
    </>
  );
}