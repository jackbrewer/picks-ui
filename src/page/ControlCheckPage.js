import React from 'react'
import Helmet from 'react-helmet'

import Example from '../component/example/Example'
import Control from '../component/control/Control'

class ControlCheckPage extends React.Component {
  constructor () {
    super()
    this.state = {}
    this.handleSingleCheckChange = this.handleSingleCheckChange.bind(this)
    this.handleMultiCheckChange = this.handleMultiCheckChange.bind(this)
  }

  handleSingleCheckChange (e) {
    this.setState({ [e.target.name]: e.target.checked ? e.target.value : false })
  }

  handleMultiCheckChange (e) {
    const name = e.target.name
    const val = [ ...(this.state[e.target.name] || []) ]
    const newVal = e.target.value
    const index = val.indexOf(newVal)
    if (val.indexOf(newVal) !== -1) {
      val.splice(index, 1)
    } else {
      val.push(e.target.value)
    }
    this.setState({ [name]: val.sort() })
  }

  render () {
    const filterProps = [ 'onChange' ]
    return (
      <div className="prose">
        <Helmet title="Check Control" />
        <h1>Check Control</h1>
        <Example filterProps={filterProps}>
          <Control
            {...this.state['exampleCheckbox'] && { currentValue: this.state['exampleCheckbox'] }}
            type="checkbox"
            name="exampleCheckbox"
            onChange={this.handleMultiCheckChange}
            options={[
              { text: 'Text here 1', value: 'Foo1' },
              { text: 'Text here 2', value: 'Foo2' },
              { text: 'Text here 3', value: 'Foo3' },
              { text: 'Text here 4', value: 'Foo4' }
            ]}
          />
        </Example>
        <Example filterProps={filterProps}>
          <Control
            {...this.state['exampleRadio'] && { currentValue: this.state['exampleRadio'] }}
            name="exampleRadio"
            onChange={this.handleSingleCheckChange}
            options={[
              { text: 'Text here 1', value: 'Bar1' },
              { text: 'Text here 2', value: 'Bar2' },
              { text: 'Text here 3', value: 'Bar3' },
              { text: 'Text here 4', value: 'Bar4' }
            ]}
            type="radio"
            />
        </Example>
        <Example filterProps={filterProps}>
          <Control
            {...this.state['exampleNativeRadio'] && { currentValue: this.state['exampleNativeRadio'] }}
            name="exampleNativeRadio"
            native
            onChange={this.handleSingleCheckChange}
            options={[ { text: 'Text here 1', value: 'Bar1' } ]}
            type="radio"
            />
          <Control
            {...this.state['exampleNativeCheckbox'] && { currentValue: this.state['exampleNativeCheckbox'] }}
            name="exampleNativeCheckbox"
            native
            onChange={this.handleSingleCheckChange}
            options={[ { text: 'Text here 1', value: 'Bar1' } ]}
            type="checkbox"
            />
        </Example>
        <h3>Attributes</h3>
        <p>These need splitting and explaining better</p>
        <Example noPreview>
          <Control
            checked
            controlClassName="additional-control-class"
            disabled
            name="exampleCheck"
            onBlur={this.handleSingleCheckChange}
            onChange={this.handleSingleCheckChange}
            required
            type="radio"
            value={this.state['exampleCheck'] || ''}
          />
        </Example>
      </div>
    )
  }
}

export default ControlCheckPage
