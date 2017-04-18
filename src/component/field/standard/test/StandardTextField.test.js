import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import StandardTextField from '../StandardTextField'

const defaultProps = Object.freeze({
  label: 'Example Label',
  name: 'example',
  type: 'text'
})

describe('Component: StandardTextField', function () {
  it('should error without the required props', function () {
    const originalError = console.error
    console.error = message => { throw new Error(message) }
    assert.throws(() => shallow(<StandardTextField />), Error)
    console.error = originalError
  })

  it('should not error with required props', function () {
    const wrapper = shallow(<StandardTextField {...defaultProps} />)
    assert.equal(wrapper.find('label').text(), 'Example Label')
    assert.equal(wrapper.find('Control').prop('type'), 'text')
    assert.equal(wrapper.prop('id'), 'field--example')
  })

  it('should not render additional attributes if props not set', function () {
    const wrapper = shallow(<StandardTextField {...defaultProps} />)
    assert.equal(wrapper.prop('assistance'), undefined)
    assert.equal(wrapper.prop('className'), 'field field--standard-text')
    assert.equal(wrapper.prop('error'), undefined)
  })

  it('should supply matching values to label’s `for` and Control’s `id`', function () {
    const wrapper = shallow(<StandardTextField {...defaultProps} />)
    const commonString = 'control--example'
    assert.equal(wrapper.find('label').prop('htmlFor'), commonString)
    assert.equal(wrapper.find('Control').prop('id'), commonString)
  })

  it('should add additional classes if set', function () {
    const wrapper = shallow(<StandardTextField {...defaultProps}
      className="test-class"
    />)
    assert.equal(wrapper.prop('className'), 'field field--standard-text test-class')
  })

  it('should add an assistance message if passed an `assistance` prop', function () {
    const wrapper = shallow(<StandardTextField {...defaultProps}
      assistance="Example Assistance"
    />)
    assert.equal(wrapper.find('.field__assistance').text(), 'Example Assistance')
  })

  it('should add classes if passed a `modifiers` prop', function () {
    const wrapper = shallow(<StandardTextField {...defaultProps}
      modifiers={[ 'one', 'two' ]}
    />)
    assert.equal(wrapper.prop('className'), 'field field--standard-text field--one field--two')
  })

  it('should add an error class and message if passed an `error` prop', function () {
    const wrapper = shallow(<StandardTextField {...defaultProps}
      error="Something went wrong"
    />)
    assert.equal(wrapper.prop('className'), 'field field--standard-text field--error')
    assert.equal(wrapper.find('.field__feedback').text(), 'Something went wrong')
  })
})
