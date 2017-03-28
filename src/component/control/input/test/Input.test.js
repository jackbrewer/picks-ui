import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import InputControl from '../Input'

const defaultProps = {
  name: 'example',
  type: 'text'
}

describe('Component: InputControl', () => {
  it('should add expected default type-specific props', () => {
    const wrapper = shallow(<InputControl {...defaultProps} />)
    assert.equal(wrapper.prop('element'), 'input')
    assert.equal(wrapper.prop('className'), 'control--text')
    assert.equal(wrapper.prop('placeholder'), undefined)
  })

  it('should add type-specific props if set', () => {
    const wrapper = shallow(<InputControl {...defaultProps}
      className="test-class"
      placeholder="Example placeholder"
    />)
    assert.equal(wrapper.prop('className'), 'control--text test-class')
    assert.equal(wrapper.prop('placeholder'), 'Example placeholder')
  })
})
