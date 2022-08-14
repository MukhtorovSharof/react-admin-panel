/* eslint-disable prettier/prettier */
import React from 'react'
import { CCard, CCardHeader, CCol, CRow } from '@coreui/react'

const Messages = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Messages</strong>
          </CCardHeader>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Messages
