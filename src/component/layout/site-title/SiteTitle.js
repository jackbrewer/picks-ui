import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import PickSvg from '../../svg/Pick'

const SiteTitle = ({ isFeature, href }) => {
  const siteTitleClasses = classNames('site-title', { 'site-title--feature': isFeature })
  const SiteTitleEl = href ? Link : 'div'
  return (
    <SiteTitleEl
      className={siteTitleClasses}
      to={href || undefined}
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
  isFeature: React.PropTypes.bool,
  href: React.PropTypes.string
}

export default SiteTitle
