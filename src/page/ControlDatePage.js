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
        <Helmet title="Date Control" />
        <h1>Date Control</h1>
        <Example>
          <Control
            name="controlDate"
            onChange={this.handleTextChange}
            type="date"
            value={this.state['controlDate'] || ''}
          />
        </Example>
      </div>
    )
  }
}

export default ControlPage
