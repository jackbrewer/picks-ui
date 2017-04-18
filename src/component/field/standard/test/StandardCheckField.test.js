import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import StandardCheckField from '../StandardCheckField'

const defaultProps = Object.freeze({
  name: 'example',
  type: 'checkbox'
})

describe('Component: StandardCheckField', function () {
  it('should error without the required props', function () {
    const originalError = console.error
    console.error = message => { throw new Error(message) }
    assert.throws(() => shallow(<StandardCheckField />), Error)
    console.error = originalError
  })

  it('should not error with required props', function () {
    const wrapper = shallow(<StandardCheckField {...defaultProps} />)
    assert.equal(wrapper.find('Control').prop('type'), 'checkbox')
    assert.equal(wrapper.prop('id'), 'field--example')
  })

  it('should not render additional attributes if props not set', function () {
    const wrapper = shallow(<StandardCheckField {...defaultProps} />)
    assert.equal(wrapper.prop('label'), undefined)
    assert.equal(wrapper.prop('assistance'), undefined)
    assert.equal(wrapper.prop('className'), 'field field--standard-check')
    assert.equal(wrapper.prop('error'), undefined)
  })

  it('should add additional classes if set', function () {
    const wrapper = shallow(<StandardCheckField {...defaultProps}
      className="test-class"
    />)
    assert.equal(wrapper.prop('className'), 'field field--standard-check test-class')
  })

  it('should not add label-specific a11y props if not passed a `label` prop', function () {
    const wrapper = shallow(<StandardCheckField {...defaultProps} />)
    assert.equal(wrapper.find('.field__question').length, 0)
    assert.equal(wrapper.prop('aria-labelledby'), undefined)
    assert.equal(wrapper.prop('role'), undefined)
  })

  it('should add a label and label-specific a11y props if passed a `label` prop', function () {
    const wrapper = shallow(<StandardCheckField {...defaultProps}
      label="Example Label"
    />)
    assert.equal(wrapper.find('.field__question').text(), 'Example Label')
    assert.equal(wrapper.prop('aria-labelledby'), 'question--example')
    assert.equal(wrapper.prop('role'), 'group')
  })

  it('should add an assistance message if passed an `assistance` prop', function () {
    const wrapper = shallow(<StandardCheckField {...defaultProps}
      assistance="Example Assistance"
    />)
    assert.equal(wrapper.find('.field__assistance').text(), 'Example Assistance')
  })

  it('should add classes if passed a `modifiers` prop', function () {
    const wrapper = shallow(<StandardCheckField {...defaultProps}
      modifiers={[ 'one', 'two' ]}
    />)
    assert.equal(wrapper.prop('className'), 'field field--standard-check field--one field--two')
  })

  it('should add an error class and message if passed an `error` prop', function () {
    const wrapper = shallow(<StandardCheckField {...defaultProps}
      error="Something went wrong"
    />)
    assert.equal(wrapper.prop('className'), 'field field--standard-check field--error')
    assert.equal(wrapper.find('.field__feedback').text(), 'Something went wrong')
  })
})
