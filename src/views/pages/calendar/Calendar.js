import React from 'react'
import { CCard, CCardHeader, CCol, CRow } from '@coreui/react'

const Calendar = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Pages/Calendar</strong>
          </CCardHeader>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Calendar
