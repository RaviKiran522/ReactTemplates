import { FormattedMessage } from 'react-intl';

export const loadingMenu = [
    {
      id: 'group-dashboard-loading',
      title: <FormattedMessage id="dashboard" />,
      type: 'group',
      icon: null,
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard/default',
          breadcrumbs: false
        },
        {
          id: 'userManagement',
          title: "User Management",
          type: 'collapse',
          icon: null,
          children: [{
            id: 'branches',
            title: "Branches",
            type: 'collapse',
            icon: null,
            children: [
              {
                id: 'listBranch',
                title: 'List Branch',
                type: 'item',
                url: '/branches/listBranch',
                breadcrumbs: false
              },
              {
                id: 'createBranch',
                title: 'Create Branch',
                type: 'item',
                url: '/branches/createBranch',
                breadcrumbs: false
              },
              {
                id: 'branchStaff',
                title: 'Staff',
                type: 'item',
                url: '/branches/branchStaff',
                breadcrumbs: false
              },
            ]
          },
          {
            id: 'createUser',
            title: 'Create User',
            type: 'item',
            url: '/dashboard/createUser',
            breadcrumbs: false
          },
          {
            id: 'franchise',
            title: "Franchise",
            type: 'collapse',
            icon: null,
            children: [
              {
                id: 'listFranchise',
                title: 'List Franchise',
                type: 'item',
                url: '/franchise/listFranchise',
                breadcrumbs: false
              },
              {
                id: 'createFranchise',
                title: 'Create Franchise',
                type: 'item',
                url: '/franchise/createFranchise',
                breadcrumbs: false
              },
              {
                id: 'franchiseStaff',
                title: 'Staff',
                type: 'item',
                url: '/franchise/franchiseStaff',
                breadcrumbs: false
              },
            ]
          },
          {
            id: 'agents',
            title: "Agents",
            type: 'collapse',
            icon: null,
            children: [
              {
                id: 'listAgents',
                title: 'List Agents',
                type: 'item',
                url: '/agents/listAgents',
                breadcrumbs: false
              },
              {
                id: 'createAgents',
                title: 'Create Agents',
                type: 'item',
                url: '/agents/createAgents',
                breadcrumbs: false
              }
            ]
          },]
        },
        {
          id: 'customerManagement',
          title: 'Customer Management',
          type: 'collapse',
          breadcrumbs: false,
          children: [
            {
              id: 'listCustomers',
              title: 'List Customers',
              type: 'item',
              url: '/customerManagement/listCustomers',
              breadcrumbs: false
            },
            {
              id: 'freeCustomers',
              title: 'Free Customers',
              type: 'item',
              url: '/customerManagement/freeCustomers',
              breadcrumbs: false
            },
            {
              id: 'paidCustomers',
              title: 'Paid Customers',
              type: 'item',
              url: '/customerManagement/paidCustomers',
              breadcrumbs: false
            },
            {
              id: 'blockedCustomers',
              title: 'Blocked Customers',
              type: 'item',
              url: '/customerManagement/blockedCustomers',
              breadcrumbs: false
            },
            {
              id: 'convertedCustomers',
              title: 'Converted Customers',
              type: 'item',
              url: '/customerManagement/convertedCustomers',
              breadcrumbs: false
            },
            {
              id: 'planExpiredCutomers',
              title: 'Plan Expired Customers',
              type: 'item',
              url: '/customerManagement/planExpiredCustomers',
              breadcrumbs: false
            },
            {
              id: 'blockedRequests',
              title: 'Blocked Requests',
              type: 'item',
              url: '/customerManagement/blockedRequests',
              breadcrumbs: false
            },
            {
              id: 'createCustomer',
              title: 'Create Customer',
              type: 'item',
              url: '/customerManagement/createCustomer',
              breadcrumbs: false
            }
          ]
        }, 
        {
          id: 'staffCalling',
          title: 'Staff Calling',
          type: 'item',
          url: '/staffCalling',
          breadcrumbs: false
        },
        {
          id: 'search',
          title: 'Search',
          type: 'item',
          url: '/search',
          breadcrumbs: false
        },
        {
          id: 'sales',
          title: 'Sales',
          type: 'item',
          url: '/sales',
          breadcrumbs: false
        },
        {
          id: 'plans',
          title: 'Plans',
          type: 'item',
          url: '/plans',
          breadcrumbs: false
        },
        {
          id: 'addNewDetails',
          title: 'Add New Details',
          type: 'collapse',
          breadcrumbs: false,
          children: [
            {
              id: 'country',
              title: 'Country',
              type: 'item',
              url: '/addNewDetails/country',
              breadcrumbs: false
            },
            {
              id: 'state',
              title: 'State',
              type: 'item',
              url: '/addNewDetails/state',
              breadcrumbs: false
            },
            {
              id: 'district',
              title: 'District',
              type: 'item',
              url: '/addNewDetails/district',
              breadcrumbs: false
            },
            {
              id: 'city',
              title: 'City',
              type: 'item',
              url: '/addNewDetails/city',
              breadcrumbs: false
            },
            ,
            {
              id: 'religion',
              title: 'Religion',
              type: 'item',
              url: '/addNewDetails/religion',
              breadcrumbs: false
            },
            {
              id: 'caste',
              title: 'Caste',
              type: 'item',
              url: '/addNewDetails/caste',
              breadcrumbs: false
            },
            {
              id: 'subcaste',
              title: 'Subcaste',
              type: 'item',
              url: '/addNewDetails/subcaste',
              breadcrumbs: false
            },
            {
              id: 'occuption',
              title: 'Occuption',
              type: 'item',
              url: '/addNewDetails/occuption',
              breadcrumbs: false
            },
            {
              id: 'education',
              title: 'Education',
              type: 'item',
              url: '/addNewDetails/education',
              breadcrumbs: false
            },
            {
              id: 'languages',
              title: 'Languages',
              type: 'item',
              url: '/addNewDetails/languages',
              breadcrumbs: false
            },
            {
              id: 'source',
              title: 'Source',
              type: 'item',
              url: '/addNewDetails/source',
              breadcrumbs: false
            },
            {
              id: 'university',
              title: 'University',
              type: 'item',
              url: '/addNewDetails/university',
              breadcrumbs: false
            },
            
          ]
        },
        {
          id: 'siteSetup',
          title: 'Site Setup',
          type: 'collapse',
          breadcrumbs: false,
          children: [
            {
              id: 'updateBasicSiteSetting',
              title: 'Update basic site setting',
              type: 'item',
              url: '/siteSetup/updateBasicSiteSetting',
              breadcrumbs: false
            },
            {
              id: 'updateLogo',
              title: 'Update logo & favicon',
              type: 'item',
              url: '/siteSetup/updateLogo',
              breadcrumbs: false
            },
            {
              id: 'siteDefaultImage',
              title: 'Site default image',
              type: 'item',
              url: '/siteSetup/siteDefaultImage',
              breadcrumbs: false
            },
            {
              id: 'updateEmailSetting',
              title: 'Update email setting',
              type: 'item',
              url: '/siteSetup/updateEmailSetting',
              breadcrumbs: false
            },
            {
              id: 'updateMatriPrefix',
              title: 'Update Matri prefix',
              type: 'item',
              url: '/siteSetup/updateMatriPrefix',
              breadcrumbs: false
            },
            {
              id: 'socialMediaLink',
              title: 'Social media link',
              type: 'item',
              url: '/siteSetup/socialMediaLink',
              breadcrumbs: false
            },
            {
              id: 'googleAnalyticsCode',
              title: 'Google analytics code',
              type: 'item',
              url: '/siteSetup/googleAnalyticsCode',
              breadcrumbs: false
            },
            {
              id: 'appLink',
              title: 'App link (Android & iOS App)',
              type: 'item',
              url: '/siteSetup/appLink',
              breadcrumbs: false
            }
          ]
        },
        {
          id: 'careers',
          title: 'Careers',
          type: 'item',
          url: '/careers',
          breadcrumbs: false
        },
        {
          id: 'reports',
          title: 'Reports',
          type: 'item',
          url: '/reports',
          breadcrumbs: false
        },
        {
          id: 'others',
          title: 'Others',
          type: 'item',
          url: '/others',
          breadcrumbs: false
        },
        
      ]
      }
  ];