import React, { PropTypes } from 'react'
import classnames from 'classnames'

const NativeCheckControl = (props) => {
  const { additional, checked, className, disabled, error, name, onBlur, onChange, onFocus, required, type, value } = props
  const controlClassNames = classnames(
    'control',
    'control--check',
    className,
    { 'control--error': error }
  )

  return (
    <input
      checked={checked}
      className={controlClassNames}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      required={required}
      type={type}
      value={value}
      {...additional}
    />
  )
}

NativeCheckControl.propTypes = {
  additional: PropTypes.object,
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.oneOf([ 'radio', 'checkbox' ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default NativeCheckControl
