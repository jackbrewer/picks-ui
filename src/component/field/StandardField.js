import React, { PropTypes } from 'react'
import classNames from 'classnames'

import Control from '../control/Control'

const StandardField = (props) => {
  const { assistance, error, fieldClassName, label, name } = props
  const fieldClasses = classNames('field', fieldClassName, { 'field--error': error })
  return (
    <div
      className={fieldClasses}
      id={`field--${name}`}
      >
      <div className="field__question">
        <label htmlFor={`control--${name}`}>
          {label}
        </label>
      </div>
      <div className="field__answer">
        <Control {...props} />
      </div>
      {error ? <div className="field__feedback">{error}</div> : null}
      {assistance ? <div className="field__assistance">{assistance}</div> : null}
    </div>
  )
}

StandardField.defaultProps = {}

StandardField.propTypes = {
  assistance: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  fieldClassName: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  name: PropTypes.string.isRequired
}

export default StandardField
