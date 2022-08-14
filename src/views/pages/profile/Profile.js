import React from 'react'
import { CCard, CCardHeader, CCol, CRow } from '@coreui/react'

const Profile = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Pages/Profile</strong>
          </CCardHeader>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Profile
