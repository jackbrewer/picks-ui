import React, { PropTypes } from 'react'
import classNames from 'classnames'

const BaseControl = (props) => {
  const {
    children, className, error, name,
    // Use the element prop as a React component
    element: Element,
    // Attributes added by author, or embellished by type-spcific controls
    ...other
  } = props

  const controlClassNames = classNames(
    'control',
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
  name: PropTypes.string.isRequired
}

export default BaseControl
