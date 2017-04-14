import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Control from '../../control/Control'

const StandardCheckField = ({ assistance, className, controlClassName, error, id, label, modifiers, name, ...other }) => {
  const fieldId = `field--${id || name}`
  const questionId = `question--${id || name}`
  const fieldClasses = classNames(
    'field',
    'field--standard-check',
    modifiers && modifiers.map(modifierClass => `field--${modifierClass}`),
    className,
    { 'field--error': error }
  )

  return (
    <div
      className={fieldClasses}
      id={fieldId}
      {...label && {
        'aria-labelledby': questionId,
        role: 'group'
      }}
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
          modifiers={modifiers}
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
  modifiers: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired
}

export default StandardCheckField
