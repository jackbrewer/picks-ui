import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import Control from '../../control/Control'

class StandardField extends Component {
  render () {
    const { assistance, className, error, id, label, name } = this.props
    const controlId = id || `control--${name}`
    const fieldClasses = classNames(
      'field',
      'field--standard',
      className,
      { 'field--error': error }
    )

    return (
      <div
        className={fieldClasses}
        id={`field--${id || name}`}
        >
        <div className="field__question">
          <label htmlFor={controlId}>
            {label}
          </label>
        </div>
        <div className="field__answer">
          <Control
            {...this.props}
            id={controlId}
          />
        </div>
        {error ? <div className="field__feedback">{error}</div> : null}
        {assistance ? <div className="field__assistance">{assistance}</div> : null}
      </div>
    )
  }
}

StandardField.defaultProps = {
  value: ''
}

StandardField.propTypes = {
  assistance: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  name: PropTypes.string.isRequired
}

export default StandardField
