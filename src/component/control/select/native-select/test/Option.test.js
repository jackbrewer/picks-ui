import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { stub } from 'sinon'

import Option from '../Option'

const defaultProps = {
  option: {
    text: 'Option 1',
    value: 1
  }
}

describe('Component: Option', () => {
  it('should error without the required props', () => {
    stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<Option />), Error)
  })

  it('should not error with required props', () => {
    const wrapper = shallow(<Option {...defaultProps} />)
    assert.equal(wrapper.type(), 'option')
    assert.equal(wrapper.prop('value'), 1)
    assert.equal(wrapper.text(), 'Option 1')
  })

  it('should reuse text as value if value not set', () => {
    const wrapper = shallow(<Option option={{ text: 'Example Text' }} />)
    assert.equal(wrapper.prop('value'), 'Example Text')
    assert.equal(wrapper.text(), 'Example Text')
  })
})
