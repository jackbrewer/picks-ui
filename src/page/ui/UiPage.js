import React from 'react'
import Helmet from 'react-helmet'

const UiPage = () => (
  <div className="prose">
    <Helmet title="UI" />
    <h1>UI</h1>

    <h2>To write:</h2>
    <ul>
      <li>Based on BEM so all components can (eventually) take an array of modifiers to add a BEM-style classes to top level elements within a component</li>
      <li>CSS Follows ITCSS architecture, with directory structure named to preserve the heirarchy</li>
      <li>Styles live with components for portability, but currently compile to a single stylesheet</li>
      <li>Matches React's browser support of IE9+, with progressive enhancement where required</li>
    </ul>
  </div>
)

export default UiPage
