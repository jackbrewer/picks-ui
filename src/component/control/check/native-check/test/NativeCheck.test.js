import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { spy, stub } from 'sinon'

import NativeCheckControl from '../NativeCheck'

const defaultProps = { name: 'example', type: 'checkbox' }

describe('Component: NativeCheckControl', () => {
  it('should error without the required props', () => {
    stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<NativeCheckControl />), Error)
    assert.throws(() => shallow(<NativeCheckControl name="example" type={null} />), Error)
    assert.throws(() => shallow(<NativeCheckControl name={null} type="text" />), Error)
    assert.throws(() => shallow(<NativeCheckControl name="example" type="text" />), Error)
    console.error.restore()
  })

  it('should not error with required props', () => {
    const wrapper = shallow(<NativeCheckControl {...defaultProps} />)
    assert.equal(wrapper.type(), 'input')
    assert.equal(wrapper.prop('name'), 'example')
    assert.equal(wrapper.prop('type'), 'checkbox')
    wrapper.setProps({ type: 'radio' })
    assert.equal(wrapper.prop('type'), 'radio')
  })

  it('should not render additional attributes if props not set', () => {
    const wrapper = shallow(<NativeCheckControl {...defaultProps} />)
    assert.equal(wrapper.prop('checked'), undefined)
    assert.equal(wrapper.prop('className'), 'control control--check')
    assert.equal(wrapper.prop('disabled'), undefined)
    assert.equal(wrapper.prop('onBlur'), undefined)
    assert.equal(wrapper.prop('onChange'), undefined)
    assert.equal(wrapper.prop('onFocus'), undefined)
    assert.equal(wrapper.prop('required'), undefined)
    assert.equal(wrapper.prop('value'), undefined)
  })

  it('should render additional attributes if props set', () => {
    const wrapper = shallow(<NativeCheckControl {...defaultProps}
      checked
      className="test-class"
      disabled
      onBlur={() => {}}
      onChange={() => {}}
      onFocus={() => {}}
      required
      value="Example Value"
    />)
    assert.equal(wrapper.prop('checked'), true)
    assert.equal(wrapper.prop('className'), 'control control--check test-class')
    assert.equal(wrapper.prop('disabled'), true)
    assert.equal(typeof wrapper.prop('onBlur'), 'function')
    assert.equal(typeof wrapper.prop('onChange'), 'function')
    assert.equal(typeof wrapper.prop('onFocus'), 'function')
    assert.equal(wrapper.prop('required'), true)
    assert.equal(wrapper.prop('value'), 'Example Value')
  })

  it('should trigger passed onBlur function when blurred', () => {
    const mockHandleBlur = spy()
    const wrapper = shallow(<NativeCheckControl {...defaultProps}
      onBlur={mockHandleBlur}
    />)
    assert.equal(mockHandleBlur.calledOnce, false)
    wrapper.simulate('blur')
    assert.equal(mockHandleBlur.calledOnce, true)
  })

  it('should trigger passed onChange function when changed', () => {
    const mockHandleChange = spy()
    const wrapper = shallow(<NativeCheckControl {...defaultProps}
      onChange={mockHandleChange}
    />)
    assert.equal(mockHandleChange.calledOnce, false)
    wrapper.simulate('change')
    assert.equal(mockHandleChange.calledOnce, true)
  })

  it('should trigger passed onFocus function when focussed', () => {
    const mockHandleFocus = spy()
    const wrapper = shallow(<NativeCheckControl {...defaultProps}
      onFocus={mockHandleFocus}
    />)
    assert.equal(mockHandleFocus.calledOnce, false)
    wrapper.simulate('focus')
    assert.equal(mockHandleFocus.calledOnce, true)
  })

  it('should render attributes if object passed an `additional` prop', () => {
    const wrapper = shallow(<NativeCheckControl {...defaultProps}
      additional={{ maxLength: 20, autoFocus: true, pattern: '[a-z0-9]' }}
    />)
    assert.equal(wrapper.prop('autoFocus'), true)
  })

  it('should add an error class if passed an `error` prop', () => {
    const wrapper = shallow(<NativeCheckControl {...defaultProps}
      error="Something went wrong"
    />)
    assert.equal(wrapper.prop('className'), 'control control--check control--error')
  })
})
