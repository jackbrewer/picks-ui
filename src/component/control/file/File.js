import React, { PropTypes } from 'react'
import classnames from 'classnames'

const FileControl = ({ accept, additional, className, disabled, error, name, onBlur, onChange, required, value }) => {
  const controlClasses = classnames('control', 'control--file', className, { 'control--error': error })

  return (
    <input
      accept={accept}
      className={controlClasses}
      disabled={disabled}
      id={`control--${name}`}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      required={required}
      type="file"
      value={value}
      {...additional}
    />
  )
}

FileControl.defaultProps = {
  disabled: false,
  required: false,
  value: ''
}

FileControl.propTypes = {
  accept: PropTypes.string,
  additional: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.string
}

export default FileControl
