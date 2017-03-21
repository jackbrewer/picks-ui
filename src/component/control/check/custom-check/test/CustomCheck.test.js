import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import CustomCheckControl from '../CustomCheck'

const defaultProps = {
  name: 'example',
  text: 'Option 1',
  type: 'checkbox',
  value: 1
}

describe('Component: CustomCheckControl', () => {
  it('should render output the expected HTML by default', () => {
    const wrapper = shallow(<CustomCheckControl {...defaultProps} />)
    assert.equal(wrapper.type(), 'span')
    assert.equal(wrapper.prop('className'), 'custom-check custom-check--checkbox')
    assert.equal(wrapper.find('NativeCheckControl').prop('type'), 'checkbox')
  })

  it('should render output the expected HTML by default', () => {
    const wrapper = shallow(<CustomCheckControl {...defaultProps}
      type="radio"
    />)
    assert.equal(wrapper.prop('className'), 'custom-check custom-check--radio')
    assert.equal(wrapper.find('NativeCheckControl').prop('type'), 'radio')
  })

  it('should add an error class if passed an `error` prop', () => {
    const wrapper = shallow(<CustomCheckControl {...defaultProps}
      error="Something went wrong"
    />)
    assert.equal(wrapper.prop('className'), 'custom-check custom-check--checkbox custom-check--error')
  })
})
