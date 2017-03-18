import React, { PropTypes } from 'react'

import CustomSelectControl from './custom-select/CustomSelect'
import NativeSelectControl from './native-select/NativeSelect'

const SelectControl = (props) => {
  const { native } = props

  const SelectControlType = native ? NativeSelectControl : CustomSelectControl

  return (
    <SelectControlType {...props} />
  )
}

SelectControl.propTypes = {
  native: PropTypes.bool
}

export default SelectControl
