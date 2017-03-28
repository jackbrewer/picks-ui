import React, { PropTypes } from 'react'

import StandardCheckField from './standard/StandardCheckField'
import StandardTextField from './standard/StandardTextField'

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
      return <StandardCheckField {...props} />
    default:
      return <StandardTextField {...props} />
  }
}

Field.propTypes = {
  type: PropTypes.string
}

export default Field
