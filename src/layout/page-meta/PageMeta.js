import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../component/icon/Icon'

const PageMeta = ({ name, slug }) => (
  <div className="page-meta">
    <ul className="list--inline-separated">
      <li>
        <a href={`https://github.com/jackbrewer/picks-ui/tree/master/src/component/${slug || name.toLowerCase()}`}>
          <Icon
            a11yText={`View ${name} on GitHub`}
            type="github"
            width={24}
            height={24}
          />
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
