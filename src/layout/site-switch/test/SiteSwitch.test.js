import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import SiteSwitch from '../SiteSwitch'

describe('Component: SiteSwitch', function () {
  it('should error if no href is passed', function () {
    const originalError = console.error
    console.error = message => { throw new Error(message) }
    assert.throws(() => shallow(<SiteSwitch />), Error)
    console.error = originalError
  })

  it('should render expected defaults when reqired props passed', function () {
    const wrapper = shallow(<SiteSwitch href="http://example.com" />)
    assert.equal(wrapper.type(), 'a')
    assert.equal(wrapper.prop('className'), 'site-switch')
    assert.equal(wrapper.prop('href'), 'http://example.com')
  })

  it('should show a label if prop passed', function () {
    const wrapper = shallow(<SiteSwitch href="http://example.com" />)
    assert.equal(wrapper.find('.site-switch__label').length, 0)
    wrapper.setProps({ label: 'Example' })
    assert.equal(wrapper.find('.site-switch__label').text(), 'Example')
  })
})
