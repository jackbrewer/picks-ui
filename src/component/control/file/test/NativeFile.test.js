import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import NativeFileControl from '../NativeFile'

const defaultProps = {
  name: 'example'
}

describe('Component: NativeFileControl', () => {
  it('should add expected default type-specific props', () => {
    const wrapper = shallow(<NativeFileControl {...defaultProps} />)
    assert.equal(wrapper.prop('element'), 'input')
    assert.equal(wrapper.prop('className'), 'control--file')
  })

  it('should add type-specific props if set', () => {
    const wrapper = shallow(<NativeFileControl {...defaultProps}
      className="test-class"
    />)
    assert.equal(wrapper.prop('className'), 'control--file test-class')
  })
})