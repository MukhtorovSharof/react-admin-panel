import React from 'react'
import { CCard, CCardHeader, CCol, CRow } from '@coreui/react'

const Accordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Pages/Users</strong>
          </CCardHeader>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion
