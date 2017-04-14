import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import BaseControl from '../BaseControl'
import Option from './Option'

const NativeSelectControl = ({ className, options, type, ...other }) => {
  const controlClassNames = classnames(
    'control--choice',
    className
  )

  return (
    <BaseControl
      {...other}
      className={controlClassNames}
      element={type}
      >
      {options.map((option, i) =>
        <Option key={i} option={option} />
      )}
    </BaseControl>
  )
}

NativeSelectControl.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
  type: PropTypes.string
}

export default NativeSelectControl
