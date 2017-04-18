import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import NativeCheckControl from '../NativeCheck'

const defaultProps = Object.freeze({
  name: 'example',
  type: 'checkbox'
})

describe('Component: NativeCheckControl', function () {
  it('should add expected default type-specific props', function () {
    const wrapper = shallow(<NativeCheckControl {...defaultProps} />)
    assert.equal(wrapper.prop('element'), 'input')
    assert.equal(wrapper.prop('className'), 'control--check')
  })

  it('should add classes if passed a `modifiers` prop', function () {
    const wrapper = shallow(<NativeCheckControl {...defaultProps}
      modifiers={[ 'one', 'two' ]}
    />)
    assert.equal(wrapper.prop('className'), 'control--check custom-search--one custom-search--two')
  })

  it('should add type-specific props if set', function () {
    const wrapper = shallow(<NativeCheckControl {...defaultProps}
      className="test-class"
      placeholder="Example placeholder"
    />)
    assert.equal(wrapper.prop('className'), 'control--check test-class')
  })
})
