/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarFooter } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import logo from '../assets/icons/navbar/Logo.png'
import sidebarFooter1 from '../assets/icons/sidebarFooter/sidebarFooter1.png'
import sidebarFooter2 from '../assets/icons/sidebarFooter/sidebarFooter2.png'
import sidebarFooter3 from '../assets/icons/sidebarFooter/sidebarFooter3.png'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className="Csidebar"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-flex bg-white" to="/">
        <img src={logo} className="d-md-none" alt="logo" />
      </CSidebarBrand>
      <CSidebarNav className="border bg-light">
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarFooter className="d-flex bg-white">
        <div className="mx-auto">
          <span className="me-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={sidebarFooter1} alt="sidebar_footer_1" />
            </a>
          </span>
          <span className="me-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={sidebarFooter2} alt="sidebar_footer_2" />
            </a>
          </span>
          <span className="me-1">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={sidebarFooter3} alt="sidebar_footer_3" />
            </a>
          </span>
        </div>
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
