import React, { PropTypes } from 'react'

import SingleCheck from './single-check/SingleCheck'

const CheckControl = (props) => {
  const { options } = props

  if (options.length === 1) {
    return <SingleCheck {...props} {...options[0]} />
  }

  return (
    <ul className="control--check-list list--unstyled">
      {options.map((option, i) => <li key={i}><SingleCheck {...props} {...option} /></li>)}
    </ul>
  )
}

CheckControl.propTypes = {
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
