import React, { PropTypes } from 'react'
import classNames from 'classnames'

import BaseControl from '../BaseControl'

const InputControl = ({ className, placeholder, ...other }) => {
  const controlClassNames = classNames(
    'control--text',
    className
  )

  return (
    <BaseControl
      {...other}
      className={controlClassNames}
      element="input"
      placeholder={placeholder}
    />
  )
}

InputControl.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string
}

export default InputControl
