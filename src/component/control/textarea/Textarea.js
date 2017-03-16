import React, { PropTypes } from 'react'
import classnames from 'classnames'

const TextareaControl = ({ additional, controlClassName, disabled, error, maxLength, name, onBlur, onChange, required, rows, value }) => {
  return (
    <textarea
      className={classnames('control', 'control--text', 'control--multiline', controlClassName, { 'control--error': error })}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      required={required}
      rows={rows}
      value={value}
      {...additional}
    />
  )
}

TextareaControl.defaultProps = {
  disabled: false,
  required: false,
  rows: 3,
  value: ''
}

TextareaControl.propTypes = {
  additional: PropTypes.object,
  controlClassName: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string
}

export default TextareaControl
