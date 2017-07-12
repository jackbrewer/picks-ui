import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import PageMeta from '../page-meta/PageMeta'

const Page = ({ children, name, slug }) => (
  <div className="page prose">
    <Helmet title={name} />
    <h1>{name}</h1>
    <PageMeta name={name} />
    {children}
  </div>
)

Page.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string
}

export default Page
