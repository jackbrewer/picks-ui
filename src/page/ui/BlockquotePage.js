import React from 'react'
import Helmet from 'react-helmet'

import Example from '../../component/example/Example'
import Blockquote from '../../component/blockquote/Blockquote'

const BlockquotePage = () => (
  <div className="prose">
    <Helmet title="Blockquote" />
    <h1>Blockquote</h1>
    <Example>
      <Blockquote
        quote="Example Quote"
      />
    </Example>
    <Example>
      <Blockquote
        quote="Example Quote"
        citation="FirstName Lastname"
      />
    </Example>
    <Example>
      <Blockquote
        citation="FirstName Lastname"
        citationUrl="http://example.com"
        >
        <p>Fusce dapibus, <em>tellus ac cursus</em></p>
      </Blockquote>
    </Example>
  </div>
)

export default BlockquotePage
