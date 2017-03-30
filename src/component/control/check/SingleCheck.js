import React, { PropTypes } from 'react'

import CustomCheckControl from './CustomCheck'
import NativeCheckControl from './NativeCheck'

const SingleCheckControl = ({ option, native, value, ...other }) => {
  const CheckControlType = native ? NativeCheckControl : CustomCheckControl

  function isChecked (optionValue) {
    if (Array.isArray(value) && value.includes(optionValue)) return true
    if (value === optionValue) return true
    return false
  }

  return (
    <label className="control-wrap">
      <span className="control-wrap__item control-wrap__item--shrink">
        <CheckControlType {...other} value={option.value} checked={isChecked(option.value)} />
      </span>
      <span className="control-wrap__item">{option.text}</span>
    </label>
  )
}

SingleCheckControl.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    )
  ]),
  native: PropTypes.bool,
  option: PropTypes.shape({
    text: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }).isRequired
}

export default SingleCheckControl
