import React, { PropTypes } from 'react'

import PickSvg from '../../svg/Pick'

const SiteSwitch = ({ href, label }) => {
  return (
    <a
      className="site-switch"
      href={href}
      >
      {label && <span className="site-switch__label">{label}</span>}
      <span className="site-switch__icon">
        <i className="icon icon--pick-group">
          <PickSvg />
          <PickSvg />
          <PickSvg />
          <PickSvg />
        </i>
      </span>
    </a>
  )
}

SiteSwitch.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default SiteSwitch
