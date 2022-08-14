import React from 'react'
import { CCard, CCardHeader, CCol, CRow } from '@coreui/react'

const Settings = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Pages/Settings</strong>
          </CCardHeader>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Settings
