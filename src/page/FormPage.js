import React from 'react'
import Helmet from 'react-helmet'

import Example from '../component/example/Example'
import Table from '../component/table/Table'
import Form from '../component/form/Form'
import Field from '../component/field/Field'

class FormPage extends React.Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e, data) {
    e.preventDefault()
    alert('Form submitted: ' + JSON.stringify(data, null, 2)) // eslint-disable-line no-undef
  }

  render () {
    return (
      <div className="prose">
        <Helmet title="Form" />
        <h1>Form</h1>
        <p>Forms can be constructed manually using any combination of Field or Control components. This optional Form component provides a simple wrapper which handles state for all Fields as well as supplying an onSubmit prop to access submitted data. Example forms on this page use onSubmit to alert the submitted data for example purposes. This Form component also provides a default Submit button.</p>
        <Example toggleSource>
          <Form
            method="get"
            onSubmit={this.handleSubmit}
            >
            <Field label="Username" type="text" name="username" required />
            <Field label="Password" type="password" name="password" required />
            <Field type="checkbox" name="remember" options={[ { text: 'Remember me', value: 'yes' } ]} />
          </Form>
        </Example>
        <Table stickyHeader columns={[ 'Prop', 'Type', 'Description' ]}
          data={[
            [ 'action', 'String', 'Sets the form’s action attribute. Defaults to action="" (same page)' ],
            [ 'children', 'String', 'Usually a collection of fields (required)' ],
            [ 'className', 'String', 'Adds a custom class or classes' ],
            [ 'method', 'get/post', 'Sets the from’s submit method attribute. Dfaults to post' ],
            [ 'onSubmit', 'Function', 'Callback triggered when the form is submitted. Returns the event and state data as parameters' ],
            [ 'submitText', 'String', 'Sets the text of the submit button. Defaults to “Submit”' ]
          ]}
        />
        <h2>Examples</h2>
        <Example>
          <Form
            method="get"
            onSubmit={this.handleSubmit}
            submitText="Search"
            >
            <Field
              label="Search"
              type="search"
              name="query"
              required
              value="Example Search"
            />
          </Form>
        </Example>
        <Example>
          <Form
            method="get"
            onSubmit={this.handleSubmit}
            >
            <Field
              type="radio"
              name="radioGroup"
              value="blue"
              options={[
                { text: 'Red', value: 'red' },
                { text: 'Yellow', value: 'green' },
                { text: 'Blue', value: 'blue' } ]}
              />
            <Field
              type="checkbox"
              name="checkboxGroup"
              value={[ 'green' ]}
              options={[
                { text: 'Orange', value: 'orange' },
                { text: 'Green', value: 'green' },
                { text: 'Purple', value: 'purple' } ]}
              />
          </Form>
        </Example>
        <Example>
          <Form
            method="get"
            onSubmit={this.handleSubmit}
            >
            <Field
              type="checkbox"
              name="checkboxGroup2"
              options={[
                { text: 'Orange', value: 'orange' }
              ]}
            />
            <Field
              type="checkbox"
              name="checkboxGroup3"
              options={[
                { text: 'Green', value: 'green' }
              ]}
            />
            <Field
              type="checkbox"
              name="checkboxGroup4"
              options={[
                { text: 'Purple', value: 'purple' }
              ]}
            />
          </Form>
        </Example>
      </div>
    )
  }
}

export default FormPage
