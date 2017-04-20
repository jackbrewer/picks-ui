import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Toggle extends Component {
  constructor (props) {
    super(props)
    this.state = { isChecked: props.checked }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    // Clicking the label triggers the input change on mouseUp, but we want it
    // on mouseDown instead to better simulate the click and drag interaction.
    e.preventDefault()
    if (e.type === 'click') return

    // Flip the checkbox state
    this.checkbox.checked = !this.checkbox.checked
    this.setState({ isChecked: !this.state.isChecked })

    // // If using a controlled input, simulate a change event on the input
    if (!this.props.onChange) return
    const mockEvent = { target: { name: this.checkbox.name, checked: this.checkbox.checked } }
    this.props.onChange(mockEvent)
  }

  render () {
    const { label, name, onChange, textChecked, textUnchecked, value } = this.props
    return (
      <label
        className="toggle js-toggle"
        onClick={this.handleChange}
        onMouseDown={this.handleChange}
        onTouchStart={this.handleChange}
        >
        <input
          checked={this.state.isChecked}
          className="toggle__input"
          name={name}
          onChange={onChange}
          type="checkbox"
          value={value}
          ref={(input) => { this.checkbox = input }}
        />
        <span className="is-vhidden">{label}</span>
        <span className="toggle__frame"
          data-text-checked={textChecked}
          data-text-unchecked={textUnchecked}
          />
        <span className="toggle__indicator" />
      </label>
    )
  }
}

Toggle.defaultProps = {
  checked: false
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  textChecked: PropTypes.string,
  textUnchecked: PropTypes.string,
  value: PropTypes.string.isRequired
}

export default Toggle
