import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Example from '../../component/example/Example'
import Swatch from '../../component/swatch/container/Swatch'

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
    // localStorage.setItem('preferredColorFormat', this.state.formats[nextFormatIndex])
  }

  // componentDidMount () {
  //   const preferredColorFormat = localStorage.getItem('preferredColorFormat')
  //   if (preferredColorFormat) {
  //     this.setState({ displayFormat: preferredColorFormat })
  //   }
  // }

  render () {
    const previewWidth = 'tablet-one-half desktop-one-third'
    return (
      <div className="prose">
        <Helmet title="Swatch" />
        <h1>Swatch</h1>
        <Example previewWidth={previewWidth} displayName="Swatch">
          <Swatch
            name=".50mm"
            value="#eb4b5c"
            />
          <Swatch
            displayFormat="RGB"
            name=".60mm"
            value="#ec765c"
            />
          <Swatch
            displayFormat="HSL"
            name=".73mm"
            value="#e8d135"
            />
        </Example>
        <Example previewWidth={previewWidth} displayName="Swatch">
          <Swatch
            displayFormat={this.state.displayFormat}
            onClick={this.handleClick}
            name=".88mm"
            value="#57a65e"
          />
          <Swatch
            displayFormat={this.state.displayFormat}
            onClick={this.handleClick}
            name="1.0mm"
            value="#4f86a9"
          />
          <Swatch
            displayFormat={this.state.displayFormat}
            onClick={this.handleClick}
            name="1.14mm"
            value="#9c5386"
          />
        </Example>
      </div>

    )
  }
}

export default SwatchPage
