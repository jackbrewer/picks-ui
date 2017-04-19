import React from 'react'
import Helmet from 'react-helmet'

import Example from '../../component/example/Example'
import Control from '../../component/control/Control'

class ControlPage extends React.Component {
  render () {
    return (
      <div className="prose">
        <Helmet title="File Control" />
        <h1>File Control</h1>
        <p>Uncontrolled input as it is not possible to set a value on a file input.</p>
        <Example>
          <Control
            name="controlFile"
            type="file"
            multiple
            />
        </Example>
        <Example>
          <Control
            name="controlNativeFile"
            native
            type="file"
            />
        </Example>
      </div>
    )
  }
}

export default ControlPage
