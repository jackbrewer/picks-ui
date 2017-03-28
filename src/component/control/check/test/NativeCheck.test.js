import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import NativeCheckControl from '../NativeCheck'

const defaultProps = {
  name: 'example',
  type: 'checkbox'
}

describe('Component: NativeCheckControl', () => {
  it('should add expected default type-specific props', () => {
    const wrapper = shallow(<NativeCheckControl {...defaultProps} />)
    assert.equal(wrapper.prop('element'), 'input')
    assert.equal(wrapper.prop('className'), 'control--check')
  })

  it('should add type-specific props if set', () => {
    const wrapper = shallow(<NativeCheckControl {...defaultProps}
      className="test-class"
      placeholder="Example placeholder"
    />)
    assert.equal(wrapper.prop('className'), 'control--check test-class')
  })
})
