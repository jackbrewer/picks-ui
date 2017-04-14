import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default function Icon ({ a11yText, children, className, height, modifiers, width }) {
  const iconsClassNames = classNames(
    'icon',
    { 'icon--custom-size': width || height },
    modifiers && modifiers.map(modifierClass => `icon--${modifierClass}`),
    className
  )
  return (
    <i
      className={iconsClassNames}
      aria-hidden={!a11yText ? 'true' : null}
      style={{
        width: width && `${width}px`,
        height: height && `${height}px`,
        lineHeight: height && `${height}px`
      }}
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
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  height: PropTypes.number,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.number
}
