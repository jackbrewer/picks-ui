import React from 'react'
import PropTypes from 'prop-types'

import SingleCheckControl from './SingleCheck'

const CheckControl = ({ options, ...other }) => {
  if (options.length === 1) {
    return <SingleCheckControl {...other} option={options[0]} />
  }

  return (
    <ul className="control--check-list list--unstyled">
      {options.map((option, i) => <li key={i}><SingleCheckControl {...other} option={option} /></li>)}
    </ul>
  )
}

CheckControl.propTypes = {
  options: PropTypes.array.isRequired
}

export default CheckControl
