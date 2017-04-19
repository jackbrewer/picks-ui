import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import deepFreeze from 'deep-freeze'

import CustomSelectControl from '../CustomSelect'

const defaultProps = deepFreeze({
  name: 'example',
  options: [
    { text: 'Option 1', value: 1 },
    { text: 'Option 2', value: 2 },
    { text: 'Option 3', value: 3 }
  ]
})

describe('Component: CustomSelectControl', function () {
  it('should render output the expected HTML by default', function () {
    const wrapper = shallow(<CustomSelectControl {...defaultProps} />)
    assert.equal(wrapper.type(), 'span')
    assert.equal(wrapper.prop('className'), 'custom-select')
    assert.equal(wrapper.find('NativeSelectControl').length, 1)
  })

  it('should add classes if passed a `modifiers` prop', function () {
    const wrapper = shallow(<CustomSelectControl {...defaultProps}
      modifiers={[ 'one', 'two' ]}
    />)
    assert.equal(wrapper.prop('className'), 'custom-select custom-select--one custom-select--two')
  })

  it('should add an error class if passed an `error` prop', function () {
    const wrapper = shallow(<CustomSelectControl {...defaultProps}
      error="Something went wrong"
    />)
    assert.equal(wrapper.prop('className'), 'custom-select custom-select--error')
  })
})
