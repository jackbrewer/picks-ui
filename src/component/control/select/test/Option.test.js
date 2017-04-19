import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import deepFreeze from 'deep-freeze'

import Option from '../Option'

const defaultProps = deepFreeze({
  option: {
    text: 'Option 1',
    value: 1
  }
})

describe('Component: Option', function () {
  it('should error without the required props', function () {
    const originalError = console.error
    console.error = message => { throw new Error(message) }
    assert.throws(() => shallow(<Option />), Error)
    console.error = originalError
  })

  it('should not error with required props', function () {
    const wrapper = shallow(<Option {...defaultProps} />)
    assert.equal(wrapper.type(), 'option')
    assert.equal(wrapper.prop('value'), 1)
    assert.equal(wrapper.text(), 'Option 1')
  })

  it('should reuse text as value if value not set', function () {
    const wrapper = shallow(<Option option={{ text: 'Example Text' }} />)
    assert.equal(wrapper.prop('value'), 'Example Text')
    assert.equal(wrapper.text(), 'Example Text')
  })
})
