import React from 'react'
import assert from 'assert'
import { shallow, mount } from 'enzyme'
import { spy } from 'sinon'
import deepFreeze from 'deep-freeze'

import Toggle from '../Toggle'

const defaultProps = deepFreeze({
  label: 'Example Label',
  name: 'exampleName',
  value: 'Example Value'
})

describe('Component: Toggle', function () {
  it('should error without the required props', function () {
    const originalError = console.error
    console.error = message => { throw new Error(message) }
    assert.throws(() => shallow(<Toggle />), Error)
    console.error = originalError
  })

  it('should render the expected HTML when passed multiple options', function () {
    const wrapper = shallow(<Toggle {...defaultProps} />)
    assert.equal(wrapper.type(), 'label')
    assert.equal(wrapper.find('input').prop('name'), 'exampleName')
    assert.equal(wrapper.find('span.is-vhidden').text(), 'Example Label')
    assert.equal(wrapper.find('input').prop('value'), 'Example Value')
  })

  it('should not output additional props if not set', function () {
    const wrapper = shallow(<Toggle {...defaultProps} />)
    assert.equal(wrapper.find('input').prop('checked'), false)
    assert.equal(wrapper.find('input').prop('onChange'), undefined)
    assert.equal(wrapper.find('.toggle__frame').prop('data-text-checked'), undefined)
    assert.equal(wrapper.find('.toggle__frame').prop('data-text-unchecked'), undefined)
  })

  it('should use additional props if set', function () {
    const wrapper = shallow(<Toggle {...defaultProps}
      checked
      onChange={() => {}}
      textChecked="On"
      textUnchecked="Off"
    />)
    assert.equal(wrapper.find('input').prop('checked'), true)
    assert.equal(typeof wrapper.find('input').prop('onChange'), 'function')
    assert.equal(wrapper.find('.toggle__frame').prop('data-text-checked'), 'On')
    assert.equal(wrapper.find('.toggle__frame').prop('data-text-unchecked'), 'Off')
  })

  it('should trigger passed onChange function when changed', function () {
    const mockHandleChange = spy()
    const wrapper = shallow(<Toggle {...defaultProps}
      onChange={mockHandleChange}
    />)
    assert.equal(mockHandleChange.calledOnce, false)
    wrapper.find('input').simulate('change')
    assert.equal(mockHandleChange.calledOnce, true)
  })

  it('should change input checkes state on interaction with label', function () {
    const wrapper = mount(<Toggle {...defaultProps} />)
    assert.equal(wrapper.find('input').prop('checked'), false)
    // Click shouldn't trigger the input change
    wrapper.simulate('click')
    assert.equal(wrapper.find('input').prop('checked'), false)
    // Mousedown and touchstart should trigger the input change
    wrapper.simulate('mousedown')
    assert.equal(wrapper.find('input').prop('checked'), true)
    wrapper.simulate('touchstart')
    assert.equal(wrapper.find('input').prop('checked'), false)
  })

  it('should trigger mock input onChange on interaction with label if set', function () {
    const mockHandleChange = spy()
    const wrapper = mount(<Toggle {...defaultProps}
      onChange={mockHandleChange}
    />)
    assert.equal(mockHandleChange.callCount, 0)
    // Click shouldn't trigger the change function
    wrapper.simulate('click', { preventDefault: () => {}, type: 'click', target: { name: 'Example Name', checked: true } })
    assert.equal(mockHandleChange.callCount, 0)
    // Mousedown and touchstart should trigger the change function
    wrapper.simulate('mousedown', { preventDefault: () => {}, type: 'mousedown', target: { name: 'Example Name', checked: true } })
    assert.equal(mockHandleChange.callCount, 1)
    wrapper.simulate('touchstart', { preventDefault: () => {}, type: 'touchstart', target: { name: 'Example Name', checked: true } })
    assert.equal(mockHandleChange.callCount, 2)
  })
})
