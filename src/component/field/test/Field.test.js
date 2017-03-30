import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import Field from '../Field'

describe('Component: Field', function () {
  it('should error without the required props', function () {
    const originalError = console.error
    console.error = message => { throw new Error(message) }
    assert.throws(() => shallow(<Field />), Error)
    console.error = originalError
  })

  it('should render correct default Field based on `type` prop', function () {
    const wrapper = shallow(<Field type="checkbox" name="example" />)
    assert.equal(wrapper.name(), 'StandardCheckField')
    wrapper.setProps({ type: 'text' })
    assert.equal(wrapper.name(), 'StandardTextField')
    wrapper.setProps({ type: 'radio' })
    assert.equal(wrapper.name(), 'StandardCheckField')
    wrapper.setProps({ type: 'url' })
    assert.equal(wrapper.name(), 'StandardTextField')
  })
})
