import React from 'react'
import Helmet from 'react-helmet'

import Example from '../component/example/Example'
import Control from '../component/control/Control'

class ControlSelectPage extends React.Component {
  constructor () {
    super()
    this.state = { exampleNativeSelect: 2 }
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleSelectChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <div className="prose">
        <Helmet title="Select Control" />
        <h1>Select Control</h1>
        <Example>
          <Control
            value={this.state.exampleSelect || ''}
            name="exampleSelect"
            onChange={this.handleSelectChange}
            options={[ { text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 } ]}
            type="select"
          />
        </Example>
        <Example>
          <Control
            value={this.state.exampleNativeSelect || ''}
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
