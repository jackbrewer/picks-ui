import React, { PropTypes } from 'react'
import { NavLink } from 'react-router-dom'

const NavigationItem = ({ to, text }) => (
  <li>
    <NavLink
      activeClassName="is-active"
      className="navigation__link"
      to={to}
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
  <nav
    aria-label="Primary Navigation"
    className="navigation"
    id="navigation"
    role="navigation"
    >
    <h2 className="is-vhidden">Primary Navigation</h2>
    <div className="navigation__group">

      <h3>Components</h3>
      <ul className="list--inline list--unstyled">
        <NavigationItem to="/button" text="Button" />
        <NavigationItem to="/card" text="Card" />
        <NavigationItem to="/control" text="Control" />
        <NavigationItem to="/field" text="Field" />
        <NavigationItem to="/icon" text="Icon" />
        <NavigationItem to="/note" text="Note" />
        <NavigationItem to="/notification" text="Notification" />
        <NavigationItem to="/responsive-media" text="Responsive Media" />
        <NavigationItem to="/swatch" text="Swatch" />
        <NavigationItem to="/typography" text="Typography" />
      </ul>

    </div>
  </nav>
)

export default Navigation
