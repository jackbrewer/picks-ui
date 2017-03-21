import React, { PropTypes } from 'react'
import classNames from 'classnames'
import moment from 'moment'

import InputControl from '../input/Input'
import Icon from '../../icon/Icon'
import CalendarSvg from '../../svg/Calendar'

const DateControl = (props) => {
  const { error } = props
  const controlClassNames = classNames(
    'datepicker',
    { 'datepicker--error': error }
  )
  let { value } = props
  value = value && moment(value).format('YYYY-MM-DD')

  return (
    <span className={controlClassNames}>
      <span className="datepicker__icon">
        <Icon type="calendar">
          <CalendarSvg />
        </Icon>
      </span>
      <InputControl {...props} {...value && { value }} />
    </span>
  )
}

DateControl.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string
}

export default DateControl
