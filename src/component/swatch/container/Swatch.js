import React, { PropTypes } from 'react'
import convertColor from 'css-color-converter'

import Swatch from '../Swatch'

const SwatchContainer = ({ displayFormat, onClick, name, value }) => {
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
      displayValue = value
      break
  }
  return (
    <Swatch
      onClick={onClick}
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
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default SwatchContainer
