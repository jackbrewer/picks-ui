import React, { PropTypes } from 'react'
import classNames from 'classnames'

import Control from '../../control/Control'

const StandardTextField = ({ assistance, className, controlClassName, error, id, label, name, ...other }) => {
  const fieldId = `field--${id || name}`
  const controlId = id || `control--${name}`
  const fieldClasses = classNames(
    'field',
    'field--standard-text',
    className,
    { 'field--error': error }
  )

  return (
    <div
      className={fieldClasses}
      id={fieldId}
      >
      <div className="field__question">
        <label htmlFor={controlId}>
          {label}
        </label>
      </div>
      <div className="field__answer">
        <Control
          className={controlClassName}
          error={error}
          id={controlId}
          name={name}
          {...other}
        />
      </div>
      {error ? <div className="field__feedback">{error}</div> : null}
      {assistance ? <div className="field__assistance">{assistance}</div> : null}
    </div>
  )
}

StandardTextField.propTypes = {
  assistance: PropTypes.string,
  className: PropTypes.string,
  controlClassName: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default StandardTextField
