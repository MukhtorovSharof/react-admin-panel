import React from 'react'
import { CCard, CCardHeader, CCol, CRow } from '@coreui/react'

const Kanban = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Pages/Kanban</strong>
          </CCardHeader>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Kanban
