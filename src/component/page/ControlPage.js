import React from 'react'

import Code from '../code/Code'

import BooleanControl from '../control/BooleanControl'
import ChoiceControl from '../control/ChoiceControl'
import MultilineControl from '../control/MultilineControl'
import TextControl from '../control/TextControl'

class ControlPage extends React.Component {
  constructor () {
    super()
    this.state = { exampleChoice: '2' }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleBooleanChange = this.handleBooleanChange.bind(this)
    this.handleChoiceChange = this.handleChoiceChange.bind(this)
  }

  handleTextChange (e) {
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
        <h1>Control</h1>
        <p>Controls are basic inputs and will rarely be used directly. You’ll likely use fields which will pull in the desired control type.</p>
        <h2>Text Control</h2>
        <Code>
          <TextControl name="exampleName" onChange={this.handleTextChange} value={this.state['exampleName']} />
        </Code>
        <h3>Attributes</h3>
        <p>These need splitting and explaining better</p>
        <Code noPreview>
          <TextControl
            type="password"
            name="exampleFull"
            controlClassName="additional-control-class"
            autoFocus
            disabled
            maxLength={20}
            required
            onChange={this.handleTextChange}
            onBlur={this.handleTextChange}
            value={this.state['exampleFull']}
            placeholder="Placeholder Text"
          />
        </Code>
        <h2>Boolean Control</h2>
        <Code>
          <BooleanControl name="exampleCheckbox" onChange={this.handleBooleanChange} value="foo" checked={this.state['exampleCheckbox']} />
        </Code>
        <Code>
          <BooleanControl name="exampleRadio" type="radio" onChange={this.handleBooleanChange} value="bar" checked={this.state['exampleRadio']} />
        </Code>
        <h3>Attributes</h3>
        <p>These need splitting and explaining better</p>
        <Code noPreview>
          <BooleanControl
            type="radio"
            name="exampleBoolean"
            controlClassName="additional-control-class"
            disabled
            required
            onChange={this.handleBooleanChange}
            onBlur={this.handleBooleanChange}
            value={this.state['exampleBoolean']}
            checked
          />
        </Code>
        <h2>Multiline Control</h2>
        <Code>
          <MultilineControl
            name="exampleMultiline"
            onChange={this.handleTextChange}
            value={this.state['exampleMultiline']}
          />
        </Code>
        <h2>Choice Control</h2>
        <Code>
          <ChoiceControl
            name="exampleChoice"
            value={this.state.exampleChoice}
            options={[ { text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 } ]}
            onChange={this.handleChoiceChange}
          />
        </Code>
      </div>
    )
  }
}

export default ControlPage
