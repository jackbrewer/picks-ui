import React, { Children, Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Button from '../button/Button'

class Form extends Component {
  constructor (props) {
    super(props)

    const initialValues = Children.map(props.children,
      child => {
        return { [child.props.name]: child.props.value }
      }
    )
    this.state = Object.assign({}, ...initialValues)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputValue = this.handleInputValue.bind(this)
    this.handleArrayValue = this.handleArrayValue.bind(this)
  }

  handleInputChange (e) {
    const value = this.handleInputValue(e.target)
    this.setState({ [e.target.name]: value })
  }

  handleInputValue (target) {
    const { name, type, value } = target
    if (type !== 'checkbox') return value
    if (Array.isArray(this.state[name])) return this.handleArrayValue(name, value)
    if (!target.checked) return ''
    return value
  }

  handleArrayValue (name, value) {
    const valueArr = [ ...(this.state[name]) ]
    valueArr.includes(value)
      ? valueArr.splice(valueArr.indexOf(value), 1)
      : valueArr.push(value)
    return valueArr.sort()
  }

  render () {
    const { action, children, className, method, onSubmit, submitText, ...other } = this.props
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
        {...other}
        >
        {Children.map(children,
          (child) => React.cloneElement(child, {
            onChange: this.handleInputChange,
            value: this.state[child.props.name]
          })
        )}
        <div className="form__actions">
          <Button type="submit">{submitText}</Button>
        </div>
      </form>
    )
  }
}

Form.defaultProps = {
  action: '',
  method: 'post',
  submitText: 'Submit'
}

Form.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  method: PropTypes.oneOf([ 'get', 'post' ]),
  onSubmit: PropTypes.func,
  submitText: PropTypes.string
}

export default Form
