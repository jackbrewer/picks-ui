import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import deepFreeze from 'deep-freeze'

import Control from '../Control'

const defaultOptions = deepFreeze([
  { text: 'Option 1', value: 1 },
  { text: 'Option 2', value: 2 },
  { text: 'Option 3', value: 3 }
])

describe('Component: Control', function () {
  it('should error without the required props', function () {
    const originalError = console.error
    console.error = message => { throw new Error(message) }
    assert.throws(() => shallow(<Control />), Error)
    console.error = originalError
  })

  it('should render correct specialised control based on `type` prop', function () {
    const wrapper = shallow(<Control type="date" name="example" />)
    assert.equal(wrapper.name(), 'DateControl')
    wrapper.setProps({ type: 'file' })
    assert.equal(wrapper.name(), 'FileControl')
    wrapper.setProps({ type: 'textarea' })
    assert.equal(wrapper.name(), 'TextareaControl')
  })

  it('should render correct option control based on `type` prop', function () {
    const wrapper = shallow(<Control type="checkbox" name="example" options={defaultOptions} />)
    assert.equal(wrapper.name(), 'CheckControl')
    wrapper.setProps({ type: 'radio' })
    assert.equal(wrapper.name(), 'CheckControl')
    wrapper.setProps({ type: 'select' })
    assert.equal(wrapper.name(), 'SelectControl')
  })

  it('should render default generic control based on `type` prop', function () {
    const wrapper = shallow(<Control type="text" name="example" />)
    assert.equal(wrapper.name(), 'TextControl')
    wrapper.setProps({ type: 'email' })
    assert.equal(wrapper.name(), 'TextControl')
    wrapper.setProps({ type: 'url' })
    assert.equal(wrapper.name(), 'TextControl')
    wrapper.setProps({ type: 'password' })
    assert.equal(wrapper.name(), 'TextControl')
  })
})
