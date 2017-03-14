import React from 'react'
import Code from '../code/Code'
import Icon from '../icon/Icon'
import PickSvg from '../svg/Pick'

const ResponsiveMediaPage = () => (
  <div className="prose">
    <h1>Icon</h1>
    <p>Icons require a child element, usually an SVG.</p>
    <Code previewWidth="auto">
      <Icon>
        <PickSvg />
      </Icon>
      <Icon
        a11yText="Helpful accessibility text"
        className="optional-class"
        width={30}
        >
        <PickSvg />
      </Icon>
    </Code>
  </div>
)

export default ResponsiveMediaPage
