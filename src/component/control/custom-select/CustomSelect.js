import React, { PropTypes } from 'react'
import classNames from 'classnames'

import SelectControl from '../select/Select'

const CustomSelect = (props) => {
  const { error, native } = props
  const customSelectClassNames = classNames(
    'custom-select',
    { 'custom-select--error': error }
  )

  if (native) return <SelectControl {...props} />

  return (
    <span className={customSelectClassNames}>
      <SelectControl {...props} />
    </span>
  )
}

CustomSelect.defaultProps = {
  error: '',
  native: false
}

CustomSelect.propTypes = {
  error: PropTypes.string,
  native: PropTypes.bool
}

export default CustomSelect
