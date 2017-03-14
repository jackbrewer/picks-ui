import React, { PropTypes } from 'react'
import moment from 'moment'
import classnames from 'classnames'

const TextControl = (props) => {
  const { autoFocus, controlClassName, disabled, error, maxLength, name, onBlur, onChange, placeholder, required, type } = props
  let { value } = props

  const controlClasses = classnames('control', 'control--text', controlClassName, { 'control--error': error })

  if (type === 'date' && value) {
    value = moment(value).format('YYYY-MM-DD')
  }

  return (
    <input
      autoFocus={autoFocus}
      className={controlClasses}
      disabled={disabled}
      id={`control--${name}`}
      maxLength={maxLength}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      />
  )
}

TextControl.defaultProps = {
  autoFocus: false,
  disabled: false,
  required: false,
  type: 'text',
  value: ''
}

TextControl.propTypes = {
  autoFocus: PropTypes.bool,
  controlClassName: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string
}

export default TextControl
