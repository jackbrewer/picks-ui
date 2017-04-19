import React from 'react'
import Helmet from 'react-helmet'

import Example from '../../component/example/Example'
import Icon from '../../component/icon/Icon'
import PickSvg from '../../component/svg/Pick'

const IconPage = () => (
  <div className="prose">
    <Helmet title="Icon" />
    <h1>Icon</h1>
    <p>Icons require a child element, usually an SVG.</p>
    <Example previewWidth="auto">
      <Icon>
        <PickSvg />
      </Icon>
      <Icon
        a11yText="Helpful accessibility text"
        className="optional-class"
        width={30}
        height={36}
        >
        <PickSvg />
      </Icon>
    </Example>
  </div>
)

export default IconPage
