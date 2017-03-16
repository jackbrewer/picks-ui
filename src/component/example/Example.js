import React, { Children, PropTypes } from 'react'
import classNames from 'classnames'

import Code from '../code/Code'

const Example = (props) => {
  const { children, noPreview, previewWidth, noSource } = props
  const examplePreviewItemClassNames = classNames(
    'example__preview-item',
    'one-whole',
    previewWidth === 'auto' ? 'example__preview-item--auto' : previewWidth
  )

  return (
    <div className="example">
      {!noPreview &&
        <div className="example__preview">
          {Children.map(children, (child, key) => {
            return <div className={examplePreviewItemClassNames} key={key}>{child}</div>
          })}
        </div>
      }
      {!noSource &&
        <div className="example__source">
          <Code {...props}>
            {children}
          </Code>
        </div>
      }
    </div>
  )
}

Example.defaultProps = {
  noPreview: false,
  noSource: false
}

Example.propTypes = {
  children: PropTypes.any.isRequired,
  noPreview: PropTypes.bool,
  noSource: PropTypes.bool,
  previewWidth: PropTypes.string
}

export default Example
