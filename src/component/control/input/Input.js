import React, { PropTypes } from 'react'
import classnames from 'classnames'

const InputControl = (props) => {
  const { additional, className, disabled, error, name, onBlur, onChange, placeholder, required, type, value } = props

  const controlClasses = classnames('control', 'control--text', className, { 'control--error': error })

  return (
    <input
      className={controlClasses}
      disabled={disabled}
      id={`control--${name}`}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      {...additional}
    />
  )
}

InputControl.defaultProps = {
  disabled: false,
  required: false,
  type: 'text',
  value: ''
}

InputControl.propTypes = {
  additional: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default InputControl
