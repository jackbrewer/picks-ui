import React from 'react'
import Helmet from 'react-helmet'

import Example from '../component/example/Example'
import Card from '../component/card/Card'

const IndexPage = () => {
  const previewWidth = 'desktop-one-half'
  return (
    <div className="prose">
      <Helmet title="Card" />
      <h1>Card</h1>
      <Example previewWidth={previewWidth}>
        <Card
          heading="Simple"
          text="Fusce dapibus, tellus ac cursus commodo, tortor mauris."
        />
      </Example>
      <Example previewWidth={previewWidth}>
        <Card
          actionText="Action"
          actionUrl="http://example.com"
          centered
          className="additional-class"
          heading="Example Heading"
          imgAlt="A placeholder image"
          imgRatio="16:9"
          imgSrc="http://img.clock.co.uk/800x450"
          text="Fusce dapibus, tellus ac cursus commodo, tortor mauris."
        />
      </Example>
      <Example previewWidth={previewWidth} toggleSource>
        <Card>
          <ul>
            <li>Custom content</li>
            <li>Passed as children</li>
          </ul>
        </Card>
      </Example>
      <Example previewWidth={previewWidth} toggleSource>
        <Card
          heading="You can"
          imgSrc="http://img.clock.co.uk/800x450"
          >
          <p>Mix <strong>prop</strong> content with <em>children</em> content.</p>
        </Card>
      </Example>
    </div>
  )
}

export default IndexPage
