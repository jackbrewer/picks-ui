import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import deepFreeze from 'deep-freeze'

import SingleCheckControl from '../SingleCheck'

const defaultProps = deepFreeze({
  name: 'example',
  option: {
    text: 'Option 1',
    value: 1
  },
  type: 'checkbox'
})

describe('Component: SingleCheckControl', function () {
  it('should render a CustomCheckControl by default', function () {
    const wrapper = shallow(<SingleCheckControl {...defaultProps} />)
    assert.equal(wrapper.type(), 'label')
    assert.equal(wrapper.find('CustomCheckControl').length, 1)
    assert.equal(wrapper.find('span').at(1).text(), 'Option 1')
  })

  it('should render a NativeCheckControl if passed `native` prop', function () {
    const wrapper = shallow(<SingleCheckControl {...defaultProps}
      native
    />)
    assert.equal(wrapper.type(), 'label')
    assert.equal(wrapper.find('NativeCheckControl').length, 1)
    assert.equal(wrapper.find('span').at(1).text(), 'Option 1')
  })

  it('should allow a Component as the text prop', function () {
    const wrapper = shallow(<SingleCheckControl {...defaultProps}
      option={{
        text: <span>I am <strong>HTML</strong></span>,
        value: 'example value'
      }}
    />)
    assert.equal(wrapper.find('span').at(1).childAt(0).text(), 'I am HTML')
    assert.equal(wrapper.find('span').at(1).childAt(0).html(), '<span>I am <strong>HTML</strong></span>')
  })

  it('should not add a checked attribute if value not set', function () {
    const wrapper = shallow(<SingleCheckControl {...defaultProps} />)
    assert.equal(wrapper.find('CustomCheckControl').prop('checked'), undefined)
  })

  it('should add a checked attribute if value === option.value', function () {
    const wrapper = shallow(<SingleCheckControl {...defaultProps} />)
    assert.equal(wrapper.find('CustomCheckControl').prop('checked'), undefined)
    wrapper.setProps({ value: 1 })
    assert.equal(wrapper.find('CustomCheckControl').prop('checked'), true)
  })

  it('should add a checked attribute if value is in an array of option values', function () {
    const wrapper = shallow(<SingleCheckControl {...defaultProps} />)
    assert.equal(wrapper.find('CustomCheckControl').prop('checked'), undefined)
    wrapper.setProps({ value: [ 1, 2, 3 ] })
    assert.equal(wrapper.find('CustomCheckControl').prop('checked'), true)
  })
})
