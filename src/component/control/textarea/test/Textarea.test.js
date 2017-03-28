import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import TextareaControl from '../Textarea'

const defaultProps = {
  name: 'example',
  type: 'textarea'
}

describe('Component: TextareaControl', () => {
  it('should add expected default type-specific props', () => {
    const wrapper = shallow(<TextareaControl {...defaultProps} />)
    assert.equal(wrapper.prop('element'), 'textarea')
    assert.equal(wrapper.prop('placeholder'), undefined)
    assert.equal(wrapper.prop('className'), 'control--text control--multiline')
  })

  it('should add optional type-specific props if set', () => {
    const wrapper = shallow(<TextareaControl {...defaultProps}
      className="test-class"
      placeholder="Example placeholder"
    />)
    assert.equal(wrapper.prop('className'), 'control--text control--multiline test-class')
    assert.equal(wrapper.prop('placeholder'), 'Example placeholder')
  })
})
