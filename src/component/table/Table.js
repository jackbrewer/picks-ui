import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Table = ({ columns, data, stickyHeader }) => {
  const tableClassNames = classNames(
    'table',
    { 'has-sticky-header': stickyHeader }
  )

  return (
    <table
      className={tableClassNames}
      >
      {columns &&
        <thead>
          <tr>
            {columns.map((column, i) => <th key={i} scope="col">{column}</th>)}
          </tr>
        </thead>
      }
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((value, i) => <td key={i}>{value}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array.isRequired,
  stickyHeader: PropTypes.bool
}

export default Table
