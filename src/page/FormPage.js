import React from 'react'
import Helmet from 'react-helmet'

import Example from '../component/example/Example'
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
        <h2>Standard Layout</h2>
        <Example>
          <Form
            method="get"
            onSubmit={this.handleSubmit}
            >
            <Field label="Username" type="text" name="username" required />
            <Field label="Password" type="password" name="password" required />
            <Field type="checkbox" name="remember" options={[ { text: 'Remember me', value: 'yes' } ]} />
          </Form>
        </Example>
        <Example>
          <Form
            method="get"
            onSubmit={this.handleSubmit}
            submitButtonText="Search"
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
