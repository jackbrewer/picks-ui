import React from 'react'
import Helmet from 'react-helmet'

import Example from '../component/example/Example'
import Control from '../component/control/Control'

class ControlPage extends React.Component {
  constructor () {
    super()
    this.state = {}
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <div className="prose">
        <Helmet title="File Control" />
        <h1>File Control</h1>
        <p>Uncontrolled input as it is not possibl to set a value on a file input.</p>
        <Example filterProps={filterProps}>
          <Control
            name="controlFile"
            onChange={this.handleTextChange}
            type="file"
            additional={{ multiple: true }}
            />
        </Example>
        <Example filterProps={filterProps}>
          <Control
            name="controlFile"
            native
            onChange={this.handleTextChange}
            type="file"
            additional={{ multiple: true }}
            value={this.state['controlFile'] || ''}
            />
        </Example>
      </div>
    )
  }
}

export default ControlPage
