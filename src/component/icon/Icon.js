import React, { PropTypes } from 'react'
import classNames from 'classnames'

export default function Icon ({ a11yText, children, className, type, width }) {
  const iconsClassNames = classNames(
    'icon',
    { 'icon--custom-width': width },
    className
  )
  return (
    <i
      className={iconsClassNames}
      aria-hidden={!a11yText ? 'true' : null}
      style={{ width }}
      >
      {a11yText &&
        <span className="is-vhidden">{a11yText}</span>
      }
      {children}
    </i>
  )
}

Icon.propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.any.isRequired,
  className: PropTypes.any,
  type: PropTypes.string,
  width: PropTypes.number
}
