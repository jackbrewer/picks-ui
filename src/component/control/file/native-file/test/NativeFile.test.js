import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { spy, stub } from 'sinon'

import NativeFileControl from '../NativeFile'

const defaultProps = {
  name: 'example'
}

describe('Component: NativeFileControl', () => {
  it('should error without the required props', () => {
    stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<NativeFileControl />), Error)
  })

  it('should not error with required props', () => {
    const wrapper = shallow(<NativeFileControl {...defaultProps} />)
    assert.equal(wrapper.type(), 'input')
    assert.equal(wrapper.prop('id'), 'control--example')
    assert.equal(wrapper.prop('name'), 'example')
    assert.equal(wrapper.prop('type'), 'file')
  })

  it('should not render additional attributes if props not set', () => {
    const wrapper = shallow(<NativeFileControl {...defaultProps} />)
    assert.equal(wrapper.prop('className'), 'control control--file')
    assert.equal(wrapper.prop('disabled'), undefined)
    assert.equal(wrapper.prop('onBlur'), undefined)
    assert.equal(wrapper.prop('onChange'), undefined)
    assert.equal(wrapper.prop('onFocus'), undefined)
    assert.equal(wrapper.prop('required'), undefined)
  })

  it('should render additional attributes if props set', () => {
    const wrapper = shallow(<NativeFileControl {...defaultProps}
      className="test-class"
      disabled
      onBlur={() => {}}
      onChange={() => {}}
      onFocus={() => {}}
      placeholder="Example placeholder"
      required
    />)
    assert.equal(wrapper.prop('className'), 'control control--file test-class')
    assert.equal(wrapper.prop('disabled'), true)
    assert.equal(typeof wrapper.prop('onBlur'), 'function')
    assert.equal(typeof wrapper.prop('onChange'), 'function')
    assert.equal(typeof wrapper.prop('onFocus'), 'function')
    assert.equal(wrapper.prop('required'), true)
  })

  it('should trigger passed onBlur function when blurred', () => {
    const mockHandleBlur = spy()
    const wrapper = shallow(<NativeFileControl {...defaultProps}
      onBlur={mockHandleBlur}
    />)
    assert.equal(mockHandleBlur.calledOnce, false)
    wrapper.simulate('blur')
    assert.equal(mockHandleBlur.calledOnce, true)
  })

  it('should trigger passed onChange function when changed', () => {
    const mockHandleChange = spy()
    const wrapper = shallow(<NativeFileControl {...defaultProps}
      onChange={mockHandleChange}
    />)
    assert.equal(mockHandleChange.calledOnce, false)
    wrapper.simulate('change')
    assert.equal(mockHandleChange.calledOnce, true)
  })

  it('should trigger passed onFocus function when focussed', () => {
    const mockHandleFocus = spy()
    const wrapper = shallow(<NativeFileControl {...defaultProps}
      onFocus={mockHandleFocus}
    />)
    assert.equal(mockHandleFocus.calledOnce, false)
    wrapper.simulate('focus')
    assert.equal(mockHandleFocus.calledOnce, true)
  })

  it('should render attributes if object passed an `additional` prop', () => {
    const wrapper = shallow(<NativeFileControl {...defaultProps}
      additional={{ multiple: true, accept: 'image/*' }}
    />)
    assert.equal(wrapper.prop('multiple'), true)
    assert.equal(wrapper.prop('accept'), 'image/*')
  })

  it('should add an error class if passed an `error` prop', () => {
    const wrapper = shallow(<NativeFileControl {...defaultProps}
      error="Something went wrong"
    />)
    assert.equal(wrapper.prop('className'), 'control control--file control--error')
  })
})
