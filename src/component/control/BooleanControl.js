import React from 'react'
import classnames from 'classnames'

const BooleanControl = ({ type, value, name, onChange, disabled, required, onBlur, controlClassName, checked }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className={classnames('control', 'control--boolean', controlClassName)}
      required={required}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      checked={checked}
    />
  )
}

BooleanControl.defaultProps = {
  type: 'checkbox',
  value: '',
  required: false,
  disabled: false,
  checked: false
}

BooleanControl.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  type: React.PropTypes.oneOf([ 'radio', 'checkbox' ]),
  controlClassName: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  required: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  checked: React.PropTypes.bool
}

export default BooleanControl
