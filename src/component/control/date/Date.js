import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import format from 'date-fns/format'

import TextControl from '../text/Text'
import Icon from '../../icon/Icon'

const DateControl = (props) => {
  const { error, modifiers } = props
  const datepickerClassNames = classNames(
    'datepicker',
    modifiers && modifiers.map(modifierClass => `datepicker--${modifierClass}`),
    { 'datepicker--error': error }
  )
  let { value } = props
  value = value && format(value, 'YYYY-MM-DD')

  return (
    <span className={datepickerClassNames}>
      <span className="datepicker__icon">
        <Icon type="calendar" />
      </span>
      <TextControl {...props} {...value && { value }} />
    </span>
  )
}

DateControl.propTypes = {
  error: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string
}

export default DateControl
