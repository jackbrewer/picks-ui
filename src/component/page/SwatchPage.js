import React, { Component } from 'react'

import Code from '../code/Code'

import Swatch from '../swatch/container/Swatch'

class SwatchPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayFormat: 'Hex',
      formats: [ 'Hex', 'RGB', 'HSL' ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    const currentFormatIndex = this.state.formats.indexOf(this.state.displayFormat)
    const nextFormatIndex = currentFormatIndex + 1 < this.state.formats.length ? currentFormatIndex + 1 : 0
    this.setState({ displayFormat: this.state.formats[nextFormatIndex] })
    localStorage.setItem('preferredColorFormat', this.state.formats[nextFormatIndex])
  }

  componentDidMount () {
    const preferredColorFormat = localStorage.getItem('preferredColorFormat')
    if (preferredColorFormat) {
      this.setState({ displayFormat: preferredColorFormat })
    }
  }

  render () {
    return (
      <div className="prose">
        <h1>Swatch</h1>
        <Code previewWidth="tablet-one-half desktop-one-third">
          <Swatch name=".50mm" value="#eb4b5c" />
        </Code>
        <Code previewWidth="tablet-one-half desktop-one-third" noSource >
          <Swatch name=".50mm" value="#eb4b5c" handleClick={this.handleClick} displayFormat={this.state.displayFormat} />
          <Swatch name=".60mm" value="rgb(236, 118, 92)" handleClick={this.handleClick} displayFormat={this.state.displayFormat} />
          <Swatch name=".73mm" value="hsl(52, 80%, 56%)" handleClick={this.handleClick} displayFormat={this.state.displayFormat} />
        </Code>
      </div>

    )
  }
}

export default SwatchPage
