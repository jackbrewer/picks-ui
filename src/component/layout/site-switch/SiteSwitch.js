import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

import PickSvg from '../../svg/Pick'

const SiteSwitch = ({ href }) => {
  return (
    <Link
      className="site-switch"
      {...href && { to: href }}
      >
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
  )
}

SiteSwitch.propTypes = {
  href: PropTypes.string
}

export default SiteSwitch
