import React from 'react'
import Helmet from 'react-helmet'

import Example from '../component/example/Example'
import Field from '../component/field/Field'
import Control from '../component/control/Control'

class FieldPage extends React.Component {
  constructor () {
    super()
    this.state = {
      exampleField: '',
      erroredField: 'example'
    }
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.handleChoiceChange = this.handleChoiceChange.bind(this)
  }

  handleValueChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChoiceChange (e) {
    this.setState({ [e.target.name]: e.target.value })
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
            controlName="exampleField"
            required
            >
            <Control type="text" name="exampleField" />
          </Field>
          <Field
            label="Example Label"
            controlName="exampleSelect"
            >
            <Control type="select" name="exampleSelect" options={[
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
            ]} />
          </Field>
          <Field
            error="Example Error"
            label="Example Label"
            controlName="erroredField"
            >
            <Control type="text" name="erroredField" error="Example Error" />
          </Field>
        </Example>

        <h2>Boolean Layout</h2>
        <Example>
          <Field
            layout="check"
            assistance="Additional text to provide assistance"
            className="additional-field-class"
            label="Example Label"
            controlName="exampleCheckbox"
            >
            <Control type="checkbox" name="exampleCheckbox" options={[ { text: 'Text here', value: 'Foo' } ]} />
          </Field>
          <Field
            layout="check"
            label="Example Label"
            controlName="exampleCheckboxError"
            error="Example Error"
            >
            <Control type="checkbox" name="exampleCheckboxError" error="Example Error" options={[ { text: 'Text here', value: 'Foo' } ]} />
          </Field>
        </Example>

        <Example>
          <Field
            layout="check"
            assistance="Additional text to provide assistance"
            className="additional-field-class"
            label="Example Multi Label"
            controlName="exampleRadio"
            >
            <Control
              type="checkbox"
              name="exampleRadio"
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
          </Field>
        </Example>
      </div>
    )
  }
}

export default FieldPage
