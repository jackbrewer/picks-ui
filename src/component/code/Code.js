import React, { Children, PropTypes } from 'react'
import classNames from 'classnames'
import reactElementToJSXString from 'react-element-to-jsx-string'

import Highlight from 'react-highlight'

// http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html#stylable-classes

function stringifyChildren (children) {
  return Children.map(children, (child) => stringifyChild(child)).join('\n\n')
}

function stringifyChild (child) {
  const formattingOptions = {
    filterProps: [ 'key' ],
    showDefaultProps: false,
    showFunctions: true,
    tabStop: 2
  }
  return reactElementToJSXString(child, formattingOptions)
}

const Code = ({ children, language, noPreview, previewWidth, noSource }) => {
  const codePreviewItemClassNames = classNames(
    'code__preview-item',
    'one-whole',
    previewWidth === 'auto' ? 'code__preview-item--auto' : previewWidth
  )

  return (
    <div className="code">
      {!noPreview &&
        <div className="code__preview">
          {Children.map(children, (child, key) => {
            return <div className={codePreviewItemClassNames} key={key}>{child}</div>
          })}
        </div>
      }
      {!noSource &&
        <div className="code__source">
          <Highlight className={language}>
            {stringifyChildren(children)}
          </Highlight>
        </div>
      }
    </div>
  )
}

Code.defaultProps = {
  language: 'html',
  noPreview: false,
  noSource: false,
  spaced: false
}

Code.propTypes = {
  children: PropTypes.any,
  language: PropTypes.string,
  noPreview: PropTypes.bool,
  noSource: PropTypes.bool,
  previewWidth: PropTypes.string
}

export default Code
