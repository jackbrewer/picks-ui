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
        <Helmet title="Control" />
        <h1>Control</h1>
        <p>Controls are basic inputs and will rarely be used directly. You’ll likely use fields which will pull in the desired control type.</p>
        <h2>Text Control</h2>
        <Example filterProps={filterProps}>
          <Control type="text" name="exampleName" onChange={this.handleTextChange} value={this.state['exampleName'] || ''} />
        </Example>
        <h3>Attributes</h3>
        <p>These need splitting and explaining better</p>
        <Example noPreview>
          <Control
            controlClassName="additional-control-class"
            disabled
            name="exampleFull"
            onBlur={this.handleTextChange}
            onChange={this.handleTextChange}
            placeholder="Placeholder Text"
            required
            type="password"
            value={this.state['exampleFull'] || ''}
            additional={{}}
          />
        </Example>

        <Example filterProps={filterProps}>
          <Control type="text" additional={{ maxLength: 8, size: 20 }} name="controlText" onChange={this.handleTextChange} value={this.state['controlText'] || ''} />
          <Control type="number" name="controlNumber" onChange={this.handleTextChange} value={this.state['controlNumber'] || ''} />
          <Control type="password" name="controlPassword" onChange={this.handleTextChange} value={this.state['controlPassword'] || ''} />
        </Example>
      </div>
    )
  }
}

export default ControlPage
