import React from 'react'
import PropTypes from 'prop-types'
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
  modifiers: PropTypes.arrayOf(PropTypes.string)
}

export default NativeCheckControl
