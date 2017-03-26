import React, { PropTypes } from 'react'

const Swatch = ({ onClick, name, value }) => (
  <div
    className="swatch"
    style={{ backgroundColor: value }}
    onClick={onClick}
    >
    <div className="swatch__caption">
      <div className="swatch__title">{name}</div>
      <ul className="swatch__list list--unstyled">
        <li className="swatch__value">{value}</li>
      </ul>
    </div>
  </div>
)

Swatch.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Swatch
