import React from 'react'
import PropTypes from 'prop-types'

import StandardCheckField from './standard/StandardCheckField'
import StandardTextField from './standard/StandardTextField'

const Field = (props) => {
  const { type } = props
  const componentMap = {
    checkbox: () => <StandardCheckField {...props} />,
    radio: () => <StandardCheckField {...props} />
  }

  return componentMap[type]
    ? componentMap[type]()
    : <StandardTextField {...props} />
}

Field.propTypes = {
  type: PropTypes.string
}

export default Field
