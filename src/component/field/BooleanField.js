import React from 'react'
import classNames from 'classnames'

import BooleanControl from '../control/BooleanControl'

const BooleanField = (props) => {
  const { name, label, assistance, error, fieldClassName } = props
  const fieldClasses = classNames('field', 'field--boolean', fieldClassName, { 'field--error': error })
  return (
    <div
      id={`field--${name}`}
      className={fieldClasses}
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
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node
  ]).isRequired,
  assistance: React.PropTypes.string,
  error: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node
  ]),
  fieldClassName: React.PropTypes.string
}

export default BooleanField
