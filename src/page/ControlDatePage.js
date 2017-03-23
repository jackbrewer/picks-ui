import React from 'react'
import Helmet from 'react-helmet'

import Example from '../component/example/Example'
import Control from '../component/control/Control'

class ControlPage extends React.Component {
  constructor () {
    super()
    this.state = {
      controlDate: '',
      controlDate2: '2014-04-25T01:32:21.196Z'
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (e) {
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
            type="date"
            onChange={this.handleInputChange}
            value={this.state['controlDate']}
          />
        </Example>
        <Example>
          <Control
            name="controlDate2"
            type="date"
            onChange={this.handleInputChange}
            value={this.state['controlDate2']}
          />
        </Example>
      </div>
    )
  }
}

export default ControlPage
