import React from 'react'

import Page from '../../layout/page/Page'
import Example from '../../component/example/Example'
import Table from '../../component/table/Table'
import Control from '../../component/control/Control'

class ControlPage extends React.Component {
  constructor () {
    super()
    this.state = {
      exampleName: '',
      exampleSelect: '',
      controlDate: '',
      exampleCheckboxSingle: ''
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
      <Page name="Control">
        <p>Controls are basic inputs and will rarely be used directly. You’ll likely use fields which will pull in the desired control type.</p>
        <Example toggleSource>
          <Control
            type="text"
            name="exampleName"
            onChange={this.handleInputChange}
            value={this.state['exampleName']}
          />
          <Control
            value={this.state.exampleSelect}
            name="exampleSelect"
            onChange={this.handleSelectChange}
            options={[ { text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 } ]}
            type="select"
          />
          <Control
            name="controlDate"
            type="date"
            onChange={this.handleInputChange}
            value={this.state['controlDate']}
          />
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
        <h3>Props</h3>
        <Table stickyHeader columns={[ 'Prop', 'Type', 'Description' ]}
          data={[
            [ 'className', 'String', 'Adds a custom class or classes. Embellished by control type' ],
            [ 'error', 'String', 'Adds a class to the control if passed' ],
            [ 'name (required)', 'String', 'Adds the name attribute, which is submitted with the form data' ],
            [ 'onBlur, onChange, onFocus', 'Function', 'Event triggered callbacks' ],
            [ 'options', 'Array', 'An array of “text” and “value” objects, required by Select or Choice controls' ],
            [ 'type (required)', 'String', 'Specifies the type of input required. May be one of checkbox, radio, select, textarea, hidden, or any of the standard text input types such as text, password, email, date.' ],
            [ 'value', 'String', 'The initial value of the control. Use a state variable to manage as a controlled input' ]
          ]}
        />
        <p>Additional valid attributes can be added and will be passed directly to the control, e.g. disabled, id, onBlur, onChange, onFocus, placeholder, required</p>
      </Page>
    )
  }
}

export default ControlPage
