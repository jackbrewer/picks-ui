import React, { PropTypes } from 'react'

const Table = ({ name, slug }) => (
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

Table.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string
}

export default Table
