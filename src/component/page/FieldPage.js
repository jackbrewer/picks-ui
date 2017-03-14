import React from 'react'

import Code from '../code/Code'

import StandardField from '../field/StandardField'
import BooleanField from '../field/BooleanField'

class FieldPage extends React.Component {
  constructor () {
    super()
    this.state = {
      exampleField: '',
      erroredField: 'example'
    }
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleBooleanChange = this.handleBooleanChange.bind(this)
    this.handleChoiceChange = this.handleChoiceChange.bind(this)
  }

  handleValueChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleBooleanChange (e) {
    this.setState({ [e.target.name]: e.target.checked })
  }

  handleChoiceChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <div className="prose">
        <h1>Field</h1>
        <h2>Standard Layout</h2>
        <Code>
          <StandardField
            name="exampleField"
            label="Example Label"
            assistance="Additional text to provide assistance"
            fieldClassName="additional-field-class"
            onChange={this.handleValueChange}
            value={this.state['exampleField']}
            placeholder="Placeholder Text"
            />
        </Code>
        <Code>
          <StandardField
            type="email"
            name="erroredField"
            label="Example Label"
            assistance="Additional text to provide assistance"
            fieldClassName="additional-field-class"
            onChange={this.handleValueChange}
            value={this.state['erroredField']}
            error={'Forced error message'}
            />
        </Code>
        <h2>Boolean Layout</h2>
        <Code>
          <BooleanField
            name="exampleBoolean"
            label="Example Label"
            assistance="Additional text to provide assistance"
            fieldClassName="additional-field-class"
            onChange={this.handleBooleanChange}
            value="Example"
            checked={this.state['exampleBoolean']}
            />
        </Code>
        <Code>
          <p><em>Work in progress</em></p>
          <BooleanField
            name="exampleMultiBoolean"
            label="Example Multi Label"
            assistance="Additional text to provide assistance"
            fieldClassName="additional-field-class"
            onChange={this.handleBooleanChange}
            value="Example"
            checked={this.state['exampleBoolean']}
            />
        </Code>
      </div>
    )
  }
}

export default FieldPage
