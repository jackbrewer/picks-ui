import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const BaseControl = (props) => {
  const {
    children, className, error, modifiers, name,
    // Use the element prop as a React component
    element: Element,
    // Attributes added by author, or embellished by type-spcific controls
    ...other
  } = props

  const controlClassNames = classNames(
    'control',
    modifiers && modifiers.map(modifierClass => `control--${modifierClass}`),
    className,
    { 'control--error': error }
  )

  return (
    <Element
      className={controlClassNames}
      name={name}
      {...other}
      >
      {children}
    </Element>
  )
}

BaseControl.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.string.isRequired,
  error: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired
}

export default BaseControl
