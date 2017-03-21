import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { stub } from 'sinon'

import SiteSwitch from '../SiteSwitch'

describe('Component: SiteSwitch', () => {
  it('should error if no href is passed', () => {
    stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<SiteSwitch />), Error)
  })

  it('should render expected defaults when reqired props passed', () => {
    const wrapper = shallow(<SiteSwitch href="http://example.com" />)
    assert.equal(wrapper.type(), 'a')
    assert.equal(wrapper.prop('className'), 'site-switch')
    assert.equal(wrapper.prop('href'), 'http://example.com')
  })

  it('should show a label if prop passed', () => {
    const wrapper = shallow(<SiteSwitch href="http://example.com" />)
    assert.equal(wrapper.find('.site-switch__label').length, 0)
    wrapper.setProps({ label: 'Example' })
    assert.equal(wrapper.find('.site-switch__label').text(), 'Example')
  })
})
