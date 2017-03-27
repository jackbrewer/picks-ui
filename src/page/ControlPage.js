import React from 'react'
import Helmet from 'react-helmet'

import PageMeta from '../layout/page-meta/PageMeta'
import Example from '../component/example/Example'
import Table from '../component/table/Table'
import Control from '../component/control/Control'

class ControlPage extends React.Component {
  constructor () {
    super()
    this.state = {
      exampleName: '',
      controlText: 'abcd',
      controlNumber: '1234',
      controlPassword: 'abcd'
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <div className="prose">
        <Helmet title="Control" />
        <h1>Control</h1>
        <PageMeta name="Control" />
        <p>Controls are basic inputs and will rarely be used directly. You’ll likely use fields which will pull in the desired control type.</p>
        <h2>Text Control</h2>
        <Example>
          <Control
            type="text"
            name="exampleName"
            onChange={this.handleInputChange}
            value={this.state['exampleName']}
          />
        </Example>
        <h3>Attributes</h3>
        <Table stickyHeader columns={[ 'Prop', 'Type', 'Description' ]}
          data={[
            [ 'className', 'String', 'Adds a custom class or classes' ],
            [ 'disabled', 'Boolean', 'Disables User interaction' ],
            [ 'error', 'String', 'Adds a class to the control if passed' ],
            [ 'id', 'String', 'Allows a label to target the control using a matching `for` attribute.' ],
            [ 'name (required)', 'String', 'Adds the name attribute, which is submitted with the form data' ],
            [ 'onBlur', 'Function', 'Callback triggered when the control is blurred' ],
            [ 'onChange', 'Function', 'Callback triggered when the control is changed' ],
            [ 'onFocus', 'Function', 'Callback triggered when the control is focussed' ],
            [ 'placeholder', 'String', 'Adds a `placeholder` attribute.' ],
            [ 'required', 'Boolean', 'Adds a `required` attribute.' ],
            [ 'type (required)', 'String', 'Specifies the type of input required. May be one of checkbox, radio, select, textarea, hidden, or any of the standard text input types such as text, password, email, date.' ],
            [ 'value', 'String', 'The initial value of the control. Use a state variable to manage as a controlled input' ],
            [ 'additional', 'Object', 'Pass additional attributes directly to the input, e.g. { maxLength: 30, autoFocus: true }' ]
          ]}
        />
      </div>
    )
  }
}

export default ControlPage
