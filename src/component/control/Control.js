import React, { PropTypes } from 'react'

import BooleanControl from './BooleanControl'
import ChoiceControl from './ChoiceControl'
import MultilineControl from './MultilineControl'
import TextControl from './TextControl'

const Control = (props) => {
  const { type } = props

  switch (type) {
    case 'choice':
      return <ChoiceControl {...props} />
    case 'checkbox':
      return <BooleanControl {...props} />
    case 'radio':
      return <BooleanControl {...props} />
    case 'multiline':
      return <MultilineControl {...props} />
    case 'file':
      return null
    default:
      return <TextControl {...props} />
  }
}

Control.defaultProps = {
  type: 'text'
}

Control.propTypes = {
  type: PropTypes.string
}

export default Control
