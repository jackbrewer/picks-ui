import React from 'react'
import Helmet from 'react-helmet'

import Example from '../../component/example/Example'
import Code from '../../component/code/Code'

const IndexPage = () => {
  return (
    <div className="prose">
      <Helmet title="Code" />
      <h1>Code</h1>
      <Example>
        <Code>{'<p>Hello</p>'}</Code>
      </Example>
    </div>
  )
}

export default IndexPage
