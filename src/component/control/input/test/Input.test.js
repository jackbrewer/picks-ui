import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { spy, stub } from 'sinon'

import InputControl from '../Input'

const defaultProps = { name: 'example', type: 'text' }

describe('Component: InputControl', () => {
  it('should error without the required props', () => {
    stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<InputControl />), Error)
    assert.throws(() => shallow(<InputControl name="example" type={null} />), Error)
    assert.throws(() => shallow(<InputControl name={null} type="text" />), Error)
    console.error.restore()
  })

  it('should not error with required props', () => {
    const wrapper = shallow(<InputControl {...defaultProps} />)
    assert.equal(wrapper.type(), 'input')
    assert.equal(wrapper.prop('name'), 'example')
    assert.equal(wrapper.prop('type'), 'text')
    wrapper.setProps({ type: 'email' })
    assert.equal(wrapper.prop('type'), 'email')
    wrapper.setProps({ type: 'url' })
    assert.equal(wrapper.prop('type'), 'url')
    wrapper.setProps({ type: 'password' })
    assert.equal(wrapper.prop('type'), 'password')
  })

  it('should not render additional attributes if props not set', () => {
    const wrapper = shallow(<InputControl {...defaultProps} />)
    assert.equal(wrapper.prop('className'), 'control control--text')
    assert.equal(wrapper.prop('disabled'), undefined)
    assert.equal(wrapper.prop('id'), undefined)
    assert.equal(wrapper.prop('onBlur'), undefined)
    assert.equal(wrapper.prop('onChange'), undefined)
    assert.equal(wrapper.prop('onFocus'), undefined)
    assert.equal(wrapper.prop('placeholder'), undefined)
    assert.equal(wrapper.prop('required'), undefined)
    assert.equal(wrapper.prop('value'), undefined)
  })

  it('should render additional attributes if props set', () => {
    const wrapper = shallow(<InputControl {...defaultProps}
      className="test-class"
      disabled
      id="example-id"
      onBlur={() => {}}
      onChange={() => {}}
      onFocus={() => {}}
      placeholder="Example placeholder"
      required
      value="Example Value"
    />)
    assert.equal(wrapper.prop('className'), 'control control--text test-class')
    assert.equal(wrapper.prop('disabled'), true)
    assert.equal(wrapper.prop('id'), 'example-id')
    assert.equal(typeof wrapper.prop('onBlur'), 'function')
    assert.equal(typeof wrapper.prop('onChange'), 'function')
    assert.equal(typeof wrapper.prop('onFocus'), 'function')
    assert.equal(wrapper.prop('placeholder'), 'Example placeholder')
    assert.equal(wrapper.prop('required'), true)
    assert.equal(wrapper.prop('value'), 'Example Value')
  })

  it('should trigger passed onBlur function when blurred', () => {
    const mockHandleBlur = spy()
    const wrapper = shallow(<InputControl {...defaultProps}
      onBlur={mockHandleBlur}
    />)
    assert.equal(mockHandleBlur.calledOnce, false)
    wrapper.simulate('blur')
    assert.equal(mockHandleBlur.calledOnce, true)
  })

  it('should trigger passed onChange function when changed', () => {
    const mockHandleChange = spy()
    const wrapper = shallow(<InputControl {...defaultProps}
      onChange={mockHandleChange}
    />)
    assert.equal(mockHandleChange.calledOnce, false)
    wrapper.simulate('change')
    assert.equal(mockHandleChange.calledOnce, true)
  })

  it('should trigger passed onFocus function when focussed', () => {
    const mockHandleFocus = spy()
    const wrapper = shallow(<InputControl {...defaultProps}
      onFocus={mockHandleFocus}
    />)
    assert.equal(mockHandleFocus.calledOnce, false)
    wrapper.simulate('focus')
    assert.equal(mockHandleFocus.calledOnce, true)
  })

  it('should render attributes if object passed an `additional` prop', () => {
    const wrapper = shallow(<InputControl {...defaultProps}
      additional={{ maxLength: 20, autoFocus: true, pattern: '[a-z0-9]' }}
    />)
    assert.equal(wrapper.prop('maxLength'), 20)
    assert.equal(wrapper.prop('autoFocus'), true)
    assert.equal(wrapper.prop('pattern'), '[a-z0-9]')
  })

  it('should add an error class if passed an `error` prop', () => {
    const wrapper = shallow(<InputControl {...defaultProps}
      error="Something went wrong"
    />)
    assert.equal(wrapper.prop('className'), 'control control--text control--error')
  })
})
