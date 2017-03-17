import React from 'react'

import Example from '../component/example/Example'
import Control from '../component/control/Control'

class ControlPage extends React.Component {
  constructor () {
    super()
    this.state = { exampleCheckbox: [] }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.handleMultiCheckChange = this.handleMultiCheckChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleTextChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleMultiCheckChange (e) {
    const name = e.target.name
    const val = [ ...this.state[e.target.name] ]
    const newVal = e.target.value
    const index = val.indexOf(newVal)
    if (val.indexOf(newVal) !== -1) {
      val.splice(index, 1)
    } else {
      val.push(e.target.value)
    }
    this.setState({ [name]: val })
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
          <Control
            type="checkbox"
            name="exampleCheckbox"
            onChange={this.handleMultiCheckChange}
            options={[
              { text: 'Text here 1', value: 'Foo1', ...(this.state['exampleCheckbox'].indexOf('Foo1') !== -1) && { checked: true } },
              { text: 'Text here 2', value: 'Foo2', ...(this.state['exampleCheckbox'].indexOf('Foo2') !== -1) && { checked: true } },
              { text: 'Text here 3', value: 'Foo3', ...(this.state['exampleCheckbox'].indexOf('Foo3') !== -1) && { checked: true } },
              { text: 'Text here 4', value: 'Foo4', ...(this.state['exampleCheckbox'].indexOf('Foo4') !== -1) && { checked: true } }
            ]}
          />
        </Example>
        <Example filterProps={filterProps}>
          <Control
            type="radio"
            name="exampleRadio"
            onChange={this.handleCheckChange}
            options={[
              { text: 'Text here 1', value: 'Bar1', ...(this.state['exampleRadio'] === 'Bar1') && { checked: true } },
              { text: 'Text here 2', value: 'Bar2', ...(this.state['exampleRadio'] === 'Bar2') && { checked: true } },
              { text: 'Text here 3', value: 'Bar3', ...(this.state['exampleRadio'] === 'Bar3') && { checked: true } },
              { text: 'Text here 4', value: 'Bar4', ...(this.state['exampleRadio'] === 'Bar4') && { checked: true } }
            ]}
            />
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
          <Control type="checkbox" options={[ { text: 'Text here', value: 'Foo' } ]} name="controlCheckbox" onChange={this.handleCheckChange} checked={this.state['controlCheckbox'] || false} />
          <Control type="radio" options={[ { text: 'Text here', value: 'Foo' } ]} name="controlRadio" onChange={this.handleCheckChange} checked={this.state['controlRadio'] || false} />
          <Control type="checkbox" options={[ { text: 'Text here', value: 'Foo' } ]} native name="controlNativeCheckbox" onChange={this.handleCheckChange} checked={this.state['controlNativeCheckbox'] || false} />
          <Control type="radio" options={[ { text: 'Text here', value: 'Foo' } ]} native name="controlNativeRadio" onChange={this.handleCheckChange} checked={this.state['controlNativeRadio'] || false} />
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
