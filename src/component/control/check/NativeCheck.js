import React, { PropTypes } from 'react'
import classnames from 'classnames'

import BaseControl from '../BaseControl'

const NativeCheckControl = ({ className, checked, modifiers, ...other }) => {
  const controlClassNames = classnames(
    'control--check',
    modifiers && modifiers.map(modifierClass => `custom-search--${modifierClass}`),
    className
  )

  return (
    <BaseControl
      {...other}
      checked={checked}
      className={controlClassNames}
      element="input"
      modifiers={modifiers}
    />
  )
}

NativeCheckControl.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  modifiers: React.PropTypes.arrayOf(React.PropTypes.string)
}

export default NativeCheckControl
