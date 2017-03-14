import React from 'react'
import classNames from 'classnames'

import { Link } from 'react-router-dom'

const Button = ({ href, type, children, onClick, className, disabled }) => {
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
  children: React.PropTypes.any.isRequired,
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  href: React.PropTypes.string,
  onClick: React.PropTypes.func,
  type: React.PropTypes.string
}

export default Button
