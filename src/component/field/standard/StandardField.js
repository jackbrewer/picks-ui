import React, { PropTypes } from 'react'
import classNames from 'classnames'

import Control from '../../control/Control'

const StandardField = (props) => {
  const { assistance, children, className, label } = props
  const { name, error } = children.props
  const fieldClasses = classNames('field', className, { 'field--error': error })

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
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired
}

export default StandardField
