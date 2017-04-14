import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import NativeCheckControl from './NativeCheck'

const CustomCheckControl = (props) => {
  const { error, modifiers, type } = props
  const controlClassNames = classNames(
    'custom-check',
    `custom-check--${type}`,
    modifiers && modifiers.map(modifierClass => `custom-check--${modifierClass}`),
    { 'custom-check--error': error }
  )

  return (
    <span className={controlClassNames}>
      <NativeCheckControl {...props} className="custom-check__control" />
      <span className="custom-check__indicator" />
    </span>
  )
}

CustomCheckControl.propTypes = {
  error: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string.isRequired
}

export default CustomCheckControl
