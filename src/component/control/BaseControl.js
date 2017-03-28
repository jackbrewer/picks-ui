import React, { PropTypes } from 'react'
import classNames from 'classnames'

const BaseControl = (props) => {
  const {
    children, className, disabled, element: Element, error, id, name, onBlur, onChange, onFocus, required, type, value,
    // Attributes added
    ...other
  } = props

  const controlClassNames = classNames(
    'control',
    className,
    { 'control--error': error }
  )

  return (
    <Element
      className={controlClassNames}
      disabled={disabled}
      id={id}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      required={required}
      type={type}
      value={value}
      {...other}
      >
      {children}
    </Element>
  )
}

BaseControl.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  element: PropTypes.string.isRequired,
  error: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default BaseControl
