import React, { PropTypes } from 'react'
import classnames from 'classnames'

import BaseControl from '../../BaseControl'

const NativeFileControl = ({ className, ...other }) => {
  const controlClasses = classnames(
    'control--file',
    className
  )

  return (
    <BaseControl
      {...other}
      className={controlClasses}
      element="input"
    />
  )
}

NativeFileControl.propTypes = {
  className: PropTypes.string
}

export default NativeFileControl
