import React from 'react'
import { CFooter } from '@coreui/react'

import footer1 from '../assets/icons/footer/facebook.png'
import footer2 from '../assets/icons/footer/twitter.png'
import footer3 from '../assets/icons/footer/github.png'
import footer4 from '../assets/icons/footer/dribbble.png'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">&copy; 2021 Themesberg, LLC. All rights reserved.</span>
      </div>
      <div className="ms-auto">
        <span className="me-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={footer1} alt="footer_1" />
            {/* <CIcon icon={cibFacebook} size="lg" className="text-dark" /> */}
          </a>
        </span>
        <span className="me-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={footer2} alt="footer_1" />

            {/* <CIcon icon={cibTwitter} size="lg" className="text-dark" /> */}
          </a>
        </span>
        <span className="me-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={footer3} alt="footer_1" />

            {/* <CIcon icon={cibGithub} size="lg" className="text-dark" /> */}
          </a>
        </span>
        <span className="me-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={footer4} alt="footer_1" />

            {/* <CIcon icon={cibGatsby} size="lg" className="text-dark" /> */}
          </a>
        </span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
