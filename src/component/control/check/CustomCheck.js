import React, { PropTypes } from 'react'
import classNames from 'classnames'

import NativeCheckControl from './NativeCheck'

const CustomCheckControl = (props) => {
  const { error, type } = props
  const controlClassNames = classNames(
    'custom-check',
    `custom-check--${type}`,
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
  type: PropTypes.string.isRequired
}

export default CustomCheckControl
