import React from 'react'

const Swatch = ({ name, format, value, handleClick }) => (
  <div className="swatch" style={{ backgroundColor: value }} onClick={handleClick}>
    <div className="swatch__caption">
      <div className="swatch__title">{name}</div>
      <ul className="swatch__list list--unstyled">
        <li className="swatch__value">{value}</li>
      </ul>
    </div>
  </div>
)

Swatch.propTypes = {
  name: React.PropTypes.string.isRequired,
  format: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func
}

export default Swatch
