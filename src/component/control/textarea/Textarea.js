import React, { PropTypes } from 'react'
import classnames from 'classnames'

import BaseControl from '../BaseControl'

const TextareaControl = ({ className, placeholder, type, ...other }) => {
  const controlClassNames = classnames(
    'control--text',
    'control--multiline',
    className
  )

  return (
    <BaseControl
      {...other}
      className={controlClassNames}
      element={type}
      placeholder={placeholder}
    />
  )
}

TextareaControl.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
}

export default TextareaControl
