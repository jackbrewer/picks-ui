import React from 'react'
import Helmet from 'react-helmet'

import Example from '../component/example/Example'
import Field from '../component/field/Field'

class FieldPage extends React.Component {
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
            value=""
          />
          <Field
            label="Example Label"
            type="select"
            name="exampleSelect"
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
            value=""
          />
          <Field
            error="Example Error"
            label="Example Label"
            type="text"
            name="erroredField"
            value=""
          />
        </Example>

        <h2>Boolean Layout</h2>
        <Example>
          <Field
            layout="check"
            assistance="Additional text to provide assistance"
            className="additional-field-class"
            label="Example Label"
            type="checkbox"
            name="exampleCheckbox"
            options={[ { text: 'Text here', value: 'Foo' } ]}
          />
          <Field
            layout="check"
            label="Example Label"
            error="Example Error"
            type="checkbox"
            name="exampleCheckboxError"
            options={[ { text: 'Text here', value: 'Foo' } ]}
          />
        </Example>

        <Example>
          <Field
            layout="check"
            assistance="Additional text to provide assistance"
            className="additional-field-class"
            label="Example Multi Label"

            value="Bar2"
            name="exampleRadioGroup"
            options={[
              { text: 'Text here 1', value: 'Bar1' },
              { text: 'Text here 2', value: 'Bar2' },
              { text: 'Text here 3', value: 'Bar3' },
              { text: 'Text here 4', value: 'Bar4' }
            ]}
            type="radio"
          />
          <Field
            layout="check"
            assistance="Additional text to provide assistance"
            className="additional-field-class"
            label="Example Multi Label"

            value={[ 'Bar3' ]}
            name="exampleCheckboxGroup"
            options={[
              { text: 'Text here 1', value: 'Bar1' },
              { text: 'Text here 2', value: 'Bar2' },
              { text: 'Text here 3', value: 'Bar3' },
              { text: 'Text here 4', value: 'Bar4' }
            ]}
            type="checkbox"
          />
        </Example>
      </div>
    )
  }
}

export default FieldPage
