import React, { PropTypes } from 'react'

import CustomSelectControl from './CustomSelect'
import NativeSelectControl from './NativeSelect'

const SelectControl = ({ native, ...other }) => {
  const SelectControlType = native ? NativeSelectControl : CustomSelectControl

  return (
    <SelectControlType {...other} />
  )
}

SelectControl.propTypes = {
  native: PropTypes.bool
}

export default SelectControl
