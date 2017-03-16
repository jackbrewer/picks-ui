import React, { PropTypes } from 'react'
import classnames from 'classnames'

const ChoiceControl = ({ autoFocus, controlClassName, disabled, name, onBlur, onChange, options, required, value }) => {
  return (
    <select
      autoFocus={autoFocus}
      className={classnames('control', 'control--choice', controlClassName)}
      defaultValue={value}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      required={required}
      >
      {options.map(({ value, text }, i) =>
        <option key={`${i}-${value}`} value={value}>{text}</option>)}
    </select>
  )
}

ChoiceControl.defaultProps = {
  autoFocus: false,
  disabled: false,
  required: false,
  type: 'text',
  value: ''
}

ChoiceControl.propTypes = {
  autoFocus: PropTypes.bool,
  controlClassName: PropTypes.string,
  disabled: PropTypes.bool,
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default ChoiceControl
