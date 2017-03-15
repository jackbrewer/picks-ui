import React from 'react'

import Code from '../component/code/Code'
import Blockquote from '../component/blockquote/Blockquote'

const BlockquotePage = () => (
  <div className="prose">
    <h1>Blockquote</h1>
    <Code>
      <Blockquote
        quote="Example Quote"
      />
    </Code>
    <Code>
      <Blockquote
        quote="Example Quote"
        citation="FirstName Lastname"
      />
    </Code>
    <Code>
      <Blockquote
        citation="FirstName Lastname"
        citationUrl="http://example.com"
        >
        <p>Fusce dapibus, <em>tellus ac cursus</em></p>
      </Blockquote>
    </Code>
  </div>
)

export default BlockquotePage
