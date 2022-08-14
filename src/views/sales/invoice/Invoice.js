/* eslint-disable prettier/prettier */
import React from 'react'
import { CCard, CCardHeader, CCol, CRow } from '@coreui/react'

const Invoice = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Sales/Invoice</strong>
          </CCardHeader>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Invoice
