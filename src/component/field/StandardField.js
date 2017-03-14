import React from 'react'
import classNames from 'classnames'

import TextControl from '../control/TextControl'

const StandardField = (props) => {
  const { name, label, assistance, error, fieldClassName } = props
  const fieldClasses = classNames('field', fieldClassName, { 'field--error': error })
  return (
    <div
      id={`field--${name}`}
      className={fieldClasses}
      >
      <div className="field__question">
        <label htmlFor={`control--${name}`}>
          {label}
        </label>
      </div>
      <div className="field__answer">
        <TextControl {...props} />
      </div>
      {error ? <div className="field__feedback">{error}</div> : null}
      {assistance ? <div className="field__assistance">{assistance}</div> : null}
    </div>
  )
}

StandardField.defaultProps = {}

StandardField.propTypes = {
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

export default StandardField
