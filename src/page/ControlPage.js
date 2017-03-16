import React from 'react'

import Example from '../component/example/Example'
import Control from '../component/control/Control'

class ControlPage extends React.Component {
  constructor () {
    super()
    this.state = {}
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleTextChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckChange (e) {
    this.setState({ [e.target.name]: e.target.checked })
  }

  handleSelectChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const filterProps = [ 'onChange' ]
    return (
      <div className="prose">
        <h1>Control</h1>
        <p>Controls are basic inputs and will rarely be used directly. You’ll likely use fields which will pull in the desired control type.</p>
        <h2>Text Control</h2>
        <Example filterProps={filterProps}>
          <Control type="text" name="exampleName" onChange={this.handleTextChange} value={this.state['exampleName'] || ''} />
        </Example>
        <h3>Attributes</h3>
        <p>These need splitting and explaining better</p>
        <Example noPreview>
          <Control
            controlClassName="additional-control-class"
            disabled
            name="exampleFull"
            onBlur={this.handleTextChange}
            onChange={this.handleTextChange}
            placeholder="Placeholder Text"
            required
            type="password"
            value={this.state['exampleFull'] || ''}
          />
        </Example>
        <h2>Check Control</h2>
        <Example filterProps={filterProps}>
          <label><Control type="checkbox" name="exampleCheckbox" onChange={this.handleCheckChange} value="foo" checked={this.state['exampleCheckbox'] || false} /></label>
        </Example>
        <Example filterProps={filterProps}>
          <label><Control type="radio" name="exampleRadio" onChange={this.handleCheckChange} value="bar" checked={this.state['exampleRadio'] || false} /></label>
        </Example>
        <h3>Attributes</h3>
        <p>These need splitting and explaining better</p>
        <Example noPreview>
          <Control
            checked
            controlClassName="additional-control-class"
            disabled
            name="exampleCheck"
            onBlur={this.handleCheckChange}
            onChange={this.handleCheckChange}
            required
            type="radio"
            value={this.state['exampleCheck'] || ''}
          />
        </Example>
        <h2>Textarea Control</h2>
        <Example filterProps={filterProps}>
          <Control
            type="textarea"
            name="exampleTextarea"
            onChange={this.handleTextChange}
            value={this.state['exampleTextarea'] || ''}
          />
        </Example>
        <h2>Select Control</h2>
        <Example filterProps={filterProps}>
          <Control
            type="select"
            name="exampleSelect"
            onChange={this.handleSelectChange}
            options={[ { text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 } ]}
            value={this.state.exampleSelect || ''}
          />
        </Example>
        <h2>Generic Component Name</h2>
        <Example filterProps={filterProps}>
          <Control type="text" additional={{ size: 2 }} name="controlText" onChange={this.handleTextChange} value={this.state['controlText'] || ''} />
          <label><Control type="checkbox" name="controlCheckbox" onChange={this.handleCheckChange} value="" checked={this.state['controlCheckbox'] || false} /></label>
          <label><Control type="radio" name="controlRadio" onChange={this.handleCheckChange} value="" checked={this.state['controlRadio'] || false} /></label>
          <label><Control type="checkbox" native name="controlNativeCheckbox" onChange={this.handleCheckChange} value="" checked={this.state['controlNativeCheckbox'] || false} /></label>
          <label><Control type="radio" native name="controlNativeRadio" onChange={this.handleCheckChange} value="" checked={this.state['controlNativeRadio'] || false} /></label>
          <Control type="select" name="controlSelect" onChange={this.handleSelectChange} value={this.state['controlSelect'] || ''} options={[ { text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 } ]} />
          <Control type="select" native name="controlNativeSelect" onChange={this.handleSelectChange} value={this.state['controlNativeSelect'] || ''} options={[ { text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 } ]} />
          <Control type="textarea" name="controlTextarea" onChange={this.handleTextChange} value={this.state['controlTextarea'] || ''} />
          <Control type="date" name="controlDate" onChange={this.handleTextChange} value={this.state['controlDate'] || ''} />
          <Control type="number" name="controlNumber" onChange={this.handleTextChange} value={this.state['controlNumber'] || ''} />
          <Control type="file" name="controlFile" onChange={this.handleTextChange} value={this.state['controlFile'] || ''} />
        </Example>
      </div>
    )
  }
}

export default ControlPage
