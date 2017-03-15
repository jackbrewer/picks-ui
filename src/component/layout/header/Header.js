import React from 'react'

import SiteTitle from '../site-title/SiteTitle'
import SiteSwitch from '../site-switch/SiteSwitch'

const Header = () => (
  <header
    className="header"
    role="banner"
    >
    <div className="content-center content-gutter">
      <div className="header__inner">
        <SiteTitle href="/" />
        <SiteSwitch href="/" />
      </div>
    </div>
  </header>
)

export default Header
