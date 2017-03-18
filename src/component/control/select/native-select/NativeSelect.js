import React, { PropTypes } from 'react'
import classnames from 'classnames'

const NativeSelectControl = ({ additional, controlClassName, disabled, error, name, onBlur, onChange, options, required, currentValue }) => {
  return (
    <select
      className={classnames('control', 'control--choice', controlClassName, { 'control--error': error })}
      disabled={disabled}
      value={currentValue}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      required={required}
      {...additional}
      >
      {options.map(({ value, text }, i) =>
        <option key={`${i}-${value}`} value={value}>{text}</option>)
      }
    </select>
  )
}

NativeSelectControl.defaultProps = {
  disabled: false,
  required: false,
  type: 'text',
  value: ''
}

NativeSelectControl.propTypes = {
  additional: PropTypes.object,
  controlClassName: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })).isRequired,
  required: PropTypes.bool,
  currentValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default NativeSelectControl
