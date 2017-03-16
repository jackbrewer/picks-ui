import React, { PropTypes } from 'react'
import classnames from 'classnames'

const CheckControl = ({ additional, checked, className, disabled, error, name, onBlur, onChange, required, type, value }) => {
  return (
    <input
      checked={checked}
      className={classnames('control', 'control--check', className, { 'control--error': error })}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      required={required}
      type={type}
      value={value}
      {...additional}
    />
  )
}

CheckControl.defaultProps = {
  checked: false,
  disabled: false,
  required: false,
  value: ''
}

CheckControl.propTypes = {
  additional: PropTypes.object,
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.oneOf([ 'radio', 'checkbox' ]).isRequired,
  value: PropTypes.string
}

export default CheckControl
