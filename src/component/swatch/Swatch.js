import React, { PropTypes } from 'react'

const Swatch = ({ format, handleClick, name, value }) => (
  <div
    className="swatch"
    style={{ backgroundColor: value }}
    onClick={handleClick}
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
  format: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Swatch
