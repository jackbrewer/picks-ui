import React, { PropTypes } from 'react'

import CheckControl from './check/Check'
import SelectControl from './select/Select'
import FileControl from './file/File'
import DateControl from './date/Date'
import InputControl from './input/Input'
import TextareaControl from './textarea/Textarea'

const Control = (props) => {
  const { type } = props

  switch (type) {
    case 'checkbox':
    case 'radio':
      return <CheckControl {...props} />
    case 'date':
      return <DateControl {...props} />
    case 'file':
      return <FileControl {...props} />
    // case 'hidden':
    //   return null
    // case 'range':
    //   return null
    case 'select':
      return <SelectControl {...props} />
    case 'textarea':
      return <TextareaControl {...props} />
    default:
      return <InputControl {...props} />
  }
}

Control.propTypes = {
  type: PropTypes.string.isRequired
}

export default Control
