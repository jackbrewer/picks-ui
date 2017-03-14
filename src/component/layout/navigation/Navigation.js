import React, { PropTypes } from 'react'
import { NavLink } from 'react-router-dom'

const NavigationItem = ({ to, text }) => (
  <li>
    <NavLink
      to={to}
      className="navigation__link"
      activeClassName="is-active"
      >
      {text}
    </NavLink>
  </li>
)

NavigationItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

const Navigation = () => (
  <nav className="navigation" id="navigation" role="navigation" aria-label="Primary Navigation">
    <h2 className="is-vhidden">Primary Navigation</h2>
    <div className="navigation__group">

      <h3>Components</h3>
      <ul className="list--inline list--unstyled">
        <NavigationItem to="/button" text="Button" />
        <NavigationItem to="/card" text="Card" />
        <NavigationItem to="/control" text="Control" />
        <NavigationItem to="/field" text="Field" />
        <NavigationItem to="/responsive-media" text="Responsive Media" />
        <NavigationItem to="/swatch" text="Swatch" />
      </ul>

    </div>
  </nav>
)

React.propTypes = {}

export default Navigation
