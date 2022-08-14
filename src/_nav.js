import React from 'react'
import { CNavGroup, CNavItem } from '@coreui/react'
import overview from './assets/icons/sidebar/overview.png'
import pages from './assets/icons/sidebar/pages.png'
import sales from './assets/icons/sidebar/sales.png'
import messages from './assets/icons/sidebar/messages.png'
import auth from './assets/icons/sidebar/auth.png'
import docs from './assets/icons/sidebar/docs.png'
import components from './assets/icons/sidebar/components.png'
import help from './assets/icons/sidebar/help.png'

const _nav = [
  {
    component: CNavItem,
    name: 'Overview',
    to: '/dashboard',
    icon: <img src={overview} alt="image_sidebar" customclassname="nav-icon" className="me-2" />,
  },
  {
    component: CNavGroup,
    name: 'Pages',
    to: '/pages',
    icon: <img src={pages} alt="image_sidebar" customclassname="nav-icon" className="me-2" />,
    items: [
      {
        component: CNavItem,
        name: 'Users',
        to: '/pages/users',
      },
      {
        component: CNavItem,
        name: 'Profile',
        to: '/pages/profile',
      },
      {
        component: CNavItem,
        name: 'Settings',
        to: '/pages/settings',
      },
      {
        component: CNavItem,
        name: 'Pricing',
        to: '/pages/pricing',
      },
      {
        component: CNavItem,
        name: 'Calendar',
        to: '/pages/calendar',
      },
      {
        component: CNavItem,
        name: 'Kanban',
        to: '/pages/kanban',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Sales',
    to: '/sales',
    icon: <img src={sales} customclassname="nav-icon" className="me-2 nav-iconName" alt="imna" />,
    items: [
      {
        component: CNavItem,
        name: 'Product List',
        to: '/sales/product-list',
      },
      {
        component: CNavItem,
        name: 'Billing',
        to: '/sales/billing',
      },
      {
        component: CNavItem,
        name: 'Invoice',
        to: '/sales/invoice',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Messages',
    to: '/messages',
    icon: <img src={messages} alt="image_sidebar" customclassname="nav-icon" className="me-2" />,
    badge: {
      color: 'danger',
      text: '1',
    },
  },
  {
    component: CNavGroup,
    name: 'Auth',
    icon: <img src={auth} customclassname="nav-icon" className="me-2" alt="image_sidebar" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    to: '/docs',
    icon: <img src={docs} alt="image_sidebar" customclassname="nav-icon" className="me-2" />,
  },
  {
    component: CNavItem,
    name: 'Components',
    to: '/components',
    icon: <img src={components} alt="image_sidebar" customclassname="nav-icon" className="me-2" />,
  },
  {
    component: CNavItem,
    name: 'Help',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <img src={help} alt="image_sidebar" customclassname="nav-icon" className="me-2" />,
  },
]

export default _nav
