import React, { PropTypes } from 'react'

const Blockquote = ({ children, citation, citationUrl, quote }) => {
  if (!quote && !children) return null

  return (
    <blockquote className="blockquote">
      {quote && <p>{quote}</p>}
      {children}
      {citation &&
        <cite className="blockquote__citation">
          {citationUrl && <a href={citationUrl}>{citation}</a>}
          {!citationUrl && citation}
        </cite>
      }
    </blockquote>
  )
}

Blockquote.propTypes = {
  children: PropTypes.any,
  citation: PropTypes.string,
  citationUrl: PropTypes.string,
  quote: PropTypes.string
}

export default Blockquote
