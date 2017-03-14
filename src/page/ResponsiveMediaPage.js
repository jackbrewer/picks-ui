import React from 'react'

import Code from '../component/code/Code'
import ResponsiveMedia from '../component/responsive-media/ResponsiveMedia'

const ResponsiveMediaPage = () => (
  <div className="prose">
    <h1>Responsive Media</h1>
    <Code>
      <ResponsiveMedia ratio="1:1">
        <img
          src="http://img.clock.co.uk/500x500"
          alt=""
        />
      </ResponsiveMedia>
      <ResponsiveMedia ratio="3:2">
        <img
          src="http://img.clock.co.uk/300x200"
          alt=""
        />
      </ResponsiveMedia>
      <ResponsiveMedia ratio="312:109">
        <img
          src="http://img.clock.co.uk/312x109"
          alt=""
        />
      </ResponsiveMedia>
    </Code>
    <Code>
      <ResponsiveMedia ratio="16:9">
        <iframe
          src="//www.youtube.com/embed/TkyLnWm1iCs"
          width="560"
          height="315"
          frameBorder="0"
        />
      </ResponsiveMedia>
    </Code>
  </div>
)

export default ResponsiveMediaPage
