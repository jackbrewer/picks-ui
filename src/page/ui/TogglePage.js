import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Example from '../../component/example/Example'
import Toggle from '../../component/toggle/Toggle'

class TogglePage extends Component {
  constructor () {
    super()
    this.state = { example2: true }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.checked })
  }

  render () {
    return (
      <div className="prose">
        <Helmet title="Toggle" />
        <h1>Toggle</h1>
        <h2>Standard Input</h2>
        <Example>
          <Toggle
            label="A11y text in label"
            name="example"
            value="exampleValue"
            />
        </Example>
        <h2>Controlled Input</h2>
        <Example>
          <Toggle
            checked={this.state.example2}
            onChange={this.handleChange}
            label="A11y text in label"
            name="example2"
            value="example2Value"
            />
        </Example>
        <h2>State Labels</h2>
        <Example>
          <Toggle
            label="A11y text in label"
            name="example4"
            value="example4Value"
            textChecked="On"
            textUnchecked="Off"
            />
          <Toggle
            label="A11y text in label"
            name="example3"
            value="example3Value"
            textChecked="I"
            textUnchecked="0"
            />
          <Toggle
            label="A11y text in label"
            name="example3"
            value="example3Value"
            textChecked="👍"
            textUnchecked="☠️"
            />
        </Example>
      </div>
    )
  }
}

export default TogglePage
