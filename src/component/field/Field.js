import React, { PropTypes } from 'react'

import CheckField from './check/CheckField'
import StandardField from './standard/StandardField'

const Field = (props) => {
  const { layout } = props

  switch (layout) {
    case 'check':
      return <CheckField {...props} />
    default:
      return <StandardField {...props} />
  }
}

Field.propTypes = {
  layout: PropTypes.string
}

export default Field
