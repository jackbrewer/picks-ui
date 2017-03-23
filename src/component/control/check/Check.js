import React, { PropTypes } from 'react'

import SingleCheckControl from './single-check/SingleCheck'

const CheckControl = (props) => {
  const { options } = props

  if (options.length === 1) {
    return <SingleCheckControl {...props} option={options[0]} />
  }

  return (
    <ul className="control--check-list list--unstyled">
      {options.map((option, i) => <li key={i}><SingleCheckControl {...props} option={option} /></li>)}
    </ul>
  )
}

CheckControl.propTypes = {
  options: PropTypes.array.isRequired
}

export default CheckControl
