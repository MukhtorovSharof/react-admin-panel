/* eslint-disable prettier/prettier */
import React from 'react'

import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

import chartIcon from '../../assets/icons/chart-circle.png'

import avatar1 from '../../assets/images/avatars/Avatar1.png'
import avatar2 from '../../assets/images/avatars/Avatar2.png'
import avatar3 from '../../assets/images/avatars/Avatar3.png'
import avatar4 from '../../assets/images/avatars/Avatar4.png'
import avatar5 from '../../assets/images/avatars/Avatar5.png'
import avatar6 from '../../assets/images/avatars/Avatar6.png'

import { CChartLine } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const latest_customer = [
    {
      src: avatar1,
      name: 'Neil Sims',
      money: 367,
    },
    {
      src: avatar2,
      name: 'Bonnie Green',
      money: 67,
    },
    {
      src: avatar3,
      name: 'Michael Gough',
      money: 367,
    },
    {
      src: avatar4,
      name: 'Thomas Lean',
      money: 3467,
    },
    {
      src: avatar5,
      name: 'Lana Byrd',
      money: 2367,
    },
    {
      src: avatar6,
      name: 'Karen Nelson',
      money: 1367,
    },
  ]

  const top_products = [
    {
      money: 70,
      name: 'Restaurant Booking App',
      job: 'React & Bootstrap Framework',
    },
    {
      money: 54,
      name: 'UI Kit',
      job: 'React & Bootstrap Framework',
    },
    {
      money: 47,
      name: 'Design System Pro',
      job: 'Bootstrap Framework',
    },
    {
      money: 43,
      name: 'Dashboard',
      job: 'Tailwind, React',
    },
    {
      money: 38,
      name: 'Glassmorphism UI',
      job: 'Vue Js, Tailwind',
    },
    {
      money: 22,
      name: 'Multipurpose Template',
      job: 'React & Bootstrap Framework',
    },
  ]

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol className="d-flex pt-3 align-items-center">
              <h4 id="traffic" className="card-title mb-0 me-2">
                Sales
              </h4>
              <div className="">
                <img src={chartIcon} alt="chartIcon" />
              </div>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['01 Apr', '02 Apr', '03 Apr', '04 Apr', '05 Apr', '06 Apr', '07 Apr'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
      </CCard>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CRow>
                <CCol xs={12} md={4} xl={4}>
                  <CCard>
                    <CCardHeader>
                      <div className="latestCustomer">Latest Customers</div>
                    </CCardHeader>
                    <CCardBody>
                      <CListGroup>
                        {latest_customer.map((item) => (
                          <CListGroupItem
                            key={item.name}
                            className="d-flex border-0 border-bottom w-100 justify-content-between align-items-center"
                          >
                            <div className="d-flex justify-content-center align-items-center">
                              <div className="listItemImage me-2">
                                <img src={item.src} alt="item_names" />
                              </div>
                              <div className="d-flex flex-column listItemDiv">
                                <div className="listItemTitle">{item.name}</div>
                                <div className="small text-medium-emphasis listItemEmail">
                                  email@example.com
                                </div>
                              </div>
                            </div>
                            <div className="listItemMoney w-10 d-flex float-end">${item.money}</div>
                          </CListGroupItem>
                        ))}
                      </CListGroup>
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol xs={12} md={8} xl={8}>
                  <CCard>
                    <CCardHeader>
                      <div className="latestCustomer">Top Products</div>
                    </CCardHeader>
                    <CCardBody>
                      <CListGroup>
                        {top_products.map((item) => (
                          <CListGroupItem
                            key={item.name}
                            className="d-flex border-0 border-bottom w-100 justify-content-between align-items-center"
                          >
                            <div className="d-flex flex-column listItemDiv">
                              <div className="listItemTitle">{item.name}</div>
                              <div className="small text-medium-emphasis listItemEmail">
                                {item.job}
                              </div>
                            </div>
                            <div className="w-10 d-flex float-end">
                              <span className="listItemMoney">{item.money}</span>
                              sales
                            </div>
                          </CListGroupItem>
                        ))}
                      </CListGroup>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>

              <br />

              <CTable striped align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>Transactions</CTableHeaderCell>
                    <CTableHeaderCell>Date {' & '} Time</CTableHeaderCell>
                    <CTableHeaderCell>Amount</CTableHeaderCell>
                    <CTableHeaderCell>Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      Payment from <span className="fw-bolder">Bonnie Green</span>
                    </CTableDataCell>
                    <CTableDataCell>Apr 23, 2021</CTableDataCell>
                    <CTableDataCell>$2300</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="success">Completed</CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Payment refund to <span className="fw-bolder">#00910</span>
                    </CTableDataCell>
                    <CTableDataCell>Apr 23, 2021</CTableDataCell>
                    <CTableDataCell>-$670</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="success">Completed</CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Payment failed from <span className="fw-bolder">#087651</span>
                    </CTableDataCell>
                    <CTableDataCell>Apr 18, 2021</CTableDataCell>
                    <CTableDataCell>$234</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="danger">Cancelled</CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Payment from <span className="fw-bolder">Bonnie Green</span>
                    </CTableDataCell>
                    <CTableDataCell>Apr 15, 2021</CTableDataCell>
                    <CTableDataCell>$5000</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="primary">In progress</CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Payment from <span className="fw-bolder">Jose Leos</span>
                    </CTableDataCell>
                    <CTableDataCell>Apr 15, 2021</CTableDataCell>
                    <CTableDataCell>$2300</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="primary">In progress</CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Payment from <span className="fw-bolder">THEMESBERG LLC</span>
                    </CTableDataCell>
                    <CTableDataCell>Apr 11, 2021</CTableDataCell>
                    <CTableDataCell>$280</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="success">Completed</CBadge>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
