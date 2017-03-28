import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { stub } from 'sinon'

import CheckField from '../CheckField'

const defaultProps = { name: 'example', type: 'checkbox' }

describe('Component: CheckField', () => {
  it('should error without the required props', () => {
    stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<CheckField />), Error)
    console.error.restore()
  })

  it('should not error with required props', () => {
    const wrapper = shallow(<CheckField {...defaultProps} />)
    assert.equal(wrapper.find('Control').prop('type'), 'checkbox')
    assert.equal(wrapper.prop('id'), 'field--example')
  })

  it('should not render additional attributes if props not set', () => {
    const wrapper = shallow(<CheckField {...defaultProps} />)
    assert.equal(wrapper.prop('label'), undefined)
    assert.equal(wrapper.prop('assistance'), undefined)
    assert.equal(wrapper.prop('className'), 'field field--check')
    assert.equal(wrapper.prop('error'), undefined)
  })

  it('should add additional classes if set', () => {
    const wrapper = shallow(<CheckField {...defaultProps}
      className="test-class"
    />)
    assert.equal(wrapper.prop('className'), 'field field--check test-class')
  })

  it('should add alabel if passed a `label` prop', () => {
    const wrapper = shallow(<CheckField {...defaultProps}
      label="Example Label"
    />)
    assert.equal(wrapper.find('.field__question').text(), 'Example Label')
  })

  it('should add an assistance message if passed an `assistance` prop', () => {
    const wrapper = shallow(<CheckField {...defaultProps}
      assistance="Example Assistance"
    />)
    assert.equal(wrapper.find('.field__assistance').text(), 'Example Assistance')
  })

  it('should add an error class and message if passed an `error` prop', () => {
    const wrapper = shallow(<CheckField {...defaultProps}
      error="Something went wrong"
    />)
    assert.equal(wrapper.prop('className'), 'field field--check field--error')
    assert.equal(wrapper.find('.field__feedback').text(), 'Something went wrong')
  })
})
