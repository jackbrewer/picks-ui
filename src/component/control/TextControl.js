import React from 'react'
import moment from 'moment'
import classnames from 'classnames'

const TextControl = (props) => {
  const { type, name, onChange, disabled, maxLength, required, onBlur, autoFocus, controlClassName, placeholder, error } = props
  let { value } = props

  const controlClasses = classnames('control', 'control--text', controlClassName, { 'control--error': error })

  if (type === 'date' && value) {
    value = moment(value).format('YYYY-MM-DD')
  }

  return (
    <input
      type={type}
      name={name}
      value={value}
      id={`control--${name}`}
      className={controlClasses}
      autoFocus={autoFocus}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      maxLength={maxLength}
      required={required}
      placeholder={placeholder}
      />
  )
}

TextControl.defaultProps = {
  type: 'text',
  value: '',
  required: false,
  autoFocus: false,
  disabled: false
}

TextControl.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  type: React.PropTypes.string,
  controlClassName: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  required: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  autoFocus: React.PropTypes.bool,
  maxLength: React.PropTypes.number,
  placeholder: React.PropTypes.string,
  error: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node
  ])
}

export default TextControl
