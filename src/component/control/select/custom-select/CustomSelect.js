import React, { PropTypes } from 'react'
import classNames from 'classnames'

import NativeSelectControl from '../native-select/NativeSelect'

const CustomSelect = (props) => {
  const { error } = props
  const customSelectClassNames = classNames(
    'custom-select',
    { 'custom-select--error': error }
  )

  return (
    <span className={customSelectClassNames}>
      <NativeSelectControl {...props} />
    </span>
  )
}

CustomSelect.defaultProps = {
  error: ''
}

CustomSelect.propTypes = {
  error: PropTypes.string
}

export default CustomSelect
