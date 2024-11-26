import { useEffect, useState, SyntheticEvent } from 'react';
import { useLocation, Link, Outlet, useNavigate } from 'react-router-dom';

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

// ==============================|| PROFILE - ACCOUNT ||============================== //

export default function AccountProfile({ tabNo }: any) {
  const { pathname, state } = useLocation();
  const navigation = useNavigate();
  console.log("state: ", state)
  let selectedTab = 0;
  let breadcrumbTitle = '';
  let breadcrumbHeading = '';
  switch (pathname) {
    case '/apps/profiles/account/personal':
      breadcrumbTitle = 'Personal';
      breadcrumbHeading = 'Personal';
      selectedTab = 1;
      break;
    case '/apps/profiles/account/edit':
      breadcrumbTitle = 'Edit';
      breadcrumbHeading = 'Edit';
      selectedTab = 2;
      break;
    case '/apps/profiles/account/role':
      breadcrumbTitle = 'Role';
      breadcrumbHeading = 'Role';
      selectedTab = 3;
      break;
      case '/apps/profiles/account/permission':
        breadcrumbTitle = 'Permission';
        breadcrumbHeading = 'Permission';
        selectedTab = 4;
        break;
    case '/apps/profiles/account/settings':
      breadcrumbTitle = 'Settings';
      breadcrumbHeading = 'Settings';
      selectedTab = 5;
      break;
    case '/apps/profiles/account/history':
      breadcrumbTitle = 'History';
      breadcrumbHeading = 'History';
      selectedTab = 6;
      break;
    default:
      breadcrumbTitle = 'Basic';
      breadcrumbHeading = 'Profile';
      selectedTab = 0;
  }

  const [value, setValue] = useState(tabNo??selectedTab);
console.log("value: ", value)
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  let breadcrumbLinks = [
    { title: 'Home', to: APP_DEFAULT_PATH },
    { title: 'Account Profile', to: '/apps/profiles/account/basic' },
    { title: breadcrumbTitle }
  ];
  if (selectedTab === 0) {
    breadcrumbLinks = [{ title: 'Home', to: APP_DEFAULT_PATH }, { title: 'Profile' }];
  }

  useEffect(() => {
    if (pathname === '/apps/profiles/account/basic') {
      setValue(0);
    } else if(pathname === '/apps/profiles/account/edit') {
      setValue(1);
    }
  }, [pathname]);

  useEffect(()=>{
    if(tabNo!==null && tabNo!==undefined&&tabNo!=="") {
      if(tabNo===1) {
        navigation('../../apps/profiles/account/edit');
      }
      }
    }, [])

  return (
    <>
      <Breadcrumbs custom heading={breadcrumbHeading} links={breadcrumbLinks} />
      <MainCard border={false}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="account profile tab">
            <Tab label="View Profile" component={Link} to="/apps/profiles/account/basic" icon={<Profile />} iconPosition="start" />
            <Tab label="Edit Profile" component={Link} to="/apps/profiles/account/edit" icon={<DocumentText />} iconPosition="start" />
            <Tab label="Change Role" component={Link} to="/apps/profiles/account/role" icon={<Profile2User />} iconPosition="start" />
            <Tab label="Permissions" component={Link} to="/apps/profiles/account/settings" icon={<Setting3 />} iconPosition="start" />
            <Tab label="Settings" component={Link} to="/apps/profiles/account/settings" icon={<Setting3 />} iconPosition="start" />
            <Tab label="Sales History" component={Link} to="/apps/profiles/account/history" icon={<Setting3 />} iconPosition="start" />
          </Tabs>
        </Box>
        <Box sx={{ mt: 2.5 }}>
          <Outlet />
        </Box>
      </MainCard>
    </>
  );
}
