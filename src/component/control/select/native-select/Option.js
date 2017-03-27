import React, { PropTypes } from 'react'

const Option = ({ option }) => (
  <option
    value={option.value || option.text}
    >
    {option.text}
  </option>
)

Option.propTypes = {
  option: PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
}

export default Option
