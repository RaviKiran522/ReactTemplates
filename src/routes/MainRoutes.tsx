import { lazy } from 'react';

// project-imports
import ErrorBoundary from './ErrorBoundary';
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import PagesLayout from 'layout/Pages';
import SimpleLayout from 'layout/Simple';

import { SimpleLayoutType } from 'config';
import { loader as productsLoader, productLoader } from 'api/products';
import County from 'pages/Addnewdetails/Country';
import State from 'pages/Addnewdetails/State';
import City from 'pages/Addnewdetails/City';
import District from 'pages/Addnewdetails/District';
import Religion from 'pages/Addnewdetails/Religion';
import Caste from 'pages/Addnewdetails/Caste';
import Subcaste from 'pages/Addnewdetails/Subcaste';
import Occuption from 'pages/Addnewdetails/Occuption';
import Education from 'pages/Addnewdetails/Education';
import Languages from 'pages/Addnewdetails/Languages';
// import ViewUser from 'pages/user-management/branches/ViewUser';
import BranchProfile from 'pages/user-management/branches/BranchStaffProfile'
import EditUser from 'pages/user-management/branches/EditUser';
import CreateStaff from 'pages/user-management/agents/CreateAgent';
import CreateBranch from 'pages/user-management/branches/CreateBranch';
import CreateFranchise from 'pages/user-management/franchise/CreateFranchise';
import EditProfile from 'pages/user-management/EditProfile';
import FranchiseStaffProfile from 'pages/user-management/franchise/FranchiseStaffProfile';
import AgentProfile from 'pages/user-management/agents/AgentsProfile';
import BranchesList from 'pages/user-management/branches/BranchesList';
import FranchiseList from 'pages/user-management/franchise/FranchiseList';
import AgentsList from 'pages/user-management/agents/AgentsList';
import ProductDetails from 'pages/apps/e-commerce/product-details';
import Professions from 'pages/Addnewdetails/Professions';
import Designations from 'pages/Addnewdetails/Designations';
import University from 'pages/Addnewdetails/University';
import Source from 'pages/Addnewdetails/Source';
import Hobbies from 'pages/Addnewdetails/Hobbies';
import Interests from 'pages/Addnewdetails/Interests';
import Blockedreasons from 'pages/Addnewdetails/Blockedreasons';
import Propertydetails from 'pages/Addnewdetails/Propertydetails';
import ListPlans from 'pages/Plans/Listplans';
import PlanCategory from 'pages/Plans/PlanCategory';
import Create from 'pages/apps/invoice/create';
import CreatePlans from 'pages/Plans/Createplans';
import AdvanceSearch from 'pages/Search/AdvanceSearch';
import AddInbound from 'pages/Staffcalling/CreateInbound/CreateInbound';
import CreateCustomer from 'pages/customer-management/CreateCustomer';
// import ViewINBound from 'pages/Staffcalling/CreateInbound/Viewbound';
// import BlockedInBound from 'pages/Staffcalling/CreateInbound/BlockedInBound';
import AddSales from 'pages/Sales/Addsales';
import InvoicePrint from 'pages/Sales/Invoiceprint';
import InVoicePrint from 'pages/Sales/Invoiceprint';
import ViewOnlinePayment from 'pages/Sales/Viewonlinepayment';
import ViewSlaes from 'pages/Sales/Viewsales';
import CreateInbound from 'pages/Staffcalling/CreateInbound/CreateInbound';
import ListInBound from 'pages/Staffcalling/ListInbound/ListInBound';
import FreeInBound from 'pages/Staffcalling/FreeInbound/FreeInBound';
import PaidInBound from 'pages/Staffcalling/PaidInbound/PaidInBound';
import BlockedInBound from 'pages/Staffcalling/BlockedInbound/BlockedInBound';
import FreeCustomers from 'pages/CustomersFolder/Freecustomer/FreeCustomers';
import PaidCustomers from 'pages/CustomersFolder/Paidcustomer/PaidCustomers';
import BlockedCustomers from 'pages/CustomersFolder/Blockedcustomers/BlockedCustomers';
import ConvertedCustomers from 'pages/CustomersFolder/Convertedcustomers/ConvertedeCustomers';
import PlanExpiredCustomers from 'pages/CustomersFolder/Planexpiredcustomers/PlanExpiredCustomers';
import PlanExpiredCustomer from 'pages/CustomersFolder/Planexpiredcustomers/PlanExpiredCustomers';
import BlockedRequests from 'pages/CustomersFolder/Blockedrequests/BlockedRequests';
import AddContacts from 'pages/Plans/Addcontacts';
import ListContacts from 'pages/Plans/Listcontacts';
import InBoundViewProfile from 'pages/Staffcalling/CommonListInbound/Inboundview-profile';
import CustomerInBoundViewProfile from 'pages/Staffcalling/CommonListInbound/view-InBoundcustomer-profile';

import CreateBranchStaff from 'pages/user-management/branches/CreateBranchStaff';
import BranchStaffList from 'pages/user-management/branches/BranchStaffList';
import FranchiseStaffList from 'pages/user-management/franchise/FranchiseStaffList';
import SuspendedFranchiseStaff from 'pages/user-management/franchise/Suspendedfranchisestaff';
import BlockedFranchiseStaff from 'pages/user-management/franchise/Blockedfranchisestaff';
import BlockedBranchStaff from 'pages/user-management/branches/Blockedbranchstaff';
import SuspendedBranchStaff from 'pages/user-management/branches/Suspendedbranchstaff';
;

import UpdateBasicSitesetting from 'pages/siteSetup/UpdateBasicSitesetting';
import UpdateLogoFevicon from 'pages/siteSetup/UpdateLogoFevicon';
import SiteDefaultImage from 'pages/siteSetup/SiteDefaultImage';
import UpdateEmailSetting from 'pages/siteSetup/UpdateEmailSetting';
import UpdateMetricPrefix from 'pages/siteSetup/UpdateMetriPrefix';
import SocialMediaLink from 'pages/siteSetup/SocialMediaLink';
import GoogleAnalyticsCode from 'pages/siteSetup/GoogleAnalyticsCode';
import AppLink from 'pages/siteSetup/AppLink';
// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));
const DashboardAnalytics = Loadable(lazy(() => import('pages/dashboard/analytics')));
const SampleForm = Loadable(lazy(() => import('pages/dashboard/sampleForm')));

// render - widget
const WidgetStatistics = Loadable(lazy(() => import('pages/widget/statistics')));
const WidgetData = Loadable(lazy(() => import('pages/widget/data')));
const WidgetChart = Loadable(lazy(() => import('pages/widget/chart')));

// render - applications
const AppChat = Loadable(lazy(() => import('pages/apps/chat')));
const AppCalendar = Loadable(lazy(() => import('pages/apps/calendar')));

const AppKanban = Loadable(lazy(() => import('pages/apps/kanban')));
const AppKanbanBacklogs = Loadable(lazy(() => import('sections/apps/kanban/Backlogs')));
const AppKanbanBoard = Loadable(lazy(() => import('sections/apps/kanban/Board')));

const AppCustomerList = Loadable(lazy(() => import('pages/apps/customer/list')));
const AppCustomerCard = Loadable(lazy(() => import('pages/apps/customer/card')));

const AppInvoiceCreate = Loadable(lazy(() => import('pages/apps/invoice/create')));
const AppInvoiceDashboard = Loadable(lazy(() => import('pages/apps/invoice/dashboard')));
const AppInvoiceList = Loadable(lazy(() => import('pages/apps/invoice/list')));
const AppInvoiceDetails = Loadable(lazy(() => import('pages/apps/invoice/details')));
const AppInvoiceEdit = Loadable(lazy(() => import('pages/apps/invoice/edit')));

const UserProfile = Loadable(lazy(() => import('pages/apps/profiles/user')));
const UserTabPersonal = Loadable(lazy(() => import('sections/apps/profiles/user/TabPersonal')));
const UserTabPayment = Loadable(lazy(() => import('sections/apps/profiles/user/TabPayment')));
const UserTabPassword = Loadable(lazy(() => import('sections/apps/profiles/user/TabPassword')));
const UserTabSettings = Loadable(lazy(() => import('sections/apps/profiles/user/TabSettings')));

const AccountProfile = Loadable(lazy(() => import('pages/apps/profiles/account')));
const AccountTabProfile = Loadable(lazy(() => import('sections/apps/profiles/account/TabProfile')));
const AccountTabPersonal = Loadable(lazy(() => import('sections/apps/profiles/account/TabPersonal')));
const AccountTabAccount = Loadable(lazy(() => import('sections/apps/profiles/account/TabAccount')));
const AccountTabPassword = Loadable(lazy(() => import('sections/apps/profiles/account/TabPassword')));
const AccountTabRole = Loadable(lazy(() => import('sections/apps/profiles/account/TabRole')));
const AccountTabSettings = Loadable(lazy(() => import('sections/apps/profiles/account/TabSettings')));

const AppECommProducts = Loadable(lazy(() => import('pages/apps/e-commerce/product')));
const AppECommProductDetails = Loadable(lazy(() => import('pages/apps/e-commerce/product-details')));
const AppECommProductList = Loadable(lazy(() => import('pages/apps/e-commerce/products-list')));
const AppECommCheckout = Loadable(lazy(() => import('pages/apps/e-commerce/checkout')));
const AppECommAddProduct = Loadable(lazy(() => import('pages/apps/e-commerce/add-product')));

// render - forms & tables
const FormsValidation = Loadable(lazy(() => import('pages/forms/validation')));
const FormsWizard = Loadable(lazy(() => import('pages/forms/wizard')));

const FormsLayoutBasic = Loadable(lazy(() => import('pages/forms/layouts/basic')));
const FormsLayoutMultiColumn = Loadable(lazy(() => import('pages/forms/layouts/multi-column')));
const FormsLayoutActionBar = Loadable(lazy(() => import('pages/forms/layouts/action-bar')));
const FormsLayoutStickyBar = Loadable(lazy(() => import('pages/forms/layouts/sticky-bar')));

const FormsPluginsMask = Loadable(lazy(() => import('pages/forms/plugins/mask')));
const FormsPluginsClipboard = Loadable(lazy(() => import('pages/forms/plugins/clipboard')));
const FormsPluginsRecaptcha = Loadable(lazy(() => import('pages/forms/plugins/re-captcha')));
const FormsPluginsEditor = Loadable(lazy(() => import('pages/forms/plugins/editor')));
const FormsPluginsDropzone = Loadable(lazy(() => import('pages/forms/plugins/dropzone')));

const ReactTableBasic = Loadable(lazy(() => import('pages/tables/react-table/basic')));
const ReactDenseTable = Loadable(lazy(() => import('pages/tables/react-table/dense')));
const UsersList = Loadable(lazy(() => import('pages/tables/react-table/UsersList')));
const ReactTableSorting = Loadable(lazy(() => import('pages/tables/react-table/sorting')));
const ReactTableFiltering = Loadable(lazy(() => import('pages/tables/react-table/filtering')));
const ReactTableGrouping = Loadable(lazy(() => import('pages/tables/react-table/grouping')));
const ReactTablePagination = Loadable(lazy(() => import('pages/tables/react-table/pagination')));
const ReactTableRowSelection = Loadable(lazy(() => import('pages/tables/react-table/row-selection')));
const ReactTableExpanding = Loadable(lazy(() => import('pages/tables/react-table/expanding')));
const ReactTableEditable = Loadable(lazy(() => import('pages/tables/react-table/editable')));
const ReactTableDragDrop = Loadable(lazy(() => import('pages/tables/react-table/drag-drop')));
const ReactTableColumnVisibility = Loadable(lazy(() => import('pages/tables/react-table/column-visibility')));
const ReactTableColumnResizing = Loadable(lazy(() => import('pages/tables/react-table/column-resizing')));
const ReactTableStickyTable = Loadable(lazy(() => import('pages/tables/react-table/sticky')));
const ReactTableUmbrella = Loadable(lazy(() => import('pages/tables/react-table/umbrella')));
const ReactTableEmpty = Loadable(lazy(() => import('pages/tables/react-table/empty')));
const ReactTableVirtualized = Loadable(lazy(() => import('pages/tables/react-table/virtualized')));

// render - charts & map
const ChartApexchart = Loadable(lazy(() => import('pages/charts/apexchart')));
const ChartOrganization = Loadable(lazy(() => import('pages/charts/org-chart')));
const Map = Loadable(lazy(() => import('pages/map')));

// table routing
const MuiTableBasic = Loadable(lazy(() => import('pages/tables/mui-table/basic')));
const MuiTableDense = Loadable(lazy(() => import('pages/tables/mui-table/dense')));
const MuiTableEnhanced = Loadable(lazy(() => import('pages/tables/mui-table/enhanced')));
const MuiTableDatatable = Loadable(lazy(() => import('pages/tables/mui-table/datatable')));
const MuiTableCustom = Loadable(lazy(() => import('pages/tables/mui-table/custom')));
const MuiTableFixedHeader = Loadable(lazy(() => import('pages/tables/mui-table/fixed-header')));
const MuiTableCollapse = Loadable(lazy(() => import('pages/tables/mui-table/collapse')));

// pages routing
const AuthLogin = Loadable(lazy(() => import('pages/auth/auth1/login')));
const AuthRegister = Loadable(lazy(() => import('pages/auth/auth1/register')));
const AuthForgotPassword = Loadable(lazy(() => import('pages/auth/auth1/forgot-password')));
const AuthResetPassword = Loadable(lazy(() => import('pages/auth/auth1/reset-password')));
const AuthCheckMail = Loadable(lazy(() => import('pages/auth/auth1/check-mail')));
const AuthCodeVerification = Loadable(lazy(() => import('pages/auth/auth1/code-verification')));

const AuthLogin2 = Loadable(lazy(() => import('pages/auth/auth2/login2')));
const AuthRegister2 = Loadable(lazy(() => import('pages/auth/auth2/register2')));
const AuthForgotPassword2 = Loadable(lazy(() => import('pages/auth/auth2/forgot-password2')));
const AuthResetPassword2 = Loadable(lazy(() => import('pages/auth/auth2/reset-password2')));
const AuthCheckMail2 = Loadable(lazy(() => import('pages/auth/auth2/check-mail2')));
const AuthCodeVerification2 = Loadable(lazy(() => import('pages/auth/auth2/code-verification2')));

const AuthLogin3 = Loadable(lazy(() => import('pages/auth/auth3/login3')));

const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/error/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/error/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction/under-construction')));
const MaintenanceUnderConstruction2 = Loadable(lazy(() => import('pages/maintenance/under-construction/under-construction2')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon/coming-soon')));
const MaintenanceComingSoon2 = Loadable(lazy(() => import('pages/maintenance/coming-soon/coming-soon2')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const Landing = Loadable(lazy(() => import('pages/landing')));
const ContactUS = Loadable(lazy(() => import('pages/contact-us')));
const PricingPage = Loadable(lazy(() => import('pages/extra-pages/price/price1')));
const PricingPage2 = Loadable(lazy(() => import('pages/extra-pages/price/price2')));

// ==============================|| MAIN ROUTES ||============================== //

//customer 
const ListCustomer = Loadable(lazy(() => import('pages/Customer/list-customer')));
const ViewCustomerProfile = Loadable(lazy(() => import('pages/Customer/view-customer-profile')));

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'dashboard',
          children: [
            {
              path: 'default',
              element: <DashboardDefault />
            },
            {
              path: 'listUsers',
              element: <UsersList />
            },
            {
              path: 'blockedStaff',
              element: <UsersList />
            },
            {
              path: 'suspendedStaff',
              element: <UsersList />
            },
            // {
            //   path: 'createUser',
            //   element: <UsersList />
            // },
            {
              path: 'createUser',
              element: <SampleForm />
            }
          ]
        },
        {
          path: 'branches',
          children: [
            {
              path: 'listBranch',
              element: <BranchesList />
            },
            {
              path: 'createBranch',
              element: <CreateBranch />
            },
           
              {
                path: 'listStaff',
                element: <BranchStaffList />,
              },
              {
                path: 'blockedStaff',
                element: <BlockedBranchStaff />,
              },
              {
                path: 'suspendedStaff',
                element: <SuspendedBranchStaff />,
              },
              {
                path: 'createStaff',
                element: <CreateBranchStaff />,
              },
          ]
        },
        {
          path: 'franchise',
          children: [
            {
              path: 'listFranchise',
              element: <FranchiseList />
            },
            {
              path: 'createFranchise',
              element: <CreateFranchise />
            },
             {
              path: 'listStaff',
              element: <FranchiseStaffList />
            },
            {
              path: 'suspendedStaff',
              element: <SuspendedFranchiseStaff />
            },
             {
              path: 'blockedStaff',
              element: <BlockedFranchiseStaff/>
            },
            
            {
              path: 'createStaff',
              element: <CreateBranchStaff />
            }
          ]
        },
        {
          path: 'userManagement',
          children: [
            {
              path: 'editUser',
              element: <EditUser />
            },
            {
              path: 'Branch',
              element: <BranchProfile />
            },
            {
              path: 'Franchise',
              element: <FranchiseStaffProfile />
            },
            {
              path: 'Agent',
              element: <AgentProfile />
            },
          ]
        },
        {
          path: 'siteSetup',
          children: [
            {
              path: 'updateBasicSiteSetting',
              element: <UpdateBasicSitesetting />
            },
            {
              path: 'updateLogo',
              element: <UpdateLogoFevicon />
            },
            {
              path: 'siteDefaultImage',
              element: <SiteDefaultImage />
            },
            {
              path: 'updateEmailSetting',
              element: <UpdateEmailSetting />
            },
            {
              path: 'updateMatriPrefix',
              element: <UpdateMetricPrefix />
            },
            {
              path: 'socialMediaLink',
              element: <SocialMediaLink />
            },
            {
              path: 'googleAnalyticsCode',
              element: <GoogleAnalyticsCode />
            },
            {
              path: 'appLink',
              element: <AppLink />
            },
          ]
        },
        {
          path: 'customerManagement',
          children: [
            {
              path: 'listCustomers',
              element: <ListCustomer />
            },
            {
              path: 'freeCustomers',
              element: <FreeCustomers />
            },
            {
              path: 'paidCustomers',
              element: <PaidCustomers />
            },
            {
              path: 'blockedCustomers',
              element: <BlockedCustomers />
            },
            {
              path: 'convertedCustomers',
              element: <ConvertedCustomers />
            },
            {
              path: 'planExpiredCustomers',
              element: <PlanExpiredCustomers />
            },
            {
              path: 'blockedRequests',
              element: <BlockedRequests />
            },
          ]
        },
        {
          path: 'staffCalling',
          children: [
            {
              path: 'inbound',
              children: [
                {
                  path: 'createinbound',
                  element: <CreateInbound />,
                },
                {
                  path: 'listinbound',
                  element: <ListInBound />,
                },
                {
                  path: 'freeinbound',
                  element: <FreeInBound />,
                },
                {
                  path: 'paidinbound',
                  element: <PaidInBound />,
                },
                {
                  path: 'blockedinbound',
                  element: <BlockedInBound />,
                },
                {
                  path: 'viewProfile',
                  element: <CustomerInBoundViewProfile />
                },
              ]
            }
          ],
        },

        {
          path: 'customerManagement',
          children: [
            {
              path: 'createCustomer',
              element: <CreateCustomer />
            },
            {
              path: 'editCustomer',
              element: <CreateCustomer edit={true}/>
            },
            // {
            //   path: 'addcontacts',
            //   element: <AgentProfile />
            // },
            {
              path: 'viewProfile',
              element: <ViewCustomerProfile />
            },
          ]
        },
        {
          path: 'search',
          children: [
            {
              path: 'advancesearch',
              element: <AdvanceSearch />
            },
          ]
        },
        {
          path: 'sales',
          children: [
            {
              path: 'addsales',
              element: <AddSales />
            },
            {
              path: 'viewsales',
              element: <ViewSlaes />
            },
            {
              path: 'invoiceprint',
              element: <InVoicePrint />
            },
            {
              path: 'viewonlinepayment',
              element: <ViewOnlinePayment />
            },


          ]
        },
        {
          path: 'plans',
          children: [
            {
              path: 'listplans',
              element: <ListPlans />
            },
            {
              path: 'createplans',
              element: <CreatePlans />
            },
            {
              path: 'plancategory',
              element: <PlanCategory />
            },
            {
              path: 'addcontacts',
              element: <AddContacts />
            },
            {
              path: 'listcontacts',
              element: <ListContacts />
            },
          ]
        },
        {
          path: 'addNewDetails',
          children: [
            {
              path: 'country',
              element: <County />
            },
            {
              path: 'state',
              element: <State />
            },
            {
              path: 'district',
              element: <District />
            },
            {
              path: 'city',
              element: <City />
            },
            {
              path: 'religion',
              element: <Religion />
            },
            {
              path: 'caste',
              element: <Caste />
            },
            {
              path: 'subcaste',
              element: <Subcaste />
            },
            {
              path: 'occuption',
              element: <Occuption />
            },
            {
              path: 'education',
              element: <Education />
            },
            {
              path: 'languages',
              element: <Languages />
            },
            {
              path: 'source',
              element: <Source />
            },
            {
              path: 'university',
              element: <University />
            },
            {
              path: 'designations',
              element: <Designations />
            },
            {
              path: 'professions',
              element: <Professions />
            },
            {
              path: 'propertydetails',
              element: <Propertydetails />
            },
            {
              path: 'hobbies',
              element: <Hobbies />
            },
            {
              path: 'interests',
              element: <Interests />
            },
            {
              path: 'blockedreason',
              element: <Blockedreasons />
            },
          ]
        },

        {
          path: 'widget',
          children: [
            {
              path: 'statistics',
              element: <WidgetStatistics />
            },
            {
              path: 'data',
              element: <WidgetData />
            },
            {
              path: 'chart',
              element: <WidgetChart />
            }
          ]
        },
        {
          path: 'apps',
          children: [
            {
              path: 'chat',
              element: <AppChat />
            },
            {
              path: 'calendar',
              element: <AppCalendar />
            },
            {
              path: 'kanban',
              element: <AppKanban />,
              children: [
                {
                  path: 'backlogs',
                  element: <AppKanbanBacklogs />
                },
                {
                  path: 'board',
                  element: <AppKanbanBoard />
                }
              ]
            },
            {
              path: 'customer',
              children: [
                {
                  path: 'customer-list',
                  element: <AppCustomerList />
                },
                {
                  path: 'customer-card',
                  element: <AppCustomerCard />
                }
              ]
            },
            {
              path: 'invoice',
              children: [
                {
                  path: 'dashboard',
                  element: <AppInvoiceDashboard />
                },
                {
                  path: 'create',
                  element: <AppInvoiceCreate />
                },
                {
                  path: 'details/:id',
                  element: <AppInvoiceDetails />
                },
                {
                  path: 'edit/:id',
                  element: <AppInvoiceEdit />
                },
                {
                  path: 'list',
                  element: <AppInvoiceList />
                }
              ]
            },
            {
              path: 'profiles',
              children: [
                {
                  path: 'account',
                  element: <AccountProfile />,
                  children: [
                    {
                      path: 'basic',
                      element: <AccountTabProfile />
                    },
                    {
                      path: 'edit',
                      element: <EditProfile />
                    },
                    {
                      path: 'my-account',
                      element: <AccountTabAccount />
                    },
                    {
                      path: 'password',
                      element: <AccountTabPassword />
                    },
                    {
                      path: 'role',
                      element: <AccountTabRole />
                    },
                    {
                      path: 'settings',
                      element: <AccountTabSettings />
                    },
                    {
                      path: 'history',
                      element: <UsersList />
                    }
                  ]
                },
                {
                  path: 'user',
                  element: <UserProfile />,
                  children: [
                    {
                      path: 'personal',
                      element: <UserTabPersonal />
                    },
                    {
                      path: 'payment',
                      element: <UserTabPayment />
                    },
                    {
                      path: 'password',
                      element: <UserTabPassword />
                    },
                    {
                      path: 'settings',
                      element: <UserTabSettings />
                    }
                  ]
                }
              ]
            },
            {
              path: 'e-commerce',
              children: [
                {
                  path: 'products',
                  element: <AppECommProducts />,
                  loader: productsLoader,
                  errorElement: <ErrorBoundary />
                },
                {
                  path: 'product-details/:id',
                  element: <AppECommProductDetails />,
                  loader: productLoader,
                  errorElement: <ErrorBoundary />
                },
                {
                  path: 'product-list',
                  element: <AppECommProductList />,
                  loader: productsLoader,
                  errorElement: <ErrorBoundary />
                },
                {
                  path: 'add-new-product',
                  element: <AppECommAddProduct />
                },
                {
                  path: 'checkout',
                  element: <AppECommCheckout />
                }
              ]
            }
          ]
        },
        {
          path: 'forms',
          children: [
            {
              path: 'validation',
              element: <FormsValidation />
            },
            {
              path: 'wizard',
              element: <FormsWizard />
            },
            {
              path: 'layout',
              children: [
                {
                  path: 'basic',
                  element: <FormsLayoutBasic />
                },
                {
                  path: 'multi-column',
                  element: <FormsLayoutMultiColumn />
                },
                {
                  path: 'action-bar',
                  element: <FormsLayoutActionBar />
                },
                {
                  path: 'sticky-bar',
                  element: <FormsLayoutStickyBar />
                }
              ]
            },
            {
              path: 'plugins',
              children: [
                {
                  path: 'mask',
                  element: <FormsPluginsMask />
                },
                {
                  path: 'clipboard',
                  element: <FormsPluginsClipboard />
                },
                {
                  path: 're-captcha',
                  element: <FormsPluginsRecaptcha />
                },
                {
                  path: 'editor',
                  element: <FormsPluginsEditor />
                },
                {
                  path: 'dropzone',
                  element: <FormsPluginsDropzone />
                }
              ]
            }
          ]
        },
        {
          path: 'tables',
          children: [
            {
              path: 'react-table',
              children: [
                {
                  path: 'basic',
                  element: <ReactTableBasic />
                },
                {
                  path: 'dense',
                  element: <UsersList />
                },
                {
                  path: 'sorting',
                  element: <ReactTableSorting />
                },
                {
                  path: 'filtering',
                  element: <ReactTableFiltering />
                },
                {
                  path: 'grouping',
                  element: <ReactTableGrouping />
                },
                {
                  path: 'pagination',
                  element: <ReactTablePagination />
                },
                {
                  path: 'row-selection',
                  element: <ReactTableRowSelection />
                },
                {
                  path: 'expanding',
                  element: <ReactTableExpanding />
                },
                {
                  path: 'editable',
                  element: <ReactTableEditable />
                },
                {
                  path: 'drag-drop',
                  element: <ReactTableDragDrop />
                },
                {
                  path: 'column-visibility',
                  element: <ReactTableColumnVisibility />
                },
                {
                  path: 'column-resizing',
                  element: <ReactTableColumnResizing />
                },
                {
                  path: 'sticky-table',
                  element: <ReactTableStickyTable />
                },
                {
                  path: 'umbrella',
                  element: <ReactTableUmbrella />
                },
                {
                  path: 'empty',
                  element: <ReactTableEmpty />
                },
                {
                  path: 'virtualized',
                  element: <ReactTableVirtualized />
                }
              ]
            },
            {
              path: 'mui-table',
              children: [
                {
                  path: 'basic',
                  element: <MuiTableBasic />
                },
                {
                  path: 'dense',
                  element: <MuiTableDense />
                },
                {
                  path: 'enhanced',
                  element: <MuiTableEnhanced />
                },
                {
                  path: 'datatable',
                  element: <MuiTableDatatable />
                },
                {
                  path: 'custom',
                  element: <MuiTableCustom />
                },
                {
                  path: 'fixed-header',
                  element: <MuiTableFixedHeader />
                },
                {
                  path: 'collapse',
                  element: <MuiTableCollapse />
                }
              ]
            }
          ]
        },
        {
          path: 'charts',
          children: [
            {
              path: 'apexchart',
              element: <ChartApexchart />
            },
            {
              path: 'org-chart',
              element: <ChartOrganization />
            }
          ]
        },
        {
          path: 'map',
          element: <Map />
        },
        {
          path: 'sample-page',
          element: <SamplePage />
        },
        {
          path: 'price',
          children: [
            {
              path: 'price1',
              element: <PricingPage />
            },
            {
              path: 'price2',
              element: <PricingPage2 />
            }
          ]
        },
        {
          path: 'agents',
          children: [
            {
              path: 'createAgents',
              element: <CreateStaff />
            },
            {
              path: 'listAgents',
              element: <AgentsList />
            }
          ]
        }
      ]
    },
    {
      path: '/',
      element: <SimpleLayout layout={SimpleLayoutType.LANDING} />,
      children: [
        {
          path: 'landing',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: '/',
      element: <SimpleLayout layout={SimpleLayoutType.SIMPLE} />,
      children: [
        {
          path: 'contact-us',
          element: <ContactUS />
        }
      ]
    },
    {
      path: '/maintenance',
      element: <PagesLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'under-construction2',
          element: <MaintenanceUnderConstruction2 />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        },
        {
          path: 'coming-soon2',
          element: <MaintenanceComingSoon2 />
        }
      ]
    },
    {
      path: '/auth',
      element: <PagesLayout />,
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        },
        {
          path: 'register',
          element: <AuthRegister />
        },
        {
          path: 'forgot-password',
          element: <AuthForgotPassword />
        },
        {
          path: 'reset-password',
          element: <AuthResetPassword />
        },
        {
          path: 'check-mail',
          element: <AuthCheckMail />
        },
        {
          path: 'code-verification',
          element: <AuthCodeVerification />
        },
        {
          path: 'login2',
          element: <AuthLogin2 />
        },
        {
          path: 'register2',
          element: <AuthRegister2 />
        },
        {
          path: 'forgot-password2',
          element: <AuthForgotPassword2 />
        },
        {
          path: 'reset-password2',
          element: <AuthResetPassword2 />
        },
        {
          path: 'check-mail2',
          element: <AuthCheckMail2 />
        },
        {
          path: 'code-verification2',
          element: <AuthCodeVerification2 />
        },
        {
          path: 'login3',
          element: <AuthLogin3 />
        }
      ]
    },
    { path: '*', element: <MaintenanceError /> }
  ]
};

export default MainRoutes;
