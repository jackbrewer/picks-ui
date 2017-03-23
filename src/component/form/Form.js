import React, { Children, Component, PropTypes } from 'react'
import classNames from 'classnames'

import Button from '../button/Button'

class Form extends Component {
  constructor () {
    super()
    this.state = {}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox'
      ? this.handleCheckboxChange(target)
      : target.value
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }

  handleCheckboxChange (target) {
    const val = [ ...(this.state[target.name] || []) ]
    const newValue = target.value
    const index = val.indexOf(newValue)
    if (index !== -1) {
      val.splice(index, 1)
    } else {
      val.push(newValue)
    }
    return val.sort()
  }

  render () {
    const { action, children, className, method, onSubmit, submitButtonText } = this.props
    const formClasses = classNames(
      'form',
      className
    )

    return (
      <form
        action={action}
        className={formClasses}
        method={method}
        onSubmit={(e) => onSubmit(e, this.state)}
        >
        {Children.map(children,
          (child) => React.cloneElement(child, {
            onChange: this.handleInputChange,
            value: this.state[child.props.name]
          })
        )}
        <div className="form__actions">
          <Button type="submit">{submitButtonText}</Button>
        </div>
      </form>
    )
  }
}

Form.defaultProps = {
  action: '',
  method: 'post',
  submitButtonText: 'Submit'
}

Form.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  method: PropTypes.oneOf([ 'get', 'post' ]),
  onSubmit: PropTypes.func,
  submitButtonText: PropTypes.string
}

export default Form
