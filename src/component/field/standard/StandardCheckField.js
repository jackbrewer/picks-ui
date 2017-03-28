import React, { PropTypes } from 'react'
import classNames from 'classnames'

import Control from '../../control/Control'

const StandardCheckField = ({ assistance, className, controlClassName, error, id, label, name, ...other }) => {
  const fieldId = `field--${id || name}`
  const questionId = `question--${id || name}`
  const fieldClasses = classNames(
    'field',
    'field--standard-check',
    className,
    { 'field--error': error }
  )

  return (
    <div
      aria-labelledby={questionId}
      className={fieldClasses}
      id={fieldId}
      role="group"
      >
      {label &&
        <div
          className="field__question"
          id={questionId}
          >
          {label}
        </div>
      }
      <div className="field__answer">
        <Control
          className={controlClassName}
          error={error}
          name={name}
          {...other}
          />
      </div>
      {error && <div className="field__feedback">{error}</div>}
      {assistance && <div className="field__assistance">{assistance}</div>}
    </div>
  )
}

StandardCheckField.defaultProps = {}

StandardCheckField.propTypes = {
  assistance: PropTypes.string,
  className: PropTypes.string,
  controlClassName: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default StandardCheckField
