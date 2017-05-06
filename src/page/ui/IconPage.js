import React from 'react'
import Helmet from 'react-helmet'

import Example from '../../component/example/Example'
import Icon from '../../component/icon/Icon'

const IconPage = () => (
  <div className="prose">
    <Helmet title="Icon" />
    <h1>Icon</h1>
    <p>Icons require a child element, usually an SVG.</p>
    <Example previewWidth="auto">
      <Icon type="pick" />
      <Icon
        a11yText="Helpful accessibility text"
        className="optional-class"
        width={30}
        height={36}
        type="pick"
        />
    </Example>
  </div>
)

export default IconPage
