import React from 'react'

import Example from '../component/example/Example'
import Note from '../component/note/Note'

const NotePage = () => (
  <div className="prose">
    <h1>Note</h1>
    <Example>
      <Note
        heading="Example Title"
        text="Donec id elit non mi porta gravida at eget metus."
        className="optional-class"
      />
    </Example>
    <Example>
      <Note>
        <p>Example with <a href="#">Link</a></p>
        <ul>
          <li>children passed via props</li>
        </ul>
      </Note>
    </Example>
    <Example>
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
    </Example>
  </div>
)

export default NotePage
