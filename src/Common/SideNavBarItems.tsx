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
          url: '/others',
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
          id: 'customerManagemetn',
          title: 'Customer Management',
          type: 'item',
          url: '/customerManagemetn',
          breadcrumbs: false
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
          type: 'item',
          url: '/addNewDetails',
          breadcrumbs: false
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
      },
    {
    id: 'group-dashboard-loading',
    title: <FormattedMessage id="dashboard" />,
    type: 'group',
    icon: null,
    children: [
      {
        id: 'dashboard1',
        title: <FormattedMessage id="dashboard" />,
        type: 'collapse',
        icon: null,
        children: [
          {
            id: 'listUsers',
            title: 'loading',
            type: 'item',
            url: '/dashboard/listUsers',
            breadcrumbs: false
          },
          {
            id: 'blockedStaff',
            title: 'loading',
            type: 'item',
            url: '/dashboard/blockedStaff',
            breadcrumbs: false
          },
          {
            id: 'listUsers',
            title: 'loading',
            type: 'item',
            url: '/dashboard/suspendedStaff',
            breadcrumbs: false
          },
          {
            id: 'blockedStaff',
            title: 'loading',
            type: 'item',
            url: '/dashboard/createUser',
            breadcrumbs: false
          }
        ]
      }
    ]
    }
  ];