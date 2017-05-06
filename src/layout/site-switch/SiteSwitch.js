import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../component/svg/Svg'

const SiteSwitch = ({ href, label }) => {
  return (
    <a
      className="site-switch"
      href={href}
      >
      {label && <span className="site-switch__label">{label}</span>}
      <span className="site-switch__icon">
        <i className="icon icon--pick-group">
          <Svg type="pick" />
          <Svg type="pick" />
          <Svg type="pick" />
          <Svg type="pick" />
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
