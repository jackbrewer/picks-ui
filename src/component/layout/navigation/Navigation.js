import React from 'react'

import NavigationItem from './NavigationItem'

const Navigation = () => (
  <nav
    aria-label="Primary Navigation"
    className="navigation"
    id="navigation"
    role="navigation"
    >
    <h2 className="is-vhidden">Primary Navigation</h2>
    <div className="navigation__group">

      <h3>Components</h3>
      <ul className="list--unstyled">
        <NavigationItem to="/blockquote" text="Blockquote" />
        <NavigationItem to="/button" text="Button" />
        <NavigationItem to="/card" text="Card" />
        <NavigationItem to="/code" text="Code" />
        <NavigationItem to="/control" text="Control">
          <NavigationItem to="/control/input" text="Input" />
          <NavigationItem to="/control/check" text="Check" />
          <NavigationItem to="/control/date" text="Date" />
          <NavigationItem to="/control/file" text="File" />
          <NavigationItem to="/control/select" text="Select" />
          <NavigationItem to="/control/textarea" text="Textarea" />
        </NavigationItem>
        <NavigationItem to="/field" text="Field" />
        <NavigationItem to="/form" text="Form" />
        <NavigationItem to="/icon" text="Icon" />
        <NavigationItem to="/note" text="Note" />
        <NavigationItem to="/notification" text="Notification" />
        <NavigationItem to="/responsive-media" text="Responsive Media" />
        <NavigationItem to="/swatch" text="Swatch" />
        <NavigationItem to="/table" text="Table" />
        <NavigationItem to="/typography" text="Typography" />
      </ul>

    </div>
  </nav>
)

export default Navigation
