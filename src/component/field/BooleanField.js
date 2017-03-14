import React, { PropTypes } from 'react'
import classNames from 'classnames'

import BooleanControl from '../control/BooleanControl'

const BooleanField = (props) => {
  const { assistance, error, fieldClassName, label, name } = props
  const fieldClasses = classNames('field', 'field--boolean', fieldClassName, { 'field--error': error })
  return (
    <div
      className={fieldClasses}
      id={`field--${name}`}
      >
      <div className="field__answer">
        <label className="control-wrap">
          <span className="control-wrap__item control-wrap__item--shrink">
            <BooleanControl {...props} />
          </span>
          <span className="control-wrap__item">
            {label}
          </span>
        </label>
      </div>
      {error ? <div className="field__feedback">{error}</div> : null}
      {assistance ? <div className="field__assistance">{assistance}</div> : null}
    </div>
  )
}

BooleanField.defaultProps = {}

BooleanField.propTypes = {
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

export default BooleanField
