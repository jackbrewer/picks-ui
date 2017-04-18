import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import TextControl from '../Text'

const defaultProps = Object.freeze({
  name: 'example',
  type: 'text'
})

describe('Component: TextControl', function () {
  it('should add expected default type-specific props', function () {
    const wrapper = shallow(<TextControl {...defaultProps} />)
    assert.equal(wrapper.prop('element'), 'input')
    assert.equal(wrapper.prop('className'), 'control--text')
    assert.equal(wrapper.prop('placeholder'), undefined)
  })

  it('should add type-specific props if set', function () {
    const wrapper = shallow(<TextControl {...defaultProps}
      className="test-class"
      placeholder="Example placeholder"
    />)
    assert.equal(wrapper.prop('className'), 'control--text test-class')
    assert.equal(wrapper.prop('placeholder'), 'Example placeholder')
  })
})
