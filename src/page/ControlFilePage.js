import React from 'react'

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
    const filterProps = [ 'onChange' ]
    return (
      <div className="prose">
        <h1>File Control</h1>
        <Example filterProps={filterProps}>
          <Control
            name="controlFile"
            onChange={this.handleTextChange}
            type="file"
            value={this.state['controlFile'] || ''}
            />
        </Example>
      </div>
    )
  }
}

export default ControlPage
