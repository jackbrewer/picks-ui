import React, { PropTypes } from 'react'
import classnames from 'classnames'

import BaseControl from '../BaseControl'

const NativeCheckControl = ({ className, checked, ...other }) => {
  const controlClassNames = classnames(
    'control--check',
    className
  )

  return (
    <BaseControl
      {...other}
      className={controlClassNames}
      element="input"
      checked={checked}
    />
  )
}

NativeCheckControl.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string
}

export default NativeCheckControl
