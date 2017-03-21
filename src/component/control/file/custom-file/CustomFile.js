import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import NativeFileControl from '../native-file/NativeFile'

class CustomFileControl extends Component {
  constructor () {
    super()
    this.state = { fileName: 'No file chosen' }
    this.handleFileChange = this.handleFileChange.bind(this)
    this.formatFileSelection = this.formatFileSelection.bind(this)
  }

  handleFileChange (e) {
    this.setState({
      fileName: this.formatFileSelection(e.target.files)
    })
  }

  formatFileSelection (files) {
    const fileCount = files && files.length
    const fileName = fileCount > 1
      ? `${fileCount} files selected`
      : files[0].name.replace(/.*\\/, '')
    return fileName
  }

  render () {
    const { error } = this.props
    const customFileClassNames = classNames(
      'custom-file',
      { 'custom-file--error': error }
    )

    return (
      <span className={customFileClassNames}>

        <span className="custom-file__button-wrapper">
          <button
            className="button button--block custom-file__button"
            type="button"
            >
            Browse
          </button>
          <NativeFileControl
            {...this.props}
            onChange={this.handleFileChange}
            className="custom-file__hidden-input"
          />
        </span>

        <span className="control control--text custom-file__filename">
          {this.state.fileName}
        </span>

      </span>
    )
  }
}

CustomFileControl.defaultProps = {
  error: ''
}

CustomFileControl.propTypes = {
  error: PropTypes.string
}

export default CustomFileControl
