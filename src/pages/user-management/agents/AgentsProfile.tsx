import { useEffect, useState, SyntheticEvent, SetStateAction } from 'react';
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
import CreateAgent from './CreateAgent';
import ChnageBranchRole from '../branches/ChangeBranchRole';
import PermissionsTable from 'pages/common-components/common-permissions-table';
import UserHistory from '../UserHistory';

// ==============================|| PROFILE - ACCOUNT ||============================== //

export default function AgentProfile() {
  let { pathname } = useLocation();

  const [value, setValue] = useState(0);

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

   const handleTabChange = (newValue: SetStateAction<number>) => {
      setValue(newValue);
    };
    
  const handleCheckboxChange = (updatedRoles: any) => {
    console.log('Updated roles:', updatedRoles);
    setRoles(updatedRoles);
  };

  return (
    <>
      <Typography>Agents Details</Typography>
      <MainCard border={false}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="account profile tab">
            <Tab label="View Profile" icon={<Profile />} iconPosition="start" />
            <Tab label="Edit Profile" icon={<DocumentText />} iconPosition="start" />
            {/* <Tab label="User Files" icon={<Setting3 />} iconPosition="start" /> */}
            <Tab label="Change Role" icon={<Profile2User />} iconPosition="start" />
            <Tab label="Permissions" icon={<Setting3 />} iconPosition="start" />
            {/* <Tab label="Settings" icon={<Setting3 />} iconPosition="start" /> */}
            <Tab label="Sales History" icon={<Setting3 />} iconPosition="start" />
          </Tabs>
        </Box>
        <Box>
          <TabPanel value={value} index={0}>
            <TabProfile onActivateTab={() => handleTabChange(4)} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CreateAgent needTitle={false} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ChnageBranchRole />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <PermissionsTable actions={actions} roles={roles} checkboxhandler={handleCheckboxChange} />
          </TabPanel>
          {/* <TabPanel value={value} index={4}>
            <div>Edit</div>
          </TabPanel> */}
          <TabPanel value={value} index={4}>
            <UserHistory />
          </TabPanel>
        </Box>
        <Box sx={{ mt: 2.5 }}>
          <Outlet />
        </Box>
      </MainCard>
    </>
  );
}
