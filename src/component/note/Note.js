import React, { PropTypes } from 'react'
import classNames from 'classnames'

const Note = ({ children, className, heading, text, state }) => {
  if (!children && !heading && !text) return null
  const noteClasses = classNames(
    'note',
    state ? `note--${state}` : null,
    className
  )
  return (
    <div className={noteClasses}>
      <div className="note__content">
        {heading && <div className="note__heading">{heading}</div>}
        {text && <p>{text}</p>}
        {children}
      </div>
    </div>
  )
}

Note.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  state: PropTypes.oneOf([ 'notice', 'warning', 'error', 'success' ])
}

export default Note
