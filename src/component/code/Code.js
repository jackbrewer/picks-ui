import React, { Children } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import reactElementToJSXString from 'react-element-to-jsx-string'

import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light'
import bash from 'highlight.js/lib/languages/bash'
import css from 'highlight.js/lib/languages/css'
import html from 'highlight.js/lib/languages/xml'
import js from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import stylus from 'highlight.js/lib/languages/stylus'

registerLanguage('bash', bash)
registerLanguage('css', css)
registerLanguage('html', html)
registerLanguage('javascript', js)
registerLanguage('json', json)
registerLanguage('stylus', stylus)

const Code = ({ children, displayName, filterProps, language }) => {
  const formattingOptions = {
    ...displayName && { displayName: () => displayName },
    filterProps: [ 'key', ...filterProps ],
    showDefaultProps: false,
    showFunctions: true,
    tabStop: 2
  }
  const codeClassNames = classNames(
    'code',
    language
  )

  function stringifyChildren () {
    return Children.map(children, (child) => {
      return reactElementToJSXString(child, formattingOptions)
    }).join('\n\n')
  }

  return (
    <SyntaxHighlighter
      language={language}
      useInlineStyles={false}
      codeTagProps={{ className: codeClassNames }}
      >
      {stringifyChildren()}
    </SyntaxHighlighter>
  )
}

Code.defaultProps = {
  filterProps: [],
  language: 'html'
}

Code.propTypes = {
  children: PropTypes.node.isRequired,
  displayName: PropTypes.string,
  filterProps: PropTypes.arrayOf(PropTypes.string),
  language: PropTypes.string
}

export default Code
