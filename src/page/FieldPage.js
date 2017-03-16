import React from 'react'

import Example from '../component/example/Example'
import StandardField from '../component/field/StandardField'
import BooleanField from '../component/field/BooleanField'

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
        <Example>
          <StandardField
            assistance="Additional text to provide assistance"
            fieldClassName="additional-field-class"
            label="Example Label"
            name="exampleField"
            onChange={this.handleValueChange}
            placeholder="Placeholder Text"
            value={this.state['exampleField']}
            />
        </Example>
        <Example>
          <StandardField
            assistance="Additional text to provide assistance"
            error={'Forced error message'}
            fieldClassName="additional-field-class"
            label="Example Label"
            name="erroredField"
            onChange={this.handleValueChange}
            type="email"
            value={this.state['erroredField']}
            />
        </Example>
        <h2>Boolean Layout</h2>
        <Example>
          <BooleanField
            assistance="Additional text to provide assistance"
            checked={this.state['exampleBoolean']}
            fieldClassName="additional-field-class"
            label="Example Label"
            name="exampleBoolean"
            onChange={this.handleBooleanChange}
            value="Example"
            />
        </Example>
        <Example>
          <p><em>Work in progress</em></p>
          <BooleanField
            assistance="Additional text to provide assistance"
            checked={this.state['exampleBoolean']}
            fieldClassName="additional-field-class"
            label="Example Multi Label"
            name="exampleMultiBoolean"
            onChange={this.handleBooleanChange}
            value="Example"
            />
        </Example>
      </div>
    )
  }
}

export default FieldPage
