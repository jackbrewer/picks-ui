import React from 'react'

import Code from '../code/Code'

import Card from '../card/Card'

const IndexPage = () => {
  const previewWidth = 'desktop-one-half'
  return (
    <div className="prose">
      <h1>Card</h1>
      <Code previewWidth={previewWidth}>
        <Card
          heading="Simple"
          text="Fusce dapibus, tellus ac cursus commodo, tortor mauris."
        />
      </Code>
      <Code previewWidth={previewWidth}>
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
      </Code>
      <Code previewWidth={previewWidth}>
        <Card>
          <ul>
            <li>Custom content</li>
            <li>Passed as children</li>
          </ul>
        </Card>
      </Code>
      <Code previewWidth={previewWidth}>
        <Card
          heading="You can"
          imgSrc="http://img.clock.co.uk/800x450"
          >
          <p>Mix <strong>prop</strong> content with <em>children</em> content.</p>
        </Card>
      </Code>
    </div>
  )
}

export default IndexPage
