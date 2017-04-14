import React from 'react'
import PropTypes from 'prop-types'

import PickSvg from '../../component/svg/Pick'

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
