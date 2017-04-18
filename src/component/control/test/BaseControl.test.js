import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { spy } from 'sinon'

import BaseControl from '../BaseControl'

const defaultProps = Object.freeze({
  element: 'input',
  name: 'example'
})

describe('Component: BaseControl', function () {
  it('should error without the required props', function () {
    const originalError = console.error
    console.error = message => { throw new Error(message) }
    assert.throws(() => shallow(<BaseControl />), Error)
    assert.throws(() => shallow(<BaseControl name={undefined} element="input" />), Error)
    assert.throws(() => shallow(<BaseControl name="example" element={undefined} />), Error)
    console.error = originalError
  })

  it('should not error with required props', function () {
    const wrapper = shallow(<BaseControl {...defaultProps} />)
    assert.equal(wrapper.type(), 'input')
    assert.equal(wrapper.prop('name'), 'example')
  })

  it('should not render additional attributes if props not set', function () {
    const wrapper = shallow(<BaseControl {...defaultProps} />)
    assert.equal(wrapper.prop('className'), 'control')
    assert.equal(wrapper.prop('disabled'), undefined)
    assert.equal(wrapper.prop('id'), undefined)
    assert.equal(wrapper.prop('onBlur'), undefined)
    assert.equal(wrapper.prop('onChange'), undefined)
    assert.equal(wrapper.prop('onFocus'), undefined)
    assert.equal(wrapper.prop('required'), undefined)
    assert.equal(wrapper.prop('value'), undefined)
    assert.equal(wrapper.prop('type'), undefined)
  })

  it('should render additional attributes if props set', function () {
    const wrapper = shallow(<BaseControl {...defaultProps}
      className="test-class"
      disabled
      id="example-id"
      onBlur={() => {}}
      onChange={() => {}}
      onFocus={() => {}}
      required
      type="text"
      value="Example Value"
    />)
    assert.equal(wrapper.prop('className'), 'control test-class')
    assert.equal(wrapper.prop('disabled'), true)
    assert.equal(wrapper.prop('id'), 'example-id')
    assert.equal(typeof wrapper.prop('onBlur'), 'function')
    assert.equal(typeof wrapper.prop('onChange'), 'function')
    assert.equal(typeof wrapper.prop('onFocus'), 'function')
    assert.equal(wrapper.prop('required'), true)
    assert.equal(wrapper.prop('value'), 'Example Value')
    wrapper.setProps({ type: 'email' })
    assert.equal(wrapper.prop('type'), 'email')
    wrapper.setProps({ type: 'url' })
    assert.equal(wrapper.prop('type'), 'url')
    wrapper.setProps({ type: 'password' })
    assert.equal(wrapper.prop('type'), 'password')
  })

  it('should trigger passed onBlur function when blurred', function () {
    const mockHandleBlur = spy()
    const wrapper = shallow(<BaseControl {...defaultProps}
      onBlur={mockHandleBlur}
    />)
    assert.equal(mockHandleBlur.calledOnce, false)
    wrapper.simulate('blur')
    assert.equal(mockHandleBlur.calledOnce, true)
  })

  it('should trigger passed onChange function when changed', function () {
    const mockHandleChange = spy()
    const wrapper = shallow(<BaseControl {...defaultProps}
      onChange={mockHandleChange}
    />)
    assert.equal(mockHandleChange.calledOnce, false)
    wrapper.simulate('change')
    assert.equal(mockHandleChange.calledOnce, true)
  })

  it('should trigger passed onFocus function when focussed', function () {
    const mockHandleFocus = spy()
    const wrapper = shallow(<BaseControl {...defaultProps}
      onFocus={mockHandleFocus}
    />)
    assert.equal(mockHandleFocus.calledOnce, false)
    wrapper.simulate('focus')
    assert.equal(mockHandleFocus.calledOnce, true)
  })

  it('should add classes if passed a `modifiers` prop', function () {
    const wrapper = shallow(<BaseControl {...defaultProps}
      modifiers={[ 'one', 'two' ]}
    />)
    assert.equal(wrapper.prop('className'), 'control control--one control--two')
  })

  it('should render additional attributes passed as props from parent components', function () {
    const wrapper = shallow(<BaseControl {...defaultProps}
      maxLength="20"
      autoFocus
      pattern="[a-z0-9]"
      rows={5}
    />)
    assert.equal(wrapper.prop('maxLength'), 20)
    assert.equal(wrapper.prop('autoFocus'), true)
    assert.equal(wrapper.prop('pattern'), '[a-z0-9]')
    assert.equal(wrapper.prop('rows'), 5)
  })

  it('should add an error class if passed an `error` prop', function () {
    const wrapper = shallow(<BaseControl {...defaultProps}
      error="Something went wrong"
    />)
    assert.equal(wrapper.prop('className'), 'control control--error')
  })
})
