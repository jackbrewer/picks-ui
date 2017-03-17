import React, { PropTypes } from 'react'

import CustomCheckControl from '../custom-check/CustomCheck'
import NativeCheckControl from '../native-check/NativeCheck'

const CheckControl = (props) => {
  const { options, native } = props

  const SingleCheck = ({ text, value, checked }) => {
    const CheckControlType = native ? NativeCheckControl : CustomCheckControl
    return (
      <label className="control-wrap">
        <span className="control-wrap__item control-wrap__item--shrink">
          <CheckControlType {...props} value={value} checked={checked} />
        </span>
        <span className="control-wrap__item">
          <p>{text}</p>
        </span>
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
