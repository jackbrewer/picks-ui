import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import PickSvg from '../../component/svg/Pick'

const SiteTitle = ({ href, isFeature }) => {
  const siteTitleClasses = classNames('site-title', { 'site-title--feature': isFeature })
  const SiteTitleEl = href ? Link : 'div'
  return (
    <SiteTitleEl
      className={siteTitleClasses}
      {...href && { to: href }}
      >
      <i className="icon icon--pick"><PickSvg /></i>
      Picks <span>UI</span>
    </SiteTitleEl>
  )
}

SiteTitle.defaultProps = {
  isFeature: false
}

SiteTitle.propTypes = {
  href: PropTypes.string,
  isFeature: PropTypes.bool
}

export default SiteTitle
