import React, { Children, Component, PropTypes } from 'react'
import classNames from 'classnames'

import Code from '../code/Code'

class Example extends Component {
  constructor (props) {
    super()
    this.state = { isSourceHidden: props.toggleSource }
    this.handleSourceToggle = this.handleSourceToggle.bind(this)
  }

  handleSourceToggle () {
    this.setState({ isSourceHidden: !this.state.isSourceHidden })
  }

  render () {
    const { children, noPreview, noSource, previewWidth, toggleSource } = this.props
    const examplePreviewItemClassNames = classNames(
      'example__preview-item',
      'one-whole',
      previewWidth === 'auto' ? 'example__preview-item--auto' : previewWidth
    )

    return (
      <div className="example">
        {!noPreview &&
          <div className="example__preview">
            {Children.map(children, (child, key) => {
              return <div className={examplePreviewItemClassNames} key={key}>{child}</div>
            })}
            {toggleSource &&
              <button
                className="example__source-toggle"
                onClick={this.handleSourceToggle}
                type="button"
                >
                <span className="is-vhidden">Show/hide source</span>
              </button>
            }
          </div>
        }
        {!noSource && !this.state.isSourceHidden &&
          <div className="example__source">
            <Code {...this.props}>
              {children}
            </Code>
          </div>
        }
      </div>
    )
  }
}

Example.defaultProps = {
  noPreview: false,
  noSource: false,
  toggleSource: false
}

Example.propTypes = {
  children: PropTypes.node.isRequired,
  noPreview: PropTypes.bool,
  noSource: PropTypes.bool,
  previewWidth: PropTypes.string,
  toggleSource: PropTypes.bool
}

export default Example
