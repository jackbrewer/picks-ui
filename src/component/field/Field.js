import React, { PropTypes } from 'react'

import CheckField from './check/CheckField'
import StandardField from './standard/StandardField'

const Field = (props) => {
  const { type } = props

  // if (layout) {
  //   switch (layout) {
  //     case 'multi':
  //       return <CheckField {...props} />
  //     default:
  //   }
  // }

  switch (type) {
    case 'checkbox':
    case 'radio':
      return <CheckField {...props} />
    default:
      return <StandardField {...props} />
  }
}

Field.propTypes = {
  type: PropTypes.string
}

export default Field
