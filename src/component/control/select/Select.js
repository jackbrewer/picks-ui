import React from 'react'
import PropTypes from 'prop-types'

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
