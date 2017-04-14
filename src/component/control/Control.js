import React from 'react'
import PropTypes from 'prop-types'

import CheckControl from './check/Check'
import SelectControl from './select/Select'
import FileControl from './file/File'
import DateControl from './date/Date'
import TextControl from './text/Text'
import TextareaControl from './textarea/Textarea'

const Control = (props) => {
  const { type } = props
  const componentMap = {
    checkbox: () => <CheckControl {...props} />,
    radio: () => <CheckControl {...props} />,
    date: () => <DateControl {...props} />,
    file: () => <FileControl {...props} />,
    select: () => <SelectControl {...props} />,
    textarea: () => <TextareaControl {...props} />
  }

  return componentMap[type]
    ? componentMap[type]()
    : <TextControl {...props} />
}

Control.propTypes = {
  type: PropTypes.string.isRequired
}

export default Control
