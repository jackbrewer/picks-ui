import React from 'react'

import SiteTitle from '../layout/site-title/SiteTitle'
import Button from '../button/Button'

const Masthead = () => (
  <div className="masthead">
    <div className="masthead__inner">
      <div className="content-center content-gutter">
        <SiteTitle isFeature />
        <div className="masthead__content">
          <p>A well thought out strapline will appear here.</p>
          <p>
            <Button href="/docs">Documentation</Button>
            <Button href="https://github.com/jackbrewer/picks-ui">GitHub</Button>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Masthead
