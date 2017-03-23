import React from 'react'
import Helmet from 'react-helmet'

import Example from '../component/example/Example'
import Field from '../component/field/Field'

class FieldPage extends React.Component {
  constructor () {
    super()
    this.state = {
      exampleRadioGroup: 'Bar2',
      exampleCheckboxGroup: [ 'Bar3' ]
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox'
      ? this.handleCheckboxChange(name, target.value)
      : target.value
    this.setState({ [name]: value })
  }

  handleCheckboxChange (name, value) {
    const valueArr = [ ...(this.state[name] || []) ]
    valueArr.includes(value)
      ? valueArr.splice(valueArr.indexOf(value), 1)
      : valueArr.push(value)
    return valueArr.sort()
  }

  render () {
    return (
      <div className="prose">
        <Helmet title="Field" />
        <h1>Field</h1>
        <h2>Standard Layout</h2>
        <Example>
          <Field
            assistance="Additional text to provide assistance"
            className="additional-field-class"
            label="Example Label"
            required
            type="text"
            name="exampleField"
            onChange={this.handleInputChange}
            value={this.state.exampleField}
          />
          <Field
            label="Example Label"
            type="select"
            name="exampleSelect"
            onChange={this.handleInputChange}
            value={this.state.exampleSelect}
            options={[
              {
                text: 'One',
                value: 1
              },
              {
                text: 'Two',
                value: 2
              },
              {
                text: 'Three',
                value: 3
              }
            ]}
          />
          <Field
            error="Example Error"
            label="Example Label"
            type="text"
            name="erroredField"
            onChange={this.handleInputChange}
            value={this.state.erroredField}
          />
        </Example>

        <h2>Boolean Layout</h2>
        <Example>
          <Field
            assistance="Additional text to provide assistance"
            className="additional-field-class"
            label="Example Label"
            type="checkbox"
            name="exampleCheckbox"
            options={[ { text: 'Text here', value: 'Foo' } ]}
            onChange={this.handleInputChange}
            value={this.state.exampleCheckbox}
          />
          <Field
            label="Example Label"
            error="Example Error"
            type="checkbox"
            name="exampleCheckboxError"
            onChange={this.handleInputChange}
            options={[ { text: 'Text here', value: 'Foo' } ]}
            value={this.state.exampleCheckboxError}
          />
        </Example>

        <Example>
          <Field
            assistance="Additional text to provide assistance"
            className="additional-field-class"
            label="Example Multi Label"
            onChange={this.handleInputChange}
            value={this.state.exampleRadioGroup}
            name="exampleRadioGroup"
            type="radio"
            options={[
              { text: 'Text here 1', value: 'Bar1' },
              { text: 'Text here 2', value: 'Bar2' },
              { text: 'Text here 3', value: 'Bar3' },
              { text: 'Text here 4', value: 'Bar4' }
            ]}
          />
          <Field
            assistance="Additional text to provide assistance"
            className="additional-field-class"
            label="Example Multi Label"
            onChange={this.handleInputChange}
            value={this.state.exampleCheckboxGroup}
            name="exampleCheckboxGroup"
            type="checkbox"
            options={[
              { text: 'Text here 1', value: 'Bar1' },
              { text: 'Text here 2', value: 'Bar2' },
              { text: 'Text here 3', value: 'Bar3' },
              { text: 'Text here 4', value: 'Bar4' }
            ]}
          />
        </Example>
      </div>
    )
  }
}

export default FieldPage
