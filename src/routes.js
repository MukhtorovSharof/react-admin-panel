import React from 'react'

// Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Pages
const Users = React.lazy(() => import('./views/pages/users/Users'))
const Profile = React.lazy(() => import('./views/pages/profile/Profile'))
const Settings = React.lazy(() => import('./views/pages/settings/Settings'))
const Pricing = React.lazy(() => import('./views/pages/pricing/Pricing'))
const Calendar = React.lazy(() => import('./views/pages/calendar/Calendar'))
const Kanban = React.lazy(() => import('./views/pages/kanban/Kanban'))

// Sales
const ProductList = React.lazy(() => import('./views/sales/productList/ProductList'))
const Billing = React.lazy(() => import('./views/sales/billing/Billing'))
const Invoice = React.lazy(() => import('./views/sales/invoice/Invoice'))

// Messages
const Messages = React.lazy(() => import('./views/messages/Messages'))

// Auth pages
const LogIn = React.lazy(() => import('./views/auth/login/Login'))
const Register = React.lazy(() => import('./views/auth/register/Register'))
const Page404 = React.lazy(() => import('./views/auth/page404/Page404'))
const Page500 = React.lazy(() => import('./views/auth/page500/Page500'))

// Docs
const Docs = React.lazy(() => import('./views/docs/Docs'))

// Components
const Components = React.lazy(() => import('./views/components/Components'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/pages', name: 'Pages', element: Users, exact: true },
  { path: '/pages/users', name: 'Users', element: Users },
  { path: '/pages/profile', name: 'Profile', element: Profile },
  { path: '/pages/settings', name: 'Settings', element: Settings },
  { path: '/pages/pricing', name: 'Pricing', element: Pricing },
  { path: '/pages/calendar', name: 'Calendar', element: Calendar },
  { path: '/pages/kanban', name: 'Kanban', element: Kanban },
  { path: '/sales', name: 'Sales', element: ProductList, exact: true },
  { path: '/sales/product-list', name: 'Product List', element: ProductList },
  { path: '/sales/billing', name: 'Billing', element: Billing },
  { path: '/sales/invoice', name: 'Invoice', element: Invoice },
  { path: '/messages', name: 'Messages', element: Messages },
  { path: '/auth', name: 'Auth', element: LogIn, exact: true },
  { path: '/login', name: 'Login', element: LogIn },
  { path: '/register', name: 'Register', element: Register },
  { path: '/404', name: 'Error 404', element: Page404 },
  { path: '/500', name: 'Error 500', element: Page500 },
  { path: '/docs', name: 'Docs', element: Docs },
  { path: '/components', name: 'Components', element: Components },
]

export default routes
