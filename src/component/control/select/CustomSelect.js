import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import NativeSelectControl from './NativeSelect'

const CustomSelectControl = (props) => {
  const { error, modifiers } = props
  const controlClassNames = classNames(
    'custom-select',
    modifiers && modifiers.map(modifierClass => `custom-select--${modifierClass}`),
    { 'custom-select--error': error }
  )

  return (
    <span className={controlClassNames}>
      <NativeSelectControl {...props} />
    </span>
  )
}

CustomSelectControl.propTypes = {
  error: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string)
}

export default CustomSelectControl
