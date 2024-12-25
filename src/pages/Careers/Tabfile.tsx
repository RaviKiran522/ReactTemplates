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
import PermissionsTable from 'pages/common-components/common-permissions-table';
// import UserHistory from '../UserHistory';
// import CreateFranchiseStaff from './CreateFranchiseStaff';
// import BranchViewProfile from '../branches/ViewBranchProfile';
// import ChnageBranchRole from '../branches/ChangeBranchRole';
import Creerviewprofile from './Creerviewprofile';
import CreerViewProfile from './Creerviewprofile';
// import FranchiseViewProfile from './ViewFranchiseProfile';

// ==============================|| PROFILE - ACCOUNT ||============================== //

export default function Careetabfile({ tabInd }: any) {
  const [value, setValue] = useState(0);
  var user = sessionStorage.getItem('carrresuser');
  console.log('usr: ', user);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  console.log(tabInd);
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

  useEffect(() => {
    if (tabInd) {
      setValue(tabInd);
    }
  }, [tabInd]);
  const handleCheckboxChange = (updatedRoles: any) => {
    console.log('Updated roles:', updatedRoles);
    setRoles(updatedRoles);
  };
  
  const handleTabChange = (newValue: SetStateAction<number>) => {
    setValue(newValue);
  };


  return (
    <>
      <Typography style={{ margin: '5px' }}>Franchise Details</Typography>
      <MainCard border={false}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="account profile tab">
            <Tab label="View Profile" icon={<Profile />} iconPosition="start" />
            <Tab label="Edit Profile" icon={<DocumentText />} iconPosition="start" />
            <Tab label="Change Role" icon={<Profile2User />} iconPosition="start" />
            <Tab label="Permissions" icon={<Setting3 />} iconPosition="start" />
            {/* <Tab label="Settings" icon={<Setting3 />} iconPosition="start" /> */}
            <Tab label="Sales History" icon={<Setting3 />} iconPosition="start" />
          </Tabs>
        </Box>
        <Box>
          <TabPanel value={value} index={0}>
            < CreerViewProfile />
          </TabPanel>
          {/* <TabPanel value={value} index={1}>
            <CreateFranchiseStaff needTitle={false} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ChnageBranchRole />
          </TabPanel> */}
          {/* <TabPanel value={value} index={3}>
            <div> */}
              {/* <h2>Permissions</h2> */}
              {/* <PermissionsTable actions={actions} roles={roles} checkboxhandler={handleCheckboxChange} />
            </div>
          </TabPanel> */}
          {/* <TabPanel value={value} index={4}>
            <div>Settings</div>
          </TabPanel> */}
          {/* <TabPanel value={value} index={4}>
            <UserHistory />
          </TabPanel> */}
        </Box>
        <Box sx={{ mt: 2.5 }}>
          <Outlet />
        </Box>
      </MainCard>
    </>
  );
}
