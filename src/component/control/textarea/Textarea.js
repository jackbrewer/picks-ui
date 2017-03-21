import React, { PropTypes } from 'react'
import classnames from 'classnames'

const TextareaControl = (props) => {
  const { additional, className, disabled, error, name, onBlur, onChange, onFocus, placeholder, required, value } = props
  const controlClassNames = classnames(
    'control',
    'control--text',
    'control--multiline',
    className,
    { 'control--error': error }
  )

  return (
    <textarea
      className={controlClassNames}
      disabled={disabled}
      id={`control--${name}`}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      required={required}
      value={value}
      {...additional}
    />
  )
}

TextareaControl.propTypes = {
  additional: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string
}

export default TextareaControl
