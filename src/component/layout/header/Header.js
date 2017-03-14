import React from 'react'
import { Link } from 'react-router-dom'

import SiteTitle from '../site-title/SiteTitle'
import PickSvg from '../../svg/Pick'

const Header = () => (
  <header className="header" role="banner">
    <div className="content-center content-gutter">
      <div className="header__inner">
        <SiteTitle href="/" />
        <Link className="site-switch" to="/">
          <span className="site-switch__label">More</span>
          <span className="site-switch__icon">
            <i className="icon icon--pick-group">
              <PickSvg />
              <PickSvg />
              <PickSvg />
              <PickSvg />
            </i>
          </span>
        </Link>
      </div>
    </div>
  </header>
)

React.propTypes = {}

export default Header
