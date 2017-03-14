import React from 'react'
import classnames from 'classnames'

const MultilineControl = ({ value, name, onChange, disabled, required, onBlur, controlClassName, autoFocus, maxLength, rows }) => {
  return (
    <textarea
      name={name}
      className={classnames('control', 'control--text', 'control--multiline', controlClassName)}
      required={required}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      rows={rows}
      value={value}
    />
  )
}

MultilineControl.defaultProps = {
  value: '',
  required: false,
  disabled: false,
  rows: 3
}

MultilineControl.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  controlClassName: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  required: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  autoFocus: React.PropTypes.bool,
  maxLength: React.PropTypes.number,
  rows: React.PropTypes.number
}

export default MultilineControl
