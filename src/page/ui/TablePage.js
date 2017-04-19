import React from 'react'
import Helmet from 'react-helmet'

import Example from '../../component/example/Example'
import Table from '../../component/table/Table'

const TablePage = () => (
  <div className="prose">
    <Helmet title="Table" />
    <h1>Table</h1>
    <p>A basic implementation of a table – just enough to get this site’s documentation running for now.</p>
    <Example>
      <Table
        columns={[ 'Model number', 'Manufacturer', 'Class', 'Purpose' ]}
        data={[
          [ '3PO-series', 'Cybot Galactica', '3rd', 'Protocol' ],
          [ 'GNK-series', 'Industrial Automaton', '5th', 'Power' ],
          [ 'MSE-6-series', 'Rebaxan Columni', '5th', 'Maintenance/Message' ],
          [ 'R2-series', 'Industrial Automaton', '2nd', 'Navigation/Repair' ],
          [ 'Viper-series', 'Arakyd Industries', '2nd', 'Exploration/Espionage' ]
        ]}
        stickyHeader
      />
    </Example>
  </div>
)

export default TablePage
