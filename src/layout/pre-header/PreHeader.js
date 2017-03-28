import React, { PropTypes } from 'react'

const Table = ({ name, slug }) => (
  <div className="pre-header">
    <div className="content-center content-gutter">
      <p className="text-center">
        This project is still in its early stages. More refined components, docs and examples coming&nbsp;soon.
      </p>
    </div>
  </div>
)

Table.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string
}

export default Table
