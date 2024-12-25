import { FormattedMessage } from 'react-intl';
import {
  HomeTrendUp, User,Card,ReceiptDisscount,Archive, Personalcard, CallCalling, SearchStatus, Solana, People, PenAdd, Setting, Shield,
} from 'iconsax-react';
import { i } from 'vite/dist/node/types.d-aGj9QkWt';

const icons = {
  dashboard: HomeTrendUp,
  userManagement: User,
  customerManagement: People,
  staffCalling: CallCalling,
  search: SearchStatus,
  sales: Solana,
  plans: PenAdd,
  addNewDetails: Setting,
  siteSetup: Shield,
  careers:Card,
  reports:ReceiptDisscount,
  others:Personalcard,
  approvals:Archive
}

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
        icon: icons.dashboard,
        url: '/dashboard/default',
        breadcrumbs: false
      },
      {
        id: 'userManagement',
        title: 'User Management',
        type: 'collapse',
        icon: icons.userManagement,
        children: [
          {
            id: 'branches',
            title: 'Branches',
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
                type: 'collapse',
                breadcrumbs: false,
                children: [
                  {
                    id: 'listStaff',
                    title: 'List Staff',
                    type: 'item',
                    url: '/branches/listStaff',
                    breadcrumbs: false
                  },
                  {
                    id: 'blockedStaff',
                    title: 'Blocked Staff',
                    type: 'item',
                    url: '/branches/blockedStaff',
                    breadcrumbs: false
                  },
                  {
                    id: 'suspendedStaff',
                    title: 'Suspended Staff',
                    type: 'item',
                    url: '/branches/suspendedStaff',
                    breadcrumbs: false
                  },
                  {
                    id: 'createStaff',
                    title: 'Create Staff',
                    type: 'item',
                    url: '/branches/createStaff',
                    breadcrumbs: false
                  }
                ]
              }
            ]
          },
          {
            id: 'franchise',
            title: 'Franchise',
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
                type: 'collapse',
                breadcrumbs: false,
                children: [
                  {
                    id: 'listStaff',
                    title: 'List Staff',
                    type: 'item',
                    url: '/franchise/listStaff',
                    breadcrumbs: false
                  },
                  {
                    id: 'blockedStaff',
                    title: 'Blocked Staff',
                    type: 'item',
                    url: '/franchise/blockedStaff',
                    breadcrumbs: false
                  },
                  {
                    id: 'suspendedStaff',
                    title: 'Suspended Staff',
                    type: 'item',
                    url: '/franchise/suspendedStaff',
                    breadcrumbs: false
                  },
                  {
                    id: 'createStaff',
                    title: 'Create Staff',
                    type: 'item',
                    url: '/franchise/createStaff',
                    breadcrumbs: false
                  }
                ]
              }
            ]
          },
          {
            id: 'agents',
            title: 'Agents',
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
          }
        ]
      },
      {
        id: 'customerManagement',
        title: 'Customer Management',
        type: 'collapse',
        icon: icons.customerManagement,
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
            id: 'planExpiredCustomers',
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
        type: 'collapse',
        icon: icons.staffCalling,
        breadcrumbs: false,
        children: [
          {
            id: 'inbound',
            title: 'Inbound',
            type: 'collapse',
            breadcrumbs: false,
            children: [

              {
                id: 'createinbound',
                title: 'Create Inbound',
                type: 'item',
                url: '/staffCalling/inbound/createinbound',
                breadcrumbs: false,
              },
              {
                id: 'listinbound',
                title: 'List Inbound',
                type: 'item',
                url: '/staffCalling/inbound/listinbound',
                breadcrumbs: false,
              },
              {
                id: 'freeinbound',
                title: 'Free InBound',
                type: 'item',
                url: '/staffCalling/inbound/freeinbound',
                breadcrumbs: false,
              },
              {
                id: 'paidinbound',
                title: 'Paid InBound',
                type: 'item',
                url: '/staffCalling/inbound/paidinbound',
                breadcrumbs: false,
              },
              {
                id: 'blockedinbound',
                title: 'Blocked InBound',
                type: 'item',
                url: '/staffCalling/inbound/blockedinbound',
                breadcrumbs: false,
              },
            ]
          }
        ]
      },
      {
        id: 'search',
        title: 'Search',
        type: 'collapse',
        icon: icons.search,
        breadcrumbs: false,
        children: [
          
          {
            id: 'advancesearch',
            title: 'Advance Search',
            type: 'item',
            url: '/search/advancesearch',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'sales',
        title: 'Sales',
        type: 'collapse',
        icon: icons.sales,
        breadcrumbs: false,
        children: [
          {
          id: 'viewsales',
          title: 'View Sales',
          type: 'collapse',
          breadcrumbs: false,
          children: [
          {
            id: 'allsales',
            title: 'All Sales',
            type: 'item',
            url: '/sales/viewsales/allsales',
            breadcrumbs: false
          },
          {
            id: 'customersales',
            title: 'Customer Sales',
            type: 'item',
            url: '/sales/viewsales/customersales',
            breadcrumbs: false
          },
          {
            id: 'branchsales',
            title: 'Branch Sales',
            type: 'item',
            url: '/sales/viewsales/branchsales',
            breadcrumbs: false
          },
          {
            id: 'franchisesales',
            title: 'Franchise Sales',
            type: 'item',
            url: '/sales/viewsales/franchisesales',
            breadcrumbs: false
          },
          {
            id: 'agentales',
            title: 'Agent Sales',
            type: 'item',
            url: '/sales/viewsales/agentales',
            breadcrumbs: false
          },
        ]
        
        },
        {
          id: 'invoicegenerate',
          title: 'Invoice Generate',
          type: 'item',
          url: '/sales/invoicegenerate',
          breadcrumbs: false
        },
        ]
      },
      {
        id: 'plans',
        title: 'Plans',
        type: 'collapse',
        icon: icons.plans,
        breadcrumbs: false,
        children: [
          {
            id: 'listplans',
            title: 'List Plans',
            type: 'item',
            url: '/plans/listplans',
            breadcrumbs: false
          },
          {
            id: 'createplans',
            title: 'Create Plans',
            type: 'item',
            url: '/plans/createplans',
            breadcrumbs: false
          },
          {
            id: 'plancategory',
            title: 'Plan Category',
            type: 'item',
            url: '/plans/plancategory',
            breadcrumbs: false
          },
          {
            id: 'addcontacts',
            title: 'Add Contacts',
            type: 'item',
            url: '/plans/addcontacts',
            breadcrumbs: false
          }
          ,
          {
            id: 'listcontacts',
            title: 'List Contacts',
            type: 'item',
            url: '/plans/listcontacts',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'addNewDetails',
        title: 'Add New Details',
        type: 'collapse',
        icon: icons.addNewDetails,
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
          {
            id: 'designations',
            title: 'Designations',
            type: 'item',
            url: '/addNewDetails/designations',
            breadcrumbs: false
          },
          {
            id: 'professions',
            title: 'Professions',
            type: 'item',
            url: '/addNewDetails/professions',
            breadcrumbs: false
          },
          {
            id: 'propertydetails',
            title: 'Propertry Details',
            type: 'item',
            url: '/addNewDetails/propertydetails',
            breadcrumbs: false
          },
          {
            id: 'hobbies',
            title: 'Hobbies',
            type: 'item',
            url: '/addNewDetails/hobbies',
            breadcrumbs: false
          },
          {
            id: 'interests',
            title: 'Interests',
            type: 'item',
            url: '/addNewDetails/interests',
            breadcrumbs: false
          },
          {
            id: 'blockedreason',
            title: 'Blocked Reason',
            type: 'item',
            url: '/addNewDetails/blockedreason',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'siteSetup',
        title: 'Site Setup',
        type: 'collapse',
        icon: icons.siteSetup,
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
        id: 'approvals',
        title: 'Approvals',
        type: 'collapse',
        icon: icons.approvals,
        breadcrumbs: false,
        children: [
          {
            id: 'allApprovals',
            title: 'All Approvials',
            type: 'item',
            url: '/approvals/all',
            breadcrumbs: false
          },
          {
            id: 'pendingApprovals',
            title: 'Pending Approvals',
            type: 'item',
            url: '/approvals/pending',
            breadcrumbs: false
          },
          {
            id: 'Reject Approvals',
            title: 'Reject Approvals',
            type: 'item',
            url: '/approvals/reject',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'reports',
        title: 'Reports',
        type: 'collapse',
        icon: icons.reports,
        breadcrumbs: false,
        children: [
          {
            id: 'userrepots',
            title: 'User Reports',
            type: 'collapse',
            // url: '/reports/userrepots',
            breadcrumbs: false,
            children: [
              {
                id: 'BranchUserReports',
                title: 'Branch User Reports',
                type: 'item',
                url: '/reports/userrepots/BranchUserReports',
                breadcrumbs: false
              },
              {
                id: 'franchiseuserrepots',
                title: 'Franchise User Reports',
                type: 'item',
                url: '/reports/userrepots/franchiseuserrepots',
                breadcrumbs: false
              },
              {
                id: 'agentuserrepots',
                title: 'Agent User Reports',
                type: 'item',
                url: '/reports/userrepots/agentuserrepots',
                breadcrumbs: false
              }

            ]
          },
          {
            id: 'customerreports',
            title: 'Customer Reports',
            type: 'item',
            url: '/reports/customerreports',
            breadcrumbs: false
          },
          {
            id: 'salesreports',
            title: 'Sales Reports',
            type: 'item',
            url: '/reports/salesreports',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'careers',
        title: 'Careers',
        type: 'collapse',
        icon: icons.careers,
        // url: '/careers',
        breadcrumbs: false,
        children: [
          {
            id: 'careerslist',
            title: 'Careers List',
            type: 'item',
            url: '/careers/careerslist',
            breadcrumbs: false
          },
          {
            id: 'blockedlist',
            title: 'Blocked List',
            type: 'item',
            url: '/careers/blockedlist',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'others',
        title: 'Others',
        type: 'item',
        icon: icons.others,
        url: '/others',
        breadcrumbs: false
      }
    ]
  }
];
