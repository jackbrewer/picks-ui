import React, { PropTypes } from 'react'
import classNames from 'classnames'

import Control from '../../control/Control'

const StandardField = ({ assistance, children, className, error, label, controlName }) => {
  const fieldClasses = classNames('field', className, { 'field--error': error })
  return (
    <div
      className={fieldClasses}
      id={`field--${controlName}`}
      >
      <div className="field__question">
        <label htmlFor={`control--${controlName}`}>
          {label}
        </label>
      </div>
      <div className="field__answer">
        {children}
      </div>
      {error ? <div className="field__feedback">{error}</div> : null}
      {assistance ? <div className="field__assistance">{assistance}</div> : null}
    </div>
  )
}

StandardField.defaultProps = {}

StandardField.propTypes = {
  assistance: PropTypes.string,
  children: PropTypes.shape({ type: PropTypes.oneOf([ Control ]) }).isRequired,
  className: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  controlName: PropTypes.string.isRequired
}

export default StandardField
