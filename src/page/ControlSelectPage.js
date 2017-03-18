import React from 'react'

import Example from '../component/example/Example'
import Control from '../component/control/Control'

class ControlSelectPage extends React.Component {
  constructor () {
    super()
    this.state = {}
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleSelectChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const filterProps = [ 'onChange' ]
    return (
      <div className="prose">
        <h1>Select Control</h1>
        <Example filterProps={filterProps}>
          <Control
            currentValue={this.state.exampleSelect || ''}
            name="exampleSelect"
            onChange={this.handleSelectChange}
            options={[ { text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 } ]}
            type="select"
          />
        </Example>
        <Example filterProps={filterProps}>
          <Control
            currentValue={this.state.exampleSelect || ''}
            name="exampleNativeSelect"
            native
            onChange={this.handleSelectChange}
            options={[ { text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 } ]}
            type="select"
          />
        </Example>
      </div>
    )
  }
}

export default ControlSelectPage