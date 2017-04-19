import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Helmet from 'react-helmet'

const DocumentHead = ({ location }) => {
  // Only use for non-static head elements. Put the rest directly in the HTML
  return (
    <Helmet
      defaultTitle="Picks UI"
      titleTemplate="%s | Picks UI"
      link={[ { href: `https://picks.tech${location.pathname}`, rel: 'canonical' } ]}
    />
  )
}

DocumentHead.propTypes = {
  location: PropTypes.object
}

export default withRouter(DocumentHead)
