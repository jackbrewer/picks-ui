import React, { PropTypes } from 'react'

const Option = (props) => {
  const { text, value } = props.option

  return (
    <option
      value={value || text}
      >
      {text}
    </option>
  )
}

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
