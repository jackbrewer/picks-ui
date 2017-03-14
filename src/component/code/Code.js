import React, { Children, PropTypes } from 'react'
import classNames from 'classnames'
import reactElementToJSXString from 'react-element-to-jsx-string'

import Highlight from 'react-highlight'

const Code = ({ children, displayName, filterProps, language, noPreview, previewWidth, noSource }) => {
  const codePreviewItemClassNames = classNames(
    'code__preview-item',
    'one-whole',
    previewWidth === 'auto' ? 'code__preview-item--auto' : previewWidth
  )
  const formattingOptions = {
    ...displayName && { displayName: () => displayName },
    filterProps: [ 'key', ...filterProps ],
    showDefaultProps: false,
    showFunctions: true,
    tabStop: 2
  }

  function stringifyChildren () {
    return Children.map(children, (child) => {
      return reactElementToJSXString(child, formattingOptions)
    }).join('\n\n')
  }

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
            {stringifyChildren()}
          </Highlight>
        </div>
      }
    </div>
  )
}

Code.defaultProps = {
  filterProps: [],
  language: 'html',
  noPreview: false,
  noSource: false,
  spaced: false
}

Code.propTypes = {
  children: PropTypes.any.isRequired,
  displayName: PropTypes.string,
  filterProps: PropTypes.arrayOf(PropTypes.string),
  language: PropTypes.string,
  noPreview: PropTypes.bool,
  noSource: PropTypes.bool,
  previewWidth: PropTypes.string
}

export default Code
