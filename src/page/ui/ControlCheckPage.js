import React from 'react'
import Helmet from 'react-helmet'

import Example from '../../component/example/Example'
import Control from '../../component/control/Control'
import Note from '../../component/note/Note'

class ControlCheckPage extends React.Component {
  constructor () {
    super()
    this.state = {
      exampleCheckboxGroup: [ 'Foo3' ],
      exampleCheckboxGroup2: [],
      exampleRadioGroup: 'Bar2'
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputValue = this.handleInputValue.bind(this)
    this.handleArrayValue = this.handleArrayValue.bind(this)
  }

  handleInputChange (e) {
    const value = this.handleInputValue(e.target)
    this.setState({ [e.target.name]: value })
  }

  handleInputValue (target) {
    const { name, type, value } = target
    if (type !== 'checkbox') return value
    if (Array.isArray(this.state[name])) return this.handleArrayValue(name, value)
    if (!target.checked) return ''
    return value
  }

  handleArrayValue (name, value) {
    const valueArr = [ ...(this.state[name]) ]
    valueArr.includes(value)
      ? valueArr.splice(valueArr.indexOf(value), 1)
      : valueArr.push(value)
    return valueArr.sort()
  }

  render () {
    return (
      <div className="prose">
        <Helmet title="Check Control" />
        <h1>Check Control</h1>

        <Example>
          <Control
            value={this.state.exampleCheckboxSingle}
            type="checkbox"
            name="exampleCheckboxSingle"
            onChange={this.handleInputChange}
            options={[
              { text: 'Text here 1', value: 'Foo1' }
            ]}
          />
        </Example>
        <Note level="notice"
          heading="Working with multiple checkboxes"
          text="The Check control defaults to returning a single string value. If you need multiple checkbox support, set the Control’s value to an array."
          />
        <Example>
          <Control
            value={this.state['exampleCheckboxGroup']}
            type="checkbox"
            name="exampleCheckboxGroup"
            onChange={this.handleInputChange}
            options={[
              { text: 'Text here 1', value: 'Foo1' },
              { text: 'Text here 2', value: 'Foo2' },
              { text: 'Text here 3', value: 'Foo3' },
              { text: 'Text here 4', value: 'Foo4' }
            ]}
          />
          <Control
            value={this.state['exampleCheckboxGroup2']}
            type="checkbox"
            name="exampleCheckboxGroup2"
            onChange={this.handleInputChange}
            options={[
              { text: 'Text here 1', value: 'Foo1' },
              { text: 'Text here 2', value: 'Foo2' },
              { text: 'Text here 3', value: 'Foo3' },
              { text: 'Text here 4', value: 'Foo4' }
            ]}
          />
        </Example>
        <Example>
          <Control
            value={this.state['exampleRadioGroup']}
            name="exampleRadioGroup"
            onChange={this.handleInputChange}
            options={[
              { text: 'Text here 1', value: 'Bar1' },
              { text: 'Text here 2', value: 'Bar2' },
              { text: 'Text here 3', value: 'Bar3' },
              { text: 'Text here 4', value: 'Bar4' }
            ]}
            type="radio"
            />
        </Example>
        <Example>
          <Control
            value={this.state['exampleNativeRadio']}
            onChange={this.handleInputChange}
            name="exampleNativeRadio"
            native
            options={[ { text: 'Text here 1', value: 'Bar1' } ]}
            type="radio"
            />
          <Control
            value={this.state['exampleNativeCheckbox']}
            name="exampleNativeCheckbox"
            native
            onChange={this.handleInputChange}
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
            onBlur={this.handleInputChange}
            onChange={this.handleInputChange}
            required
            type="radio"
            value=""
          />
        </Example>
      </div>
    )
  }
}

export default ControlCheckPage
