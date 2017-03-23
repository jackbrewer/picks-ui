import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import Control from '../../control/Control'

class CheckField extends Component {
  constructor (props) {
    super()
    this.state = { currentValue: props.currentValue }
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleChange (e) {
    this.setState({ currentValue: e.target.value })
  }

  handleCheckboxChange (e) {
    const val = [ ...(this.state.currentValue || []) ]
    const newValue = e.target.value
    const index = val.indexOf(newValue)
    if (index !== -1) {
      val.splice(index, 1)
    } else {
      val.push(newValue)
    }
    this.setState({ currentValue: val.sort() })
  }

  render () {
    const { assistance, className, error, id, label, name, type } = this.props
    const fieldClasses = classNames(
      'field',
      'field--check',
      className,
      { 'field--error': error }
    )

    return (
      <div
        className={fieldClasses}
        id={`field--${id || name}`}
        >
        {label && <div className="field__question">{label}</div>}
        <div className="field__answer">
          <Control
            {...this.props}
            onChange={type === 'checkbox' ? this.handleCheckboxChange : this.handleChange}
            {...this.state.currentValue && { currentValue: this.state.currentValue }}
            />
        </div>
        {error && <div className="field__feedback">{error}</div>}
        {assistance && <div className="field__assistance">{assistance}</div>}
      </div>
    )
  }
}

CheckField.defaultProps = {}

CheckField.propTypes = {
  assistance: PropTypes.string,
  className: PropTypes.string,
  currentValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    )
  ]),
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default CheckField
