/* eslint-disable prettier/prettier */
import React from 'react'
import { CCard, CCardHeader, CCol, CRow } from '@coreui/react'

const Components = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Components</strong>
          </CCardHeader>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Components
