import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { stub } from 'sinon'

import StandardTextField from '../StandardTextField'

const defaultProps = { label: 'Example Label', name: 'example', type: 'text' }

describe('Component: StandardTextField', () => {
  it('should error without the required props', () => {
    stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<StandardTextField />), Error)
    console.error.restore()
  })

  it('should not error with required props', () => {
    const wrapper = shallow(<StandardTextField {...defaultProps} />)
    assert.equal(wrapper.find('label').text(), 'Example Label')
    assert.equal(wrapper.find('Control').prop('type'), 'text')
    assert.equal(wrapper.prop('id'), 'field--example')
  })

  it('should not render additional attributes if props not set', () => {
    const wrapper = shallow(<StandardTextField {...defaultProps} />)
    assert.equal(wrapper.prop('assistance'), undefined)
    assert.equal(wrapper.prop('className'), 'field field--standard-text')
    assert.equal(wrapper.prop('error'), undefined)
  })

  it('should supply matching values to label’s `for` and Control’s `id`', () => {
    const wrapper = shallow(<StandardTextField {...defaultProps} />)
    const commonString = 'control--example'
    assert.equal(wrapper.find('label').prop('htmlFor'), commonString)
    assert.equal(wrapper.find('Control').prop('id'), commonString)
  })

  it('should add additional classes if set', () => {
    const wrapper = shallow(<StandardTextField {...defaultProps}
      className="test-class"
    />)
    assert.equal(wrapper.prop('className'), 'field field--standard-text test-class')
  })

  it('should add an assistance message if passed an `assistance` prop', () => {
    const wrapper = shallow(<StandardTextField {...defaultProps}
      assistance="Example Assistance"
    />)
    assert.equal(wrapper.find('.field__assistance').text(), 'Example Assistance')
  })

  it('should add an error class and message if passed an `error` prop', () => {
    const wrapper = shallow(<StandardTextField {...defaultProps}
      error="Something went wrong"
    />)
    assert.equal(wrapper.prop('className'), 'field field--standard-text field--error')
    assert.equal(wrapper.find('.field__feedback').text(), 'Something went wrong')
  })
})