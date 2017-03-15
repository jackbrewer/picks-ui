import React from 'react'

import Code from '../component/code/Code'
import Note from '../component/note/Note'

const NotePage = () => (
  <div className="prose">
    <h1>Note</h1>
    <Code>
      <Note
        heading="Example Title"
        text="Donec id elit non mi porta gravida at eget metus."
        className="optional-class"
      />
    </Code>
    <Code>
      <Note>
        <p>Example with <a href="#">Link</a></p>
        <ul>
          <li>children passed via props</li>
        </ul>
      </Note>
    </Code>
    <Code>
      <Note
        state="notice"
        >
        Donec id elit non mi <a href="#">porta gravida</a> at eget metus.
      </Note>
      <Note
        state="warning"
        >
        Donec id elit non mi <a href="#">porta gravida</a> at eget metus.
      </Note>
      <Note
        state="error"
        >
        Donec id elit non mi <a href="#">porta gravida</a> at eget metus.
      </Note>
      <Note
        state="success"
        >
        Donec id elit non mi <a href="#">porta gravida</a> at eget metus.
      </Note>
    </Code>
  </div>
)

export default NotePage
