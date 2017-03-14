import React from 'react'

import Code from '../component/code/Code'
import Icon from '../component/icon/Icon'
import PickSvg from '../component/svg/Pick'

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
