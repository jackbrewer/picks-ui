import React, { Component } from 'react'
import convertColor from 'css-color-converter'

import Swatch from '../Swatch'

class SwatchContainer extends Component {
  render () {
    const { name, value, handleClick, displayFormat } = this.props
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
      <Swatch name={name} format={displayFormat} value={displayValue} handleClick={handleClick} />
    )
  }
}

SwatchContainer.defaultProps = {
  displayFormat: 'Hex'
}

SwatchContainer.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  displayFormat: React.PropTypes.string,
  handleClick: React.PropTypes.func
}

export default SwatchContainer
