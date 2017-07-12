import React from 'react'
import PropTypes from 'prop-types'

import CalendarSvg from '../../asset/image/svg/calendar.svg'
import CrossSvg from '../../asset/image/svg/cross.svg'
import GithubSvg from '../../asset/image/svg/github.svg'
import PickSvg from '../../asset/image/svg/pick.svg'

const svgs = {
  'calendar': CalendarSvg,
  'cross': CrossSvg,
  'github': GithubSvg,
  'pick': PickSvg
}

const Svg = ({ type }) => {
  const SvgType = svgs[type]
  return (
    <SvgType />
  )
}

Svg.propTypes = {
  type: PropTypes.string.isRequired
}

export default Svg
