import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../icon/Icon'

const Notification = ({ children, className, handleDismiss, heading, text, state }) => {
  if (!children && !heading && !text) return null
  const notificationClasses = classNames(
    'notification',
    state ? `notification--${state}` : null,
    className
  )
  return (
    <div className={notificationClasses}>
      {handleDismiss &&
        <button className="notification__action text-button" onClick={handleDismiss}>
          <Icon a11yText="Dismiss" type="cross" />
        </button>
      }
      {heading && <div className="notification__heading">{heading}</div>}
      {(text || children) &&
        <div className="notification__content">
          {text && <p>{text}</p>}
          {children}
        </div>
      }
    </div>
  )
}

Notification.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  handleDismiss: PropTypes.func,
  heading: PropTypes.string,
  text: PropTypes.string,
  state: PropTypes.oneOf([ 'notice', 'warning', 'error', 'success' ])
}

export default Notification
