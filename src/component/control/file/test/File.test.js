import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import FileControl from '../File'

const defaultProps = Object.freeze({
  name: 'example'
})

describe('Component: FileControl', function () {
  it('should render a CustomFileControl by default', function () {
    const wrapper = shallow(<FileControl {...defaultProps} />)
    assert.equal(wrapper.name(), 'CustomFileControl')
  })

  it('should render a NativeFileControl if passed `native` prop', function () {
    const wrapper = shallow(<FileControl {...defaultProps}
      native
    />)
    assert.equal(wrapper.name(), 'NativeFileControl')
  })
})
