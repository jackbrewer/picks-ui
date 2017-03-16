import React, { PropTypes } from 'react'
import classNames from 'classnames'

import Control from '../control/Control'

const CheckField = (props) => {
  const { assistance, error, fieldClassName, label, name } = props
  const fieldClasses = classNames('field', 'field--check', fieldClassName, { 'field--error': error })
  return (
    <div
      className={fieldClasses}
      id={`field--${name}`}
      >
      <div className="field__answer">
        <label className="control-wrap">
          <span className="control-wrap__item control-wrap__item--shrink">
            <Control {...props} />
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

CheckField.defaultProps = {}

CheckField.propTypes = {
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

export default CheckField
