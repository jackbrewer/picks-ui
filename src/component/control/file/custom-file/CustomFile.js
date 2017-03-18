import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import NativeFileControl from '../native-file/NativeFile'

class CustomFileControl extends Component {
  constructor () {
    super()
    this.state = { fileName: '' }
    this.handleFileChange = this.handleFileChange.bind(this)
  }

  handleFileChange (e) {
    const input = e.target
    const fileCount = input.files ? input.files.length : 1
    const fileName = fileCount > 1
      ? `${fileCount} files selected`
      : input.value.replace(/.*\\/, '')
    this.setState({
      fileName,
      value: input.value
    })
  }

  render () {
    const { error } = this.props
    const customFileClassNames = classNames(
      'custom-file',
      { 'custom-file--error': error }
    )

    return (
      <div className={customFileClassNames}>

        <div className="custom-file__button-wrapper">
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
            value={this.state.value}
          />
        </div>

        <label className="custom-file__filename-wrapper">
          <span className="is-vhidden">File Name</span>
          <input
            className="control control--text custom-file__filename"
            type="text"
            placeholder="No file selected"
            readOnly
            disabled
            value={this.state.fileName}
          />
        </label>

      </div>
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
