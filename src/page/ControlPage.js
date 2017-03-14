import React from 'react'

import Code from '../component/code/Code'
import BooleanControl from '../component/control/BooleanControl'
import ChoiceControl from '../component/control/ChoiceControl'
import MultilineControl from '../component/control/MultilineControl'
import TextControl from '../component/control/TextControl'

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
            autoFocus
            controlClassName="additional-control-class"
            disabled
            maxLength={20}
            name="exampleFull"
            onBlur={this.handleTextChange}
            onChange={this.handleTextChange}
            placeholder="Placeholder Text"
            required
            type="password"
            value={this.state['exampleFull']}
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
            checked
            controlClassName="additional-control-class"
            disabled
            name="exampleBoolean"
            onBlur={this.handleBooleanChange}
            onChange={this.handleBooleanChange}
            required
            type="radio"
            value={this.state['exampleBoolean']}
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
            onChange={this.handleChoiceChange}
            options={[ { text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 } ]}
            value={this.state.exampleChoice}
          />
        </Code>
      </div>
    )
  }
}

export default ControlPage
