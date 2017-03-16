import React, { PropTypes } from 'react'
import moment from 'moment'

import InputControl from '../input/Input'
import Icon from '../../icon/Icon'
import CalendarSvg from '../../svg/Calendar'

const DateControl = (props) => {
  let { value } = props
  value = value && moment(value).format('YYYY-MM-DD')

  // TODO - check for native datepicker support and render optionally render 3x select boxes
  return (
    <span className="datepicker">
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
  value: PropTypes.string
}

export default DateControl
