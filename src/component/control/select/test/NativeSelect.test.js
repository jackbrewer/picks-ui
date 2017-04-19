import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import deepFreeze from 'deep-freeze'

import NativeSelectControl from '../NativeSelect'

const defaultProps = deepFreeze({
  name: 'example',
  options: [
    { text: 'Option 1', value: 1 },
    { text: 'Option 2', value: 2 },
    { text: 'Option 3', value: 3 }
  ],
  type: 'select'
})

describe('Component: NativeSelectControl', function () {
  it('should add expected default type-specific props', function () {
    const wrapper = shallow(<NativeSelectControl {...defaultProps} />)
    assert.equal(wrapper.prop('element'), 'select')
    assert.equal(wrapper.prop('className'), 'control--choice')
    assert.equal(wrapper.find('Option').length, 3)
  })

  it('should add optional type-specific props if set', function () {
    const wrapper = shallow(<NativeSelectControl {...defaultProps}
      className="test-class"
    />)
    assert.equal(wrapper.prop('className'), 'control--choice test-class')
  })
})
