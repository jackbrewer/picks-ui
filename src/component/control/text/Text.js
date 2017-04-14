import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import BaseControl from '../BaseControl'

const TextControl = ({ className, placeholder, ...other }) => {
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

TextControl.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextControl
