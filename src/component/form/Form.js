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

  handleInputChange (e) {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox'
      ? this.handleCheckboxChange(name, target.value)
      : target.value
    this.setState({ [name]: value })
  }

  handleCheckboxChange (name, value) {
    const valueArr = [ ...(this.state[name] || []) ]
    valueArr.includes(value)
      ? valueArr.splice(valueArr.indexOf(value), 1)
      : valueArr.push(value)
    return valueArr.sort()
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
