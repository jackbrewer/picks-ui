import React from 'react'
import PropTypes from 'prop-types'

import CustomFileControl from './CustomFile'
import NativeFileControl from './NativeFile'

const FileControl = ({ native, ...other }) => {
  const FileControlType = native ? NativeFileControl : CustomFileControl

  return (
    <FileControlType {...other} />
  )
}

FileControl.propTypes = {
  native: PropTypes.bool
}

export default FileControl
