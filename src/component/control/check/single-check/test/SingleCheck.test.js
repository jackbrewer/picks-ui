import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import SingleCheckControl from '../SingleCheck'

const defaultProps = {
  name: 'example',
  text: 'Option 1',
  type: 'checkbox',
  value: 1
}

describe('Component: SingleCheckControl', () => {
  it('should render a CustomCheckControl by default', () => {
    const wrapper = shallow(<SingleCheckControl {...defaultProps} />)
    assert.equal(wrapper.type(), 'label')
    assert.equal(wrapper.find('CustomCheckControl').length, 1)
    assert.equal(wrapper.find('span').at(1).text(), 'Option 1')
  })

  it('should render a NativeCheckControl if passed `native` prop', () => {
    const wrapper = shallow(<SingleCheckControl {...defaultProps}
      native
    />)
    assert.equal(wrapper.type(), 'label')
    assert.equal(wrapper.find('NativeCheckControl').length, 1)
    assert.equal(wrapper.find('span').at(1).text(), 'Option 1')
  })

  it('should add a checked attribute if value === currentValue', () => {
    const wrapper = shallow(<SingleCheckControl {...defaultProps} />)
    assert.equal(wrapper.find('CustomCheckControl').prop('checked'), false)
    wrapper.setProps({ currentValue: 1 })
    assert.equal(wrapper.find('CustomCheckControl').prop('checked'), true)
  })

  it('should add a checked attribute if value is in an array of currentValues', () => {
    const wrapper = shallow(<SingleCheckControl {...defaultProps} />)
    assert.equal(wrapper.find('CustomCheckControl').prop('checked'), false)
    wrapper.setProps({ currentValue: [ 1, 2, 3 ] })
    assert.equal(wrapper.find('CustomCheckControl').prop('checked'), true)
  })
})
