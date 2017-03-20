import React from 'react'
import Helmet from 'react-helmet'

import Example from '../component/example/Example'
import ResponsiveMedia from '../component/responsive-media/ResponsiveMedia'

const ResponsiveMediaPage = () => (
  <div className="prose">
    <Helmet title="Responsive Media" />
    <h1>Responsive Media</h1>
    <Example>
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
    </Example>
    <Example>
      <ResponsiveMedia ratio="16:9">
        <iframe
          src="//www.youtube.com/embed/TkyLnWm1iCs"
          width="560"
          height="315"
          frameBorder="0"
        />
      </ResponsiveMedia>
    </Example>
  </div>
)

export default ResponsiveMediaPage
