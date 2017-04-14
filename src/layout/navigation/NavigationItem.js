import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavigationItem = ({ children, to, text }) => (
  <li>
    <NavLink
      activeClassName="is-active"
      className="navigation__link"
      to={to}
      >
      {text}
    </NavLink>
    {children &&
      <ul className="list--unstyled">
        {Children.map(children, (child, i) => (
          <li>
            <NavLink
              key={i}
              activeClassName="is-active"
              className="navigation__link"
              to={child.props.to}
              >
              {child.props.text}
            </NavLink>
          </li>
        ))}
      </ul>
    }
  </li>
)

NavigationItem.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default NavigationItem
