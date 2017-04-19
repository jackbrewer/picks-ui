import React from 'react'

import SiteTitle from '../site-title/SiteTitle'
import Button from '../../component/button/Button'

const Masthead = () => (
  <div className="masthead">
    <div className="masthead__inner">
      <div className="content-center content-gutter">
        <SiteTitle isFeature />
        <div className="masthead__content">
          <p>A well thought out strapline will appear here.</p>
          <p>
            <Button className="button--inverse" href="/ui">Docs</Button>
            <Button className="button--inverse" href="https://github.com/jackbrewer/picks-ui">GitHub</Button>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Masthead
