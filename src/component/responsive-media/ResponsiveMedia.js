import React from 'react'
import PropTypes from 'prop-types'

// Ratio should be supplied in a `16:9` style format
const ratioRegex = /^\d+:\d+$/

const ResponsiveMedia = ({ children, ratio }) => {
  // We can't predict sizes without a ratio, so just output the children
  if (!ratio) return children

  const ratioParts = ratio.split(':')
  const ratioPercentage = ratio && (ratioParts[1] / ratioParts[0]) * 100
  const ratioPercentageRounded = ratioPercentage && parseFloat(ratioPercentage.toFixed(4))

  return (
    <div
      className="responsive-media"
      style={ratio && { paddingBottom: `${ratioPercentageRounded}%` }}
      >
      {children}
    </div>
  )
}

ResponsiveMedia.defaultProps = {}

ResponsiveMedia.propTypes = {
  children: PropTypes.node.isRequired,
  ratio: (props, propName, componentName) => {
    const ratio = props[propName]
    return !ratio || ratioRegex.exec(ratio) ? null : new Error(`${propName} (${props[propName]}) in ${componentName} is not in the expected format (e.g. 16:9)`)
  }
}

export default ResponsiveMedia
