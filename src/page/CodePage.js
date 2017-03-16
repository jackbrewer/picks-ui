import React from 'react'

import Example from '../component/example/Example'
import Code from '../component/code/Code'

const IndexPage = () => {
  return (
    <div className="prose">
      <h1>Code</h1>
      <Example>
        <Code>{'<p>Hello</p>'}</Code>
      </Example>
    </div>
  )
}

export default IndexPage
