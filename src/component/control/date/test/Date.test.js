import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import DateControl from '../Date'

const defaultProps = Object.freeze({
  name: 'example',
  type: 'date'
})

describe('Component: DateControl', function () {
  it('should render output the expected HTML by default', function () {
    const wrapper = shallow(<DateControl {...defaultProps} />)
    assert.equal(wrapper.type(), 'span')
    assert.equal(wrapper.prop('className'), 'datepicker')
    assert.equal(wrapper.find('Icon').length, 1)
    assert.equal(wrapper.find('TextControl').length, 1)
  })

  it('should format value prop to the expected date format', function () {
    const wrapper = shallow(<DateControl {...defaultProps}
      value="2014-04-25T01:32:21.196Z"
    />)
    assert.equal(wrapper.find('TextControl').prop('value'), '2014-04-25')
  })

  it('should add classes if passed a `modifiers` prop', function () {
    const wrapper = shallow(<DateControl {...defaultProps}
      modifiers={[ 'one', 'two' ]}
    />)
    assert.equal(wrapper.prop('className'), 'datepicker datepicker--one datepicker--two')
  })

  it('should add an error class if passed an `error` prop', function () {
    const wrapper = shallow(<DateControl {...defaultProps}
      error="Something went wrong"
    />)
    assert.equal(wrapper.prop('className'), 'datepicker datepicker--error')
  })
})
