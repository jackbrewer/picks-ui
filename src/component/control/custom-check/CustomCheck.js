import React, { PropTypes } from 'react'
import classNames from 'classnames'

import CheckControl from '../check/Check'

const CustomCheckControl = (props) => {
  const { error, native, type } = props
  const customCheckClassNames = classNames(
    'custom-check',
    `custom-check--${type}`,
    { 'custom-check--error': error }
  )

  if (native) return <CheckControl {...props} />

  return (
    <span className={customCheckClassNames}>
      <CheckControl {...props} className="custom-check__control" />
      <span className="custom-check__indicator" />
    </span>
  )
}

CustomCheckControl.defaultProps = {
  error: '',
  native: false
}

CustomCheckControl.propTypes = {
  error: PropTypes.string,
  native: PropTypes.bool,
  type: PropTypes.string.isRequired
}

export default CustomCheckControl
