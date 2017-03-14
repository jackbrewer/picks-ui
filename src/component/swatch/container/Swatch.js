import React, { PropTypes } from 'react'
import convertColor from 'css-color-converter'

import Swatch from '../Swatch'

const SwatchContainer = ({ displayFormat, handleClick, name, value }) => {
  const convertedColor = convertColor(value)
  let displayValue

  switch (displayFormat) {
    case 'Hex':
      displayValue = convertedColor.toHexString()
      break
    case 'RGB':
      displayValue = convertedColor.toRgbString()
      break
    case 'HSL':
      displayValue = convertedColor.toHslString()
      break
    default:
      break
  }
  return (
    <Swatch
      format={displayFormat}
      handleClick={handleClick}
      name={name}
      value={displayValue}
    />
  )
}

SwatchContainer.defaultProps = {
  displayFormat: 'Hex'
}

SwatchContainer.propTypes = {
  displayFormat: PropTypes.string,
  handleClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default SwatchContainer
