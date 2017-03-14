import React from 'react'
import classnames from 'classnames'

const ChoiceControl = ({ value, options, name, onChange, disabled, onBlur, required, autoFocus, controlClassName }) => {
  return (
    <select
      defaultValue={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      required={required}
      autoFocus={autoFocus}
      className={classnames('control', 'control--choice', controlClassName)}
      >
      {options.map(({ value, text }, i) =>
        <option key={`${i}-${value}`} value={value}>{text}</option>)}
    </select>
  )
}

ChoiceControl.defaultProps = {
  type: 'text',
  value: '',
  required: false,
  autoFocus: false,
  disabled: false
}

ChoiceControl.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  controlClassName: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  required: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  autoFocus: React.PropTypes.bool,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  }))
}

export default ChoiceControl
