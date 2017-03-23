import React, { PropTypes } from 'react'
import classNames from 'classnames'

const InputControl = (props) => {
  const { additional, className, disabled, error, id, name, onBlur, onChange, onFocus, placeholder, required, type, value } = props
  const controlClassNames = classNames(
    'control',
    'control--text',
    className,
    { 'control--error': error }
  )

  return (
    <input
      className={controlClassNames}
      disabled={disabled}
      id={id}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      {...additional}
    />
  )
}

InputControl.propTypes = {
  additional: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default InputControl
