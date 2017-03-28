import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { stub } from 'sinon'

import Field from '../Field'

describe('Component: Field', () => {
  it('should error without the required props', () => {
    stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<Field />), Error)
    console.error.restore()
  })

  it('should render correct default Field based on `type` prop', () => {
    const wrapper = shallow(<Field type="checkbox" name="example" />)
    assert.equal(wrapper.name(), 'CheckField')
    wrapper.setProps({ type: 'text' })
    assert.equal(wrapper.name(), 'StandardField')
    wrapper.setProps({ type: 'radio' })
    assert.equal(wrapper.name(), 'CheckField')
    wrapper.setProps({ type: 'url' })
    assert.equal(wrapper.name(), 'StandardField')
  })
})
