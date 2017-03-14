import React, { PropTypes } from 'react'
import classNames from 'classnames'

import { Link } from 'react-router-dom'

const Button = ({ children, className, disabled, href, onClick, type }) => {
  const ButtonEl = href ? Link : 'button'
  const buttonClasses = classNames('button', className)

  return (
    <ButtonEl
      className={buttonClasses}
      to={href}
      type={href ? undefined : type}
      onClick={onClick}
      disabled={disabled}
      >
      {children}
    </ButtonEl>
  )
}

Button.defaultProps = {
  disabled: false,
  type: 'button'
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Button
