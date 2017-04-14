import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Link } from 'react-router-dom'

const Button = ({ children, className, disabled, href, onClick, target, type }) => {
  const absoluteUrlRegEx = /^\w[\w-.+]+:/ // http://regexr.com/3fhfg
  const commonAttributes = {
    className: classNames('button', className),
    disabled,
    onClick
  }

  // No href means we need a button element
  if (!href) {
    return (
      <button
        type={type}
        {...commonAttributes}
        >
        {children}
      </button>
    )
  }

  if (absoluteUrlRegEx.exec(href)) {
    return (
      <a
        href={href}
        {...target && { target }}
        {...target === '_blank' && { rel: 'noopener' }}
        {...commonAttributes}
        >
        {children}
      </a>
    )
  }

  // Internal link, use react-router's Link component
  return (
    <Link
      to={href}
      {...commonAttributes}
      >
      {children}
    </Link>
  )
}

Button.defaultProps = {
  disabled: false,
  type: 'button'
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  type: PropTypes.oneOf([ 'button', 'reset', 'submit' ])
}

export default Button
