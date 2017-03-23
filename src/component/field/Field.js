import React, { PropTypes } from 'react'

import CheckField from './check/CheckField'
import StandardField from './standard/StandardField'

const Field = (props) => {
  const { layout, type } = props

  if (layout) {
    switch (layout) {
      case 'check':
        return <CheckField {...props} />
      default:
    }
  }

  switch (type) {
    case 'checkbox':
    case 'radio':
      return <CheckField {...props} />
    default:
      return <StandardField {...props} />
  }
}

Field.propTypes = {
  layout: PropTypes.string,
  type: PropTypes.string
}

export default Field
