import React from 'react'
import PropTypes from 'prop-types'

import CustomCheckControl from './CustomCheck'
import NativeCheckControl from './NativeCheck'

const SingleCheckControl = ({ option, native, value, ...other }) => {
  const CheckControlType = native ? NativeCheckControl : CustomCheckControl

  function isChecked (optionValue) {
    if (!value) return false
    if (value === optionValue) return true
    if (Array.isArray(value) && value.includes(optionValue)) return true
    return false
  }

  return (
    <label className="control-wrap">
      <span className="control-wrap__item control-wrap__item--shrink">
        <CheckControlType
          {...other}
          value={option.value}
          {...isChecked(option.value) && { checked: true }}
          required={option.required}
        />
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
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }).isRequired
}

export default SingleCheckControl
