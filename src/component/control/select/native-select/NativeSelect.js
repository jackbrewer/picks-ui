import React, { PropTypes } from 'react'
import classnames from 'classnames'

import Option from './Option'

const NativeSelectControl = (props) => {
  const { additional, className, currentValue, disabled, error, name, onBlur, onChange, onFocus, options, required } = props
  const controlClassNames = classnames(
    'control',
    'control--choice',
    className,
    { 'control--error': error }
  )

  return (
    <select
      className={controlClassNames}
      disabled={disabled}
      id={`control--${name}`}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      required={required}
      value={currentValue}
      {...additional}
      >
      {options.map((option, i) =>
        <Option key={i} {...option} />
      )}
    </select>
  )
}

NativeSelectControl.propTypes = {
  additional: PropTypes.object,
  className: PropTypes.string,
  currentValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  disabled: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool
}

export default NativeSelectControl
