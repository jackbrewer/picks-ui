import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import Control from '../../control/Control'

class CheckField extends Component {
  render () {
    const { assistance, className, error, id, label, name } = this.props
    const fieldClasses = classNames(
      'field',
      'field--check',
      className,
      { 'field--error': error }
    )

    return (
      <div
        aria-labelledby={`question--${id || name}`}
        className={fieldClasses}
        id={`field--${id || name}`}
        role="group"
        >
        {label &&
          <div
            className="field__question"
            id={`question--${id || name}`}
            >
            {label}
          </div>
        }
        <div className="field__answer">
          <Control
            {...this.props}
            />
        </div>
        {error && <div className="field__feedback">{error}</div>}
        {assistance && <div className="field__assistance">{assistance}</div>}
      </div>
    )
  }
}

CheckField.defaultProps = {}

CheckField.propTypes = {
  assistance: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default CheckField
