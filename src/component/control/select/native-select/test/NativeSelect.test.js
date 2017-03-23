import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { spy, stub } from 'sinon'

import NativeSelectControl from '../NativeSelect'

const defaultProps = {
  name: 'example',
  options: [
    { text: 'Option 1', value: 1 },
    { text: 'Option 2', value: 2 },
    { text: 'Option 3', value: 3 }
  ]
}

describe('Component: NativeSelectControl', () => {
  it('should error without the required props', () => {
    stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<NativeSelectControl />), Error)
    assert.throws(() => shallow(<NativeSelectControl name="example" options={null} />), Error)
    assert.throws(() => shallow(<NativeSelectControl name={null} options={defaultProps.options} />), Error)
  })

  it('should not error with required props', () => {
    const wrapper = shallow(<NativeSelectControl {...defaultProps} />)
    assert.equal(wrapper.type(), 'select')
    assert.equal(wrapper.prop('name'), 'example')
    assert.equal(wrapper.find('Option').length, 3)
  })

  it('should not render additional attributes if props not set', () => {
    const wrapper = shallow(<NativeSelectControl {...defaultProps} />)
    assert.equal(wrapper.prop('className'), 'control control--choice')
    assert.equal(wrapper.prop('disabled'), undefined)
    assert.equal(wrapper.prop('id'), undefined)
    assert.equal(wrapper.prop('onBlur'), undefined)
    assert.equal(wrapper.prop('onChange'), undefined)
    assert.equal(wrapper.prop('onFocus'), undefined)
    assert.equal(wrapper.prop('required'), undefined)
    assert.equal(wrapper.prop('value'), undefined)
  })

  it('should render additional attributes if props set', () => {
    const wrapper = shallow(<NativeSelectControl {...defaultProps}
      className="test-class"
      disabled
      id="example-id"
      onBlur={() => {}}
      onChange={() => {}}
      onFocus={() => {}}
      placeholder="Example placeholder"
      required
      currentValue="Example Value"
    />)
    assert.equal(wrapper.prop('className'), 'control control--choice test-class')
    assert.equal(wrapper.prop('disabled'), true)
    assert.equal(wrapper.prop('id'), 'example-id')
    assert.equal(typeof wrapper.prop('onBlur'), 'function')
    assert.equal(typeof wrapper.prop('onChange'), 'function')
    assert.equal(typeof wrapper.prop('onFocus'), 'function')
    assert.equal(wrapper.prop('required'), true)
    assert.equal(wrapper.prop('value'), 'Example Value')
  })

  it('should trigger passed onBlur function when blurred', () => {
    const mockHandleBlur = spy()
    const wrapper = shallow(<NativeSelectControl {...defaultProps}
      onBlur={mockHandleBlur}
    />)
    assert.equal(mockHandleBlur.calledOnce, false)
    wrapper.simulate('blur')
    assert.equal(mockHandleBlur.calledOnce, true)
  })

  it('should trigger passed onChange function when changed', () => {
    const mockHandleChange = spy()
    const wrapper = shallow(<NativeSelectControl {...defaultProps}
      onChange={mockHandleChange}
    />)
    assert.equal(mockHandleChange.calledOnce, false)
    wrapper.simulate('change')
    assert.equal(mockHandleChange.calledOnce, true)
  })

  it('should trigger passed onFocus function when focussed', () => {
    const mockHandleFocus = spy()
    const wrapper = shallow(<NativeSelectControl {...defaultProps}
      onFocus={mockHandleFocus}
    />)
    assert.equal(mockHandleFocus.calledOnce, false)
    wrapper.simulate('focus')
    assert.equal(mockHandleFocus.calledOnce, true)
  })

  it('should render attributes if object passed an `additional` prop', () => {
    const wrapper = shallow(<NativeSelectControl {...defaultProps}
      additional={{ autoFocus: true, size: 3 }}
    />)
    assert.equal(wrapper.prop('autoFocus'), true)
    assert.equal(wrapper.prop('size'), 3)
  })

  it('should add an error class if passed an `error` prop', () => {
    const wrapper = shallow(<NativeSelectControl {...defaultProps}
      error="Something went wrong"
    />)
    assert.equal(wrapper.prop('className'), 'control control--choice control--error')
  })

  it('should add a selected attribute if value === currentValue', () => {
    const wrapper = shallow(<NativeSelectControl {...defaultProps} />)
    assert.equal(wrapper.prop('value'), undefined)
    wrapper.setProps({ currentValue: 1 })
    assert.equal(wrapper.prop('value'), 1)
  })
})
