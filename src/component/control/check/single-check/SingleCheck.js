import React, { PropTypes } from 'react'

import CustomCheckControl from '../custom-check/CustomCheck'
import NativeCheckControl from '../native-check/NativeCheck'

const SingleCheckControl = (props) => {
  const { option, native, value } = props
  const CheckControlType = native ? NativeCheckControl : CustomCheckControl

  function isChecked (optionValue) {
    if (Array.isArray(value) && value.indexOf(optionValue) !== -1) return true
    if (value === optionValue) return true
    return false
  }

  return (
    <label className="control-wrap">
      <span className="control-wrap__item control-wrap__item--shrink">
        <CheckControlType {...props} value={option.value} checked={isChecked(option.value)} />
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
    text: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }).isRequired
}

export default SingleCheckControl
