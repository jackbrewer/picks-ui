import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import deepFreeze from 'deep-freeze'

import SelectControl from '../Select'

const defaultProps = deepFreeze({
  name: 'example',
  options: [ { text: 'Option 1', value: 1 } ]
})

describe('Component: SelectControl', function () {
  it('should render a CustomSelectControl by default', function () {
    const wrapper = shallow(<SelectControl {...defaultProps} />)
    assert.equal(wrapper.name(), 'CustomSelectControl')
  })

  it('should render a NativeSelectControl if passed `native` prop', function () {
    const wrapper = shallow(<SelectControl {...defaultProps}
      native
    />)
    assert.equal(wrapper.name(), 'NativeSelectControl')
  })
})
