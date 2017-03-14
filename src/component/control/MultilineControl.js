import React, { PropTypes } from 'react'
import classnames from 'classnames'

const MultilineControl = ({ autoFocus, controlClassName, disabled, maxLength, name, onBlur, onChange, required, rows, value }) => {
  return (
    <textarea
      className={classnames('control', 'control--text', 'control--multiline', controlClassName)}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      required={required}
      rows={rows}
      value={value}
    />
  )
}

MultilineControl.defaultProps = {
  disabled: false,
  required: false,
  rows: 3,
  value: ''
}

MultilineControl.propTypes = {
  autoFocus: PropTypes.bool,
  controlClassName: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string
}

export default MultilineControl
