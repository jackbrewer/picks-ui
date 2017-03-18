import React, { PropTypes } from 'react'

import CustomFileControl from './custom-file/CustomFile'
import NativeFileControl from './native-file/NativeFile'

const FileControl = (props) => {
  const { native } = props

  const FileControlType = native ? NativeFileControl : CustomFileControl

  return (
    <FileControlType {...props} />
  )
}

FileControl.propTypes = {
  native: PropTypes.bool
}

export default FileControl
