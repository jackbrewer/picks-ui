import React, { PropTypes } from 'react'
import classNames from 'classnames'

import NativeSelectControl from '../native-select/NativeSelect'

const CustomSelectControl = (props) => {
  const { error } = props
  const controlClassNames = classNames(
    'custom-select',
    { 'custom-select--error': error }
  )

  return (
    <span className={controlClassNames}>
      <NativeSelectControl {...props} />
    </span>
  )
}

CustomSelectControl.propTypes = {
  error: PropTypes.string
}

export default CustomSelectControl
