import React from 'react'
// import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CInputGroup,
  CFormInput,
} from '@coreui/react'

import logo from '../assets/icons/navbar/Logo.png'

import notificationIcon from '../assets/icons/navbar/NotificationIcon.png'
import avatar from '../assets/icons/navbar/Avatar.png'
import burger from '../assets/icons/navbar/burger.png'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <div className="d-flex justify-content-start align-items-center">
          <CHeaderToggler
            className="ps-1"
            onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          >
            <img src={burger} alt="burger_menu" />
          </CHeaderToggler>
          <CHeaderBrand className=" ms-2 me-lg-3 d-none d-md-block" to="/">
            <img src={logo} alt="logo" />
          </CHeaderBrand>
          <CHeaderNav className="d-none d-lg-block">
            <CNavItem>
              <CInputGroup>
                <CFormInput
                  placeholder="Search"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </CInputGroup>
            </CNavItem>
          </CHeaderNav>
        </div>
        {/* <CHeaderNav className="d-none d-md-flex ms-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem>
        </CHeaderNav> */}
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <img src={notificationIcon} alt="notificationIcon" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <img src={avatar} alt="avatar" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
    </CHeader>
  )
}

export default AppHeader
