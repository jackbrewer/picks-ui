import React, { PropTypes } from 'react'

import CustomCheckControl from '../custom-check/CustomCheck'
import NativeCheckControl from '../native-check/NativeCheck'

const CheckControl = (props) => {
  const { checkedValue, options, native } = props

  const SingleCheck = ({ text, value, checked }) => {
    const CheckControlType = native ? NativeCheckControl : CustomCheckControl

    function isChecked (value) {
      if (Array.isArray(checkedValue) && checkedValue.indexOf(value) !== -1) return true
      if (checkedValue === value) return true
      return false
    }

    return (
      <label className="control-wrap">
        <span className="control-wrap__item control-wrap__item--shrink">
          <CheckControlType {...props} value={value} {...isChecked(value) && { checked: true }} />
        </span>
        <span className="control-wrap__item">{text}</span>
      </label>
    )
  }

  SingleCheck.propTypes = {
    checked: PropTypes.bool,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  if (options.length === 1) {
    return <SingleCheck {...options[0]} />
  }

  return (
    <ul className="control--check-list list--unstyled">
      {options.map((option, i) => <li key={i}><SingleCheck {...option} /></li>)}
    </ul>
  )
}

CheckControl.defaultProps = {
  native: false
}

CheckControl.propTypes = {
  checkedValue: PropTypes.oneOfType([
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
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }))
}

export default CheckControl
