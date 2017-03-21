import React, { PropTypes } from 'react'

const Option = (props) => {
  const { text, value } = props

  return (
    <option
      value={value || text}
      >
      {text}
    </option>
  )
}

Option.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default Option
