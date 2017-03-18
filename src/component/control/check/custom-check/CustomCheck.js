import React, { PropTypes } from 'react'
import classNames from 'classnames'

import NativeCheckControl from '../native-check/NativeCheck'

const CustomCheckControl = (props) => {
  const { error, type } = props
  const customCheckClassNames = classNames(
    'custom-check',
    `custom-check--${type}`,
    { 'custom-check--error': error }
  )

  return (
    <span className={customCheckClassNames}>
      <NativeCheckControl {...props} className="custom-check__control" />
      <span className="custom-check__indicator" />
    </span>
  )
}

CustomCheckControl.defaultProps = {
  error: ''
}

CustomCheckControl.propTypes = {
  error: PropTypes.string,
  type: PropTypes.string.isRequired
}

export default CustomCheckControl
