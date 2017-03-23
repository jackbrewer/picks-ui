import React, { PropTypes } from 'react'
import classnames from 'classnames'

const NativeFileControl = (props) => {
  const { additional, className, disabled, error, id, name, onBlur, onChange, onFocus, required } = props
  const controlClasses = classnames(
    'control',
    'control--file',
    className,
    { 'control--error': error }
  )

  return (
    <input
      className={controlClasses}
      disabled={disabled}
      id={id}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      required={required}
      type="file"
      {...additional}
    />
  )
}

NativeFileControl.propTypes = {
  additional: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool
}

export default NativeFileControl
