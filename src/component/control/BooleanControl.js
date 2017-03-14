import React, { PropTypes } from 'react'
import classnames from 'classnames'

const BooleanControl = ({ checked, controlClassName, disabled, name, onBlur, onChange, required, type, value }) => {
  return (
    <input
      checked={checked}
      className={classnames('control', 'control--boolean', controlClassName)}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      required={required}
      type={type}
      value={value}
    />
  )
}

BooleanControl.defaultProps = {
  checked: false,
  disabled: false,
  required: false,
  type: 'checkbox',
  value: ''
}

BooleanControl.propTypes = {
  checked: PropTypes.bool,
  controlClassName: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.oneOf([ 'radio', 'checkbox' ]),
  value: PropTypes.string
}

export default BooleanControl
