import React, { PropTypes } from 'react'

const PageMeta = ({ name, slug }) => (
  <div className="page-meta">
    <ul className="list--inline-separated">
      <li>
        <a href={`https://github.com/jackbrewer/picks-ui/tree/master/src/component/${slug || name.toLowerCase()}`}>
          View {name} on GitHub
        </a>
      </li>
    </ul>
  </div>
)

PageMeta.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string
}

export default PageMeta
