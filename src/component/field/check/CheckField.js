import React, { PropTypes } from 'react'
import classNames from 'classnames'

const CheckField = (props) => {
  const { assistance, children, className, controlName, error, label } = props
  const fieldClasses = classNames('field', 'field--check', className, { 'field--error': error })
  return (
    <div
      className={fieldClasses}
      id={`field--${controlName}`}
      >
      {label && <div className="field__question">{label}</div>}
      <div className="field__answer">
        {children}
      </div>
      {error && <div className="field__feedback">{error}</div>}
      {assistance && <div className="field__assistance">{assistance}</div>}
    </div>
  )
}

CheckField.defaultProps = {}

CheckField.propTypes = {
  assistance: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  controlName: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string
}

export default CheckField
