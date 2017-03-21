import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import FileControl from '../File'

const defaultProps = {
  name: 'example'
}

describe('Component: FileControl', () => {
  it('should render a CustomFileControl by default', () => {
    const wrapper = shallow(<FileControl {...defaultProps} />)
    assert.equal(wrapper.name(), 'CustomFileControl')
  })

  it('should render a NativeFileControl if passed `native` prop', () => {
    const wrapper = shallow(<FileControl {...defaultProps}
      native
    />)
    assert.equal(wrapper.name(), 'NativeFileControl')
  })
})
