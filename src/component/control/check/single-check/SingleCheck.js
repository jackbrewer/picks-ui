import React, { PropTypes } from 'react'

import CustomCheckControl from '../custom-check/CustomCheck'
import NativeCheckControl from '../native-check/NativeCheck'

const SingleCheckControl = (props) => {
  const { text, value, native, currentValue } = props
  const CheckControlType = native ? NativeCheckControl : CustomCheckControl

  function isChecked (value) {
    if (Array.isArray(currentValue) && currentValue.indexOf(value) !== -1) return true
    if (currentValue === value) return true
    return false
  }

  return (
    <label className="control-wrap">
      <span className="control-wrap__item control-wrap__item--shrink">
        <CheckControlType {...props} value={value} checked={isChecked(value)} />
      </span>
      <span className="control-wrap__item">{text}</span>
    </label>
  )
}

SingleCheckControl.propTypes = {
  currentValue: PropTypes.oneOfType([
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
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default SingleCheckControl
