import React from 'react'
import Helmet from 'react-helmet'

import Example from '../component/example/Example'
import Control from '../component/control/Control'

class ControlTextareaPage extends React.Component {
  constructor () {
    super()
    this.state = {
      exampleTextarea: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <div className="prose">
        <Helmet title="Textarea Control" />
        <h1>Textarea Control</h1>
        <Example>
          <Control
            type="textarea"
            name="exampleTextarea"
            onChange={this.handleInputChange}
            value={this.state['exampleTextarea']}
          />
        </Example>
      </div>
    )
  }
}

export default ControlTextareaPage
